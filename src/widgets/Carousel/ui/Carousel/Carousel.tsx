"use client";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Carousel.module.css";

interface CarouselProps {
  className?: string;
  children: ReactNode[];
  lazy?: boolean;
  autoplay?: boolean;
  speed?: number;
}

export const Carousel = (props: CarouselProps) => {
  const { className, children, lazy, autoplay, speed = 4000 } = props;
  const [itemIndex, setItemIndex] = useState(0);

  const shouldRenderSlide = (index: number) => {
    if (!lazy) return true;
    return (
      index === itemIndex ||
      index === itemIndex - 1 ||
      index === itemIndex + 1 ||
      (itemIndex === 0 && index === children.length - 1) ||
      (itemIndex === children.length - 1 && index === 0)
    );
  };

  const showNextImage = useCallback(() => {
    setItemIndex((index) => {
      if (index === children.length - 1) return 0;
      return index + 1;
    });
  }, [children.length]);

  const showPrevImage = () => {
    setItemIndex((index) => {
      if (index === 0) return children.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    if (!autoplay) return;
    const slideInterval = setInterval(showNextImage, speed);
    return () => clearInterval(slideInterval);
  }, [autoplay, showNextImage, speed, itemIndex]);

  return (
    <div className={classNames(s.Carousel, {}, [className])}>
      <button className={s.arrow} onClick={showPrevImage}>
        {"<"}
      </button>
      {children.map((item, index) => (
        <div className={classNames(s.item, { [s.active]: index === itemIndex })} key={index}>
          {shouldRenderSlide(index) ? item : null}
        </div>
      ))}
      <button className={s.arrow} onClick={showNextImage}>
        {">"}
      </button>
    </div>
  );
};
