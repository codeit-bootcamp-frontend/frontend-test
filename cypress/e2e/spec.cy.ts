import { MESSAGE } from "../../src/components/feature-coupon/constants";

describe("쿠폰번호인증 기능 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("쿠폰 입력 input, 쿠폰번호인증 button, 사용 여부 text 요소를 확인할 수 있다.", () => {
    cy.get('[data-cy="input"]').should("exist");
    cy.get('[data-cy="button"]').should("exist");
    cy.get('[data-cy="text"]').should("exist");
  });

  describe("쿠폰 입력 칸에", () => {
    it(`입력하지 않고 쿠폰번호인증 클릭할 경우, '${MESSAGE.empty}' 문구를 확인할 수 있다.`, () => {
      // when
      cy.get('[data-cy="button"]').click();
      // then
      cy.get('[data-cy="text"]').should("have.text", MESSAGE.empty);
    });

    it(`숫자 또는 알파벳를 제외한 값을 입력하고 쿠폰번호인증 클릭할 경우 '${MESSAGE.format}' 문구를 확인할 수 있다.`, () => {
      // given
      cy.get('[data-cy="input"]').type("success성공?!!");
      // when
      cy.get('[data-cy="button"]').click();
      // then
      cy.get('[data-cy="text"]').should("have.text", MESSAGE.format);
    });

    it(`successCouponTest를 입력하고 쿠폰번호인증 클릭할 경우 '${MESSAGE.usable}' 문구를 확인할 수 있다.`, () => {
      // given
      cy.get('[data-cy="input"]').type("successCouponTest");
      // when
      cy.get('[data-cy="button"]').click();
      // then
      cy.get('[data-cy="text"]').should("have.text", MESSAGE.usable);
    });

    it(`failCouponTest를 입력하고 쿠폰번호인증 클릭할 경우 '${MESSAGE.notUsable}' 문구를 확인할 수 있다.`, () => {
      // given
      cy.get('[data-cy="input"]').type("failCouponTest");
      // when
      cy.get('[data-cy="button"]').click();
      // then
      cy.get('[data-cy="text"]').should("have.text", MESSAGE.notUsable);
    });

    it(`errorTest를 입력하고 쿠폰번호인증 클릭할 경우 '${MESSAGE.error}' 문구를 확인할 수 있다.`, () => {
      // given
      cy.get('[data-cy="input"]').type("errorTest");
      // when
      cy.get('[data-cy="button"]').click();
      // then
      cy.get('[data-cy="text"]').should("have.text", MESSAGE.error);
    });
  });
});
