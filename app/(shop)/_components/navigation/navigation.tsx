"use client";
import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "@/context/language";
import LanguageSelector from "./lang-select";
import NavItem from "./nav-item";
import styles from "./navigation.module.css";
import translations from "@/lang/translations.json";
import Image from "next/image";
import { logo } from "@/constants/images";

export default function Navigation() {
  const { language, selectLanguage } = useContext(LanguageContext) as LanguageContextType;
  const t = translations[language] || translations.es;

  return (
    <header className={`${styles["container"]}`}>
      <nav className={`${styles["nav"]}`}>
        <NavItem href="/">
          <div className={`${styles["logo"]}`}>
            <Image src={logo} alt="logo" width={2478} height={1524} className="w-full h-full" />
          </div>
        </NavItem>
        <ul className="flex gap-4">
          {/* <NavItem href="/home">
            <span className={`${styles["nav_item"]} text-white text-[1.05rem]`}>{t.home.home}</span>
          </NavItem>
          <NavItem href="/coffee">
            <span className={`${styles["nav_item"]} text-white text-[1.05rem]`}>{t.home.coffee}</span>
          </NavItem>
          <NavItem href="/boutique">
            <span className={`${styles["nav_item"]} text-white text-[1.05rem]`}>{t.home.boutique}</span>
          </NavItem>
          <NavItem href="/jewelry">
            <span className={`${styles["nav_item"]} text-white text-[1.05rem]`}>{t.home.jewelry}</span>
          </NavItem>
          <NavItem href="/textile">
            <span className={`${styles["nav_item"]} text-white text-[1.05rem]`}>{t.home.textile}</span>
          </NavItem> */}
          {/* <LanguageSelector selectLanguage={selectLanguage} language={language} /> */}
        </ul>
      </nav>
    </header>
  );
}
