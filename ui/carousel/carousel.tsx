import Image, { StaticImageData } from "next/image";
import styles from "./carousel.module.css";
import { CaretLeftIcon, CaretRightIcon } from "@/constants/icons";

export function Carousel({ children }: { children: React.ReactNode }) {
  return <section className={`${styles["container"]}`}>{children}</section>;
}

Carousel.Wrapper = function ({ children }: { children: React.ReactNode }) {
  return <div className={styles["img-wrapper"]}>{children}</div>;
};

Carousel.LeftButton = function ({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles["left"]} onClick={onClick}>
      <CaretLeftIcon />
    </div>
  );
};

Carousel.RightButton = function ({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles["right"]} onClick={onClick}>
      <CaretRightIcon />
    </div>
  );
};

Carousel.NextImage = function ({
  src,
  alt,
  width,
  height,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}) {
  return <Image className={styles["next-img"]} src={src} alt={alt} width={width} height={height} />;
};

Carousel.CurrentImage = function ({
  src,
  alt,
  width,
  height,
  isSliding,
  direction,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  isSliding: boolean;
  direction: string;
}) {
  return (
    <div className={`${styles["current-img-container"]} ${isSliding ? styles[`slide-in-${direction}`] : ""}`}>
      <Image className={styles["current-img"]} src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

Carousel.Dots = function ({
  totalImages,
  currentIndex,
  selectImage,
}: {
  totalImages: number;
  currentIndex: number;
  selectImage: (index: number) => void;
}) {
  return (
    <div className={styles["dots"]}>
      {[...Array(totalImages).keys()].map((d) => (
        <div
          key={d}
          onClick={() => selectImage(d)}
          className={`${styles["dot"]} ${currentIndex === d ? styles["current-dot"] : ""}`}
        />
      ))}
    </div>
  );
};
