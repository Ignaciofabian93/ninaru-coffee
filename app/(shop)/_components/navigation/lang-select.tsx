import styles from "./navigation.module.css";

type LanguageSelector = {
  language: "es" | "en";
  selectLanguage: (lang: "es" | "en") => void;
};

const languages: ("es" | "en")[] = ["es", "en"];

export default function LanguageSelector({ selectLanguage, language }: LanguageSelector) {
  return (
    <div className={`${styles["lang_selector"]}`}>
      <select value={language} onChange={(e) => selectLanguage(e.target.value as "en" | "es")}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
