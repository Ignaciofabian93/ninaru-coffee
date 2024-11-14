"use client";
import { ReactNode } from "react";
import LanguageProvider from "@/context/language";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
