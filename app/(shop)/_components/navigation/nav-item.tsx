import { ReactNode } from "react";
import Link from "next/link";

type NavItem = {
  children: ReactNode;
  href: string;
};

export default function NavItem({ children, href }: NavItem) {
  return (
    <Link href={href}>
      <li>{children}</li>
    </Link>
  );
}
