import styles from "./input.module.css";
import { ChangeEventHandler } from "react";

type Input = {
  value: string | number;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ value, placeholder, onChange }: Input) {
  return (
    <div className={styles.container}>
      <input type="text" value={value} onChange={onChange} className={`${styles.input}`} placeholder="" required />
      <span className={styles.label}>{placeholder}</span>
    </div>
  );
}
