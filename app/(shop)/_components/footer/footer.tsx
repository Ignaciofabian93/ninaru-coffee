import Image from "next/image";
import styles from "./footer.module.css";
import { logo } from "@/constants/images";
import InstagramIcon from "@/constants/icons/instagram";

export default function Footer() {
  return (
    <footer className={`${styles["container"]} text-center text-white text-xs`}>
      <div className="w-full max-w-[1200px] flex items-center justify-evenly">
        <div className="w-[30%]"></div>
        <div className="w-[30%] flex items-center justify-center">
          <div className="w-[300px] h-auto">
            <Image src={logo} alt="" width={2478} height={1524} className="w-full h-full" />
          </div>
        </div>
        <div className="w-[30%] flex items-center justify-center">
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}
