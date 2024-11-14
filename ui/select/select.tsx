import { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";

type Select = {
  value: string;
  options: string[];
  placeholder?: string;
  handleChange: (value: string) => void;
};

export default function Select({ value, options, handleChange, placeholder = "Select an option" }: Select) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={`${styles.select} ${isOpen || value ? styles.active : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.label} ${value ? styles.labelActive : ""}`}>{placeholder}</span>
        <input className={styles.input} value={value} placeholder="" required readOnly />
        <span className={styles.arrow}>▼</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((op) => (
            <li key={op} onClick={() => handleChange(op)}>
              {op}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
