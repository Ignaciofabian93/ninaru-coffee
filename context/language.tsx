import { createContext, ReactNode, useState } from "react";

export type LanguageContextType = {
  language: "es" | "en";
  selectLanguage: (language: "es" | "en") => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const selectLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return <LanguageContext.Provider value={{ language, selectLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
