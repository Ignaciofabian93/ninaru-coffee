import { ReactNode } from "react";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen no-scrollbar">
      <Navigation />
      <section className="w-full h-full">{children}</section>
      {/* <Footer /> */}
    </main>
  );
}
