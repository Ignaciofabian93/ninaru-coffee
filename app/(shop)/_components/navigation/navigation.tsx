"use client";
import { useContext, useState } from "react";
import { LanguageContext, LanguageContextType } from "@/context/language";
import LanguageSelector from "./lang-select";
import styles from "./navigation.module.css";
import translations from "@/lang/translations.json";
import Image from "next/image";
import { logo_bg_black } from "@/constants/images";
import Link from "next/link";
import MenuIcon from "@/constants/icons/menu";

export default function Navigation() {
  const { language, selectLanguage } = useContext(LanguageContext) as LanguageContextType;
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const t = translations[language] || translations.es;

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  return (
    <header className={`${styles["container"]}`}>
      <nav className={`${styles["nav"]}`}>
        <Link href={"/"} className="w-[30%] min-w-[100px] max-w-[140px] h-auto">
          <Image src={logo_bg_black} alt="logo" width={200} height={200} className="w-full h-full" />
        </Link>
        <div className="w-[calc(100%_-_160px)] h-full flex items-center justify-end mr-2">
          <div className={`${styles["menu_icon"]}`} onClick={toggleMenu}>
            <MenuIcon />
          </div>
          <ul className={`${styles["menu_items"]}`}>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/home"}>{t.home.home}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/coffee"}>{t.home.coffee}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/boutique"}>{t.home.boutique}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/jewelry"}>{t.home.jewelry}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/textile"}>{t.home.textile}</Link>
            </li>
            <LanguageSelector selectLanguage={selectLanguage} language={language} />
          </ul>
        </div>
      </nav>
      <aside className={`${styles["mobile_menu"]} ${isMenuOpened ? styles["mobile_opened"] : styles["mobile_closed"]}`}>
        <div className="w-full h-full text-white">
          <ul className={`w-full h-full flex flex-col items-center`}>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/home"}>{t.home.home}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/coffee"}>{t.home.coffee}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/boutique"}>{t.home.boutique}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/jewelry"}>{t.home.jewelry}</Link>
            </li>
            <li className={`${styles["nav_item"]}`}>
              <Link href={"/textile"}>{t.home.textile}</Link>
            </li>
            <LanguageSelector selectLanguage={selectLanguage} language={language} />
          </ul>
        </div>
      </aside>
    </header>
  );
}
