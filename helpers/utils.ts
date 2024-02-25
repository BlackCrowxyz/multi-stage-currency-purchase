export const formatPrice = (price: number) => {
  if (!price) return 0;
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const limitDecimalPlaces = (value: string, limit: number): string => {
  const regex = new RegExp(`^-?\\d*(\\.\\d{0,${limit}})?`);
  const match = value.toString().match(regex);
  return match ? match[0] : "";
};
