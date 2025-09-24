"use client";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { RoutePath } from "@/shared/constants/route";
import s from "./Carousel.module.css";
import "@splidejs/react-splide/css";

interface Slide {
  id: number;
  image: string;
}

interface CarouselProps {
  slides: Slide[];
}

export const Carousel = (props: CarouselProps) => {
  const { slides } = props;

  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        interval: 4000,
        perPage: 6,
        focus: "center",
        pagination: false,
        lazyLoad: "nearby",
        breakpoints: {
          1100: { perPage: 4 },
          768: { perPage: 2 },
          500: { perPage: 1, autoplay: false, focus: 0 },
        },
      }}
    >
      {slides.map((item) => (
        <SplideSlide key={item.id}>
          <Link href={RoutePath.movie_details + item.id}>
            <img src={item.image} className={s.image} />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};
