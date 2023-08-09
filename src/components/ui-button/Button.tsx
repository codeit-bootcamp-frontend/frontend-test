import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      data-cy="button"
      type={type}
      onClick={onClick}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};
