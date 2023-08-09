import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";

type InputProps = {
  value?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = (props: InputProps) => {
  return <input className={styles.input} data-cy="input" {...props} />;
};
