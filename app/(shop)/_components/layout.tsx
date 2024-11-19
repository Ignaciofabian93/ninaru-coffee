import { ReactNode } from "react";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen min-h-screen no-scrollbar overflow-hidden">
      <Navigation />
      <section className="mt-[1rem] w-full h-full flex flex-col justify-between">{children}</section>
      <Footer />
    </main>
  );
}
