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
import { useSendOtp } from "@/hooks/useLogin";

function Login({ onClose, onLogin }) {
  const router = useRouter();
  const [otpSent, setOtpSent] = useState(false);
  const sendOtp = useSendOtp(setOtpSent);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),

    defaultValues: {
      phone: "",
      code: "",
    },
  });

  const onSubmit = (data) => {
    const { phone, code } = data;

    if (!otpSent) {
      sendOtp.mutate({ phone });
      return;
    }

    const savedOtp = localStorage.getItem("otp");

    if (!code) {
      toast.error("کد تایید را وارد کنید");
      return;
    }

    if (code === savedOtp) {
      localStorage.setItem("token", "fake-token");

      localStorage.setItem("phone", phone);

      localStorage.removeItem("otp");

      onLogin?.(phone);

      toast.success("ورود موفق");

      onClose();

      router.push("/");
    } else {
      toast.error("کد وارد شده اشتباه است");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <button type="button" className={styles.close} onClick={onClose}>
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

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <Phone size={18} />
            <input
              type="text"
              placeholder="شماره موبایل"
              disabled={otpSent}
              {...register("phone", {
                setValueAs: (value) => toEnglishDigits(value),
              })}
            />
          </div>

          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}

          {otpSent && (
            <>
              <div className={styles.inputGroup}>
                <Lock size={18} />

                <input
                  type="text"
                  placeholder="کد تایید"
                  {...register("code", {
                    setValueAs: (value) => toEnglishDigits(value),
                  })}
                />
              </div>

              {errors.code && (
                <span className={styles.error}>{errors.code.message}</span>
              )}
            </>
          )}

          <button
            className={styles.button}
            type="submit"
            disabled={sendOtp.isPending}
          >
            {sendOtp.isPending
              ? "در حال ارسال..."
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
