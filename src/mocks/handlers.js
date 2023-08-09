import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://bootcamp-api.codeit.kr/api/test/coupon",
    async (req, res, ctx) => {
      const { coupon } = await req.json();

      if (coupon === "successCouponTest") {
        return res(ctx.json({ data: { isUsable: true } }));
      }
      if (coupon === "failCouponTest") {
        return res(ctx.json({ data: { isUsable: false } }));
      }
      if (coupon === "errorTest") {
        return res(
          ctx.status(400),
          ctx.json({ error: { message: "오류 테스트입니다." } })
        );
      }

      return res(ctx.json({ data: { isUsable: false } }));
    }
  ),
];
