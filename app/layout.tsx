import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const headings = localFont({
  src: "./fonts/PlayfairDisplay.ttf",
  variable: "--font-heading",
  weight: "100 400 500 600 700 900",
});
const text = localFont({
  src: "./fonts/Lato.ttf",
  variable: "--font-text",
  weight: "400 500",
});
const accents = localFont({
  src: "./fonts/Pacifico.ttf",
  variable: "--font-accents",
  weight: "400 500",
});

export const metadata: Metadata = {
  title: "Ninaru - Cafeteria",
  description: "Cafeteria - Boutique - Jewelry - Textile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${headings.variable} ${text.variable} ${accents.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
