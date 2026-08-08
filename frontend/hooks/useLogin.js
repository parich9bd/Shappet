import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { sendOtpRequest, verifyOtpRequest } from "@/Services/auth";

export const useSendOtp = ({ setOtpSent, onSuccess }) => {
  return useMutation({
    mutationFn: sendOtpRequest,

    onSuccess: () => {
      setOtpSent(true);
      onSuccess?.();

      toast.success("کد تایید ارسال شد");
    },

    onError: (error) => {
      toast.error(error.message || "خطا در ارسال کد");
    },
  });
};

export const useVerifyOtp = ({ phone, onSuccess }) => {
  return useMutation({
    mutationFn: (otp) =>
      verifyOtpRequest({
        phone,
        otp,
      }),

    onSuccess: (data) => {
      toast.success(data.message || "ورود موفق");

      onSuccess?.(data);
    },

    onError: (error) => {
      toast.error(error.message || "کد تایید اشتباه است");
    },
  });
};
