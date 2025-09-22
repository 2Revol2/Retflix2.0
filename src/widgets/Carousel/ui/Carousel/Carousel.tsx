"use client";
import Slider from "react-slick";
import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Carousel.module.css";

interface Slide {
  id: number;
  image: string;
}

interface CarouselProps {
  className?: string;
  slides: Slide[];
}

export const Carousel = (props: CarouselProps) => {
  const { className, slides } = props;

  return (
    <Slider
      className={classNames(s.carousel, {}, [className])}
      autoplaySpeed={4000}
      autoplay={true}
      dots={false}
      infinite
      slidesToScroll={1}
      centerMode={true}
      centerPadding="20px"
      slidesToShow={6}
      responsive={[
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            autoplay: false,
            centerMode: false,
            centerPadding: "0px",
          },
        },
      ]}
    >
      {slides.map((item) => (
        <Link key={item.id} href={""}>
          <img src={item.image} className={s.image} />
        </Link>
      ))}
    </Slider>
  );
};
