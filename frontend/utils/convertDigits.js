export const toEnglishDigits = (value = "") => {
  return value
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
};

export const toPersianDigits = (value = "") => {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};