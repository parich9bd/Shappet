"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Phone, Lock, X } from "lucide-react";

import { toEnglishDigits } from "@/utils/convertDigits";
import styles from "./Login.module.css";

import { loginSchema } from "@/schemas/loginSchema";
import { useSendOtp, useVerifyOtp } from "@/hooks/useLogin";
import { useAuth } from "@/context/Auth/AuthContext";

function Login({ onClose }) {
  const router = useRouter();
  const { setUser } = useAuth();

  const [otpSent, setOtpSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      phone: "",
      code: "",
    },
  });

  const phone = watch("phone");

  const sendOtp = useSendOtp(setOtpSent);

  const verifyOtp = useVerifyOtp({
    phone,

    onSuccess: (data) => {
      // Update global authentication state
      setUser(data.user);

      // Close login modal
      onClose();

      // Go to home page
      router.push("/");
    },
  });

  const onSubmit = (data) => {
    const phone = data.phone;
    const code = data.code;

    // Step 1: Send OTP
    if (!otpSent) {
      sendOtp.mutate({ phone });
      return;
    }

    // Step 2: Validate OTP input
    if (!code) {
      toast.error("کد تایید را وارد کنید");
      return;
    }

    // Step 3: Verify OTP
    verifyOtp.mutate(code);
  };

  const isLoading = sendOtp.isPending || verifyOtp.isPending;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          disabled={isLoading}
        >
          <X size={20} />
        </button>

        <div className={styles.header}>
          <Image
            src="/Icon/Group.svg"
            width={60}
            height={60}
            alt="logo"
            priority
          />

          <h2>شاپت</h2>

          <p>ورود به حساب کاربری</p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Phone */}
          <div className={styles.inputGroup}>
            <Phone size={18} />

            <input
              type="text"
              placeholder="شماره موبایل"
              disabled={otpSent || isLoading}
              {...register("phone", {
                setValueAs: (value) => toEnglishDigits(value),
              })}
            />
          </div>

          {errors.phone && (
            <span className={styles.error}>
              {errors.phone.message}
            </span>
          )}

          {/* OTP */}
          {otpSent && (
            <>
              <div className={styles.inputGroup}>
                <Lock size={18} />

                <input
                  type="text"
                  placeholder="کد تایید"
                  disabled={verifyOtp.isPending}
                  {...register("code", {
                    setValueAs: (value) => toEnglishDigits(value),
                  })}
                />
              </div>

              {errors.code && (
                <span className={styles.error}>
                  {errors.code.message}
                </span>
              )}
            </>
          )}

          {/* Submit */}
          <button
            className={styles.button}
            type="submit"
            disabled={isLoading}
          >
            {sendOtp.isPending
              ? "در حال ارسال..."
              : verifyOtp.isPending
                ? "در حال بررسی..."
                : otpSent
                  ? "ورود"
                  : "دریافت کد"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;