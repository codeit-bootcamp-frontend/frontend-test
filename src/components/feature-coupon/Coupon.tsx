import { Button } from "../ui-button";
import { Input } from "../ui-input";
import { Text } from "../ui-text";
import { COUPON_BUTTON_TEXT, PLACEHOLDER_TEXT } from "./constants";
import styles from "./Coupon.module.css";
import { useCoupon } from "./useCoupon";

export const Coupon = () => {
  const { couponString, setCouponString, message, submitCoupon } = useCoupon();

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          value={couponString}
          placeholder={PLACEHOLDER_TEXT}
          onChange={(event) => setCouponString(event.currentTarget.value)}
        />
        <Button
          type="submit"
          text={COUPON_BUTTON_TEXT}
          onClick={submitCoupon}
        />
      </form>
      <Text>{message}</Text>
    </div>
  );
};
