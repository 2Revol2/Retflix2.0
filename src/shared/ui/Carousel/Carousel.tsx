"use client";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { RoutePath } from "@/shared/constants/route";
import s from "./Carousel.module.css";
import "@splidejs/react-splide/css";

export interface Slide {
  id: number;
  image: string;
}

interface CarouselProps {
  slides: Slide[];
  type?: "default" | "movieDetails";
}

export const Carousel = (props: CarouselProps) => {
  const { slides, type = "default" } = props;

  const defaultOptions = {
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
  };

  const movieDetailsOptions = {
    ...defaultOptions,
    perPage: 6,
    autoplay: false,
    breakpoints: {
      1100: { perPage: 8 },
      768: { perPage: 6 },
      500: { perPage: 4, focus: 0 },
    },
  };

  const options = type === "movieDetails" ? movieDetailsOptions : defaultOptions;

  return (
    <Splide options={options}>
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
