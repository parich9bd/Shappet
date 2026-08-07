import * as yup from "yup";

export const loginSchema = yup.object({
  phone: yup
    .string()
    .required("شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  code: yup
    .string()
    .nullable()
    .test(
      "otp-validation",
      "کد تایید باید 4 رقمی باشد",
      (value) => !value || value.length === 4,
    ),
});
