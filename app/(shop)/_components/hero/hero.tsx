"use client";
import { useEffect, useState } from "react";
import { Carousel } from "@/ui/carousel/carousel";
import styles from "./hero.module.css";
import image1 from "./images/img1.jpg";
import image2 from "./images/img2.jpg";
import image3 from "./images/img3.jpg";
import image4 from "./images/img4.jpg";

const images = [image1, image2, image3, image4];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isSliding, setIsSliding] = useState(false);

  const handlePrev = () => {
    if (!isSliding) {
      setDirection("left");
      setIsSliding(true);

      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      setNextImageIndex((prevIndex + 1) % images.length);

      setTimeout(() => {
        setCurrentImageIndex(prevIndex);
        setIsSliding(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isSliding) {
      setDirection("right");
      setIsSliding(true);

      const nextIndex = (currentImageIndex + 1) % images.length;
      setNextImageIndex(currentImageIndex);

      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setIsSliding(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  const selectImage = (index: number) => {
    if (!isSliding && index !== currentImageIndex) {
      setIsSliding(true);
      setNextImageIndex(currentImageIndex);

      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className={styles["container"]}>
      <Carousel>
        <Carousel.LeftButton onClick={handlePrev} />
        <Carousel.Wrapper>
          <Carousel.NextImage src={images[nextImageIndex]} alt="next-img" width={4896} height={3264} />
          <Carousel.CurrentImage
            src={images[currentImageIndex]}
            alt="current-img"
            width={4896}
            height={3264}
            isSliding={isSliding}
            direction={direction}
          />
          <Carousel.Dots totalImages={images.length} currentIndex={currentImageIndex} selectImage={selectImage} />
        </Carousel.Wrapper>
        <Carousel.RightButton onClick={handleNext} />
      </Carousel>
    </div>
  );
}
