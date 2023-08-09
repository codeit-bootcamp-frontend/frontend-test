/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { COUPON_BUTTON_TEXT, MESSAGE, PLACEHOLDER_TEXT } from "./constants";
import { Coupon } from "./Coupon";

describe("쿠폰 인증 기능 통합 테스트", () => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;

  beforeEach(() => {
    render(<Coupon />);
    input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    button = screen.getByText(COUPON_BUTTON_TEXT);
  });

  test(`값이 없이 쿠폰번호인증 버튼을 클릭할 경우, ${MESSAGE.empty}를 확인할 수 있습니다.`, async () => {
    // given
    fireEvent.change(input, { target: { value: "" } });
    // when
    fireEvent.click(button);
    const text = await waitFor(() => screen.getByText(MESSAGE.empty));
    // then
    expect(text.textContent).toEqual(MESSAGE.empty);
  });

  test(`숫자 또는 알파벳이 아닌 값을 포함한 입력으로 쿠폰번호인증 버튼을 클릭할 경우, ${MESSAGE.format}를 확인할 수 있습니다.`, async () => {
    // given
    fireEvent.change(input, { target: { value: "success성공?!" } });
    // when
    fireEvent.click(button);
    const text = await waitFor(() => screen.getByText(MESSAGE.format));
    // then
    expect(text.textContent).toEqual(MESSAGE.format);
  });

  test(`에러를 확인하는 입력으로 쿠폰번호인증 버튼을 클릭할 경우, ${MESSAGE.error}를 확인할 수 있습니다.`, async () => {
    // given
    fireEvent.change(input, { target: { value: "errorTest" } });
    // when
    fireEvent.click(button);
    const text = await waitFor(() => screen.getByText(MESSAGE.error));
    // then
    expect(text.textContent).toEqual(MESSAGE.error);
  });

  test(`사용할 수 없는 쿠폰 번호를 입력하고 쿠폰번호인증 버튼을 클릭할 경우, ${MESSAGE.notUsable}를 확인할 수 있습니다.`, async () => {
    // given
    fireEvent.change(input, { target: { value: "failCouponTest" } });
    // when
    fireEvent.click(button);
    const text = await waitFor(() => screen.getByText(MESSAGE.notUsable));
    // then
    expect(text.textContent).toEqual(MESSAGE.notUsable);
  });

  test(`사용 가능한 쿠폰 번호를 입력하고 쿠폰번호인증 버튼을 클릭할 경우, ${MESSAGE.usable}를 확인할 수 있습니다.`, async () => {
    // given
    fireEvent.change(input, { target: { value: "successCouponTest" } });
    // when
    fireEvent.click(button);
    const text = await waitFor(() => screen.getByText(MESSAGE.usable));
    // then
    expect(text.textContent).toEqual(MESSAGE.usable);
  });
});
