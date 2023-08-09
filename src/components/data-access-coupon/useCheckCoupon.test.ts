/**
 * @jest-environment jsdom
 */

import { useCheckCoupon } from "./useCheckCoupon";
import { act, renderHook } from "@testing-library/react";

describe("쿠폰 사용가능 여부 api요청 검증", () => {
  let checkCoupon: ReturnType<typeof useCheckCoupon>["checkCoupon"];

  beforeEach(() => {
    const { result } = renderHook(() => useCheckCoupon());
    checkCoupon = result.current.checkCoupon;
  });

  test("쿠폰이 failCouponTest일 경우 사용불가 응답을 확인할 수 있다.", async () => {
    // given
    const couponString = "failCouponTest";

    await act(async () => {
      // when
      const { isUsable } = await checkCoupon(couponString);
      // then
      expect(isUsable).toEqual(false);
    });
  });

  test("쿠폰이 successCouponTest일 경우 사용가능 응답을 확인할 수 있다.", async () => {
    // given
    const couponString = "successCouponTest";

    await act(async () => {
      // when
      const { isUsable } = await checkCoupon(couponString);
      // then
      expect(isUsable).toEqual(true);
    });
  });

  test("쿠폰에 에러가 존재함을 확인할 수 있다.", async () => {
    // given
    const couponString = "errorTest";

    await act(async () => {
      // when
      const { error } = await checkCoupon(couponString);
      // then
      expect(error.message).toEqual("오류 테스트입니다.");
    });
  });
});
