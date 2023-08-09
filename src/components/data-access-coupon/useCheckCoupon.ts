import { useState } from "react";

export const useCheckCoupon = () => {
  const [loading, setLoading] = useState(false);

  const checkCoupon = async (
    coupon: string
  ): Promise<{ isUsable: boolean; error: any }> => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/test/coupon",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coupon }),
        }
      );
      const data = await response.json();
      if (data?.error) {
        return {
          isUsable: false,
          error: data?.error,
        };
      }
      return {
        isUsable: data?.data?.isUsable ?? false,
        error: null,
      };
    } catch (error) {
      return {
        isUsable: false,
        error,
      };
    } finally {
      setLoading(false);
    }
  };

  return { loading, checkCoupon };
};
