export const fixArabicNumbers = (text: string) => {
  return text.replace(/[۰-۹]/g, function (w) {
    return String.fromCharCode(w.charCodeAt(0) - 1728);
  });
};

export const numberToArabic = (num: string) => {
  return num.replace(/[0-9]/g, function (w) {
    return String.fromCharCode(w.charCodeAt(0) + 1728);
  });
};

export const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
