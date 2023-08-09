import styles from "./Text.module.css";

type TextProps = {
  children: string;
};

export const Text = ({ children }: TextProps) => {
  return (
    <span className={styles.text} data-cy="text">
      {children}
    </span>
  );
};
