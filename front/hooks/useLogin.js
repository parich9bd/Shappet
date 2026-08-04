import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendOtpRequest } from "@/Services/auth";

export const useSendOtp = (setOtpSent) => {
  return useMutation({
    mutationFn: sendOtpRequest,

    onSuccess: (data) => {
      localStorage.setItem("otp", String(data.otp));
      localStorage.setItem("phone", data.phone);

      setOtpSent(true);

      toast.success(`کد تایید: ${data.otp}`);
    },

    onError: () => {
      toast.error("خطا در ارسال کد");
    },
  });
};
