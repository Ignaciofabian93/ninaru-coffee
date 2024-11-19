import { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.css";
import { ChileIcon, UsaIcon } from "@/constants/icons";

type LanguageSelector = {
  language: "es" | "en";
  selectLanguage: (lang: "es" | "en") => void;
};

const languages = [
  { lang: "es", icon: <ChileIcon /> },
  { lang: "en", icon: <UsaIcon /> },
];

export default function LanguageSelector({ selectLanguage, language }: LanguageSelector) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className={`${styles["lang_selector"]}`} ref={containerRef}>
      <button onClick={() => setIsOpen(!isOpen)}>{languages.find((lang) => lang.lang === language)?.icon}</button>
      <div className={`${styles["dropdown"]} ${isOpen ? styles["opened"] : styles["closed"]}`}>
        {languages.map((lang) => (
          <button
            key={lang.lang}
            className={`${styles["lang_selector_button"]}`}
            onClick={() => {
              selectLanguage(lang.lang as "en" | "es"), setIsOpen(false);
            }}
          >
            {lang.icon}
          </button>
        ))}
      </div>
      <div className="w-full flex items-center justify-evenly">
        <button>
          <ChileIcon />
        </button>
        <button>
          <UsaIcon />
        </button>
      </div>
    </div>
  );
}
