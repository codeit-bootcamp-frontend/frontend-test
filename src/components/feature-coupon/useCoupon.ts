import { useState } from "react";
import { useCheckCoupon } from "../data-access-coupon";
import { validateCoupon } from "../util-validate";
import { MESSAGE } from "./constants";

export const useCoupon = () => {
  const [couponString, setCouponString] = useState("");
  const [message, setMessage] = useState("");
  const { checkCoupon } = useCheckCoupon();

  const submitCoupon = async () => {
    if (couponString === "") {
      setMessage(MESSAGE.empty);
      return;
    }
    if (!validateCoupon(couponString)) {
      setMessage(MESSAGE.format);
      return;
    }
    const { isUsable, error } = await checkCoupon(couponString);
    if (error) {
      setMessage(MESSAGE.error);
      return;
    }
    if (!isUsable) {
      setMessage(MESSAGE.notUsable);
      return;
    }
    setMessage(MESSAGE.usable);
  };

  return {
    couponString,
    setCouponString,
    message,
    submitCoupon,
  };
};
