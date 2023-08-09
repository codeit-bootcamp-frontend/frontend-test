import { validateCoupon } from "./validateCoupon";

describe("쿠폰 문자열이 형식에 맞는지 검증", () => {
  test("빈 문자열인 경우 유효하지 않음을 검증할 수 있다.", () => {
    // given
    const couponString = "";
    // when
    const result = validateCoupon(couponString);
    // then
    expect(result).toEqual(false);
  });

  test("특수 문자가 포함된 경우 유효하지 않음을 검증할 수 있다.", () => {
    // given
    const couponString = "cb2#21";
    // when
    const result = validateCoupon(couponString);
    // then
    expect(result).toEqual(false);
  });

  test("한글이 포함된 경우 유효하지 않음을 검증할 수 있다.", () => {
    // given
    const couponString = "한글포함123abc";
    // when
    const result = validateCoupon(couponString);
    // then
    expect(result).toEqual(false);
  });

  test("숫자 또는 알파벳인 경우 유효함을 검증할 수 있다.", () => {
    // given
    const couponString = "123abc";
    // when
    const result = validateCoupon(couponString);
    // then
    expect(result).toEqual(true);
  });
});
