export const validateCoupon = (couponString: string) => {
  const alphabetOrNumberRegex = /^[a-zA-Z0-9]+$/;

  return alphabetOrNumberRegex.test(couponString);
};
