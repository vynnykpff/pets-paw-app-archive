import cn from "classnames";
import Image from "next/image";
import React, { FC, useRef } from "react";
import styles from "./BreedSlider.module.scss";

type SliderProps = {
  urls: string[];
};

const BreedSlider: FC<SliderProps> = ({ urls }) => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const touchStartX = useRef<number | null>(null);

  const slideBtnHandler = (operation: string): void => {
    if (operation === "left") {
      if (slideIndex === 0) setSlideIndex(urls.length - 1);
      else setSlideIndex(prev => prev - 1);
    } else {
      if (slideIndex === urls.length - 1) setSlideIndex(0);
      else setSlideIndex(prev => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLImageElement>): void => {
    if (touchStartX.current !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      if (deltaX > 0) {
        slideBtnHandler("left");
      } else if (deltaX < 0) {
        slideBtnHandler("right");
      }
      touchStartX.current = null;
    }
  };

  return (
    <div className={styles.breedSliderContainer}>
      <Image
        width={100}
        height={100}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        src={urls[slideIndex]}
        className={styles.breedSlide}
        alt="Slider image"
      />
      <div className={styles.breedSlideBtns}>
        {urls.map((value, index) => {
          return (
            <div
              className={cn(styles.breedSlideBtn, slideIndex === index && styles.breedActiveSlideBtn)}
              onClick={() => {
                setSlideIndex(index);
              }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default BreedSlider;
