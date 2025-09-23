import type { Movie, Premieres } from "@/shared/api/types";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Carousel } from "@/shared/ui/Carousel/Carousel";
import s from "./CarouselSection.module.css";

interface CarouselSectionProps {
  className?: string;
  movie: Premieres[] | Movie[];
  title?: string;
}

export const CarouselSection = (props: CarouselSectionProps) => {
  const { className, movie, title } = props;

  const movieToSlides = () => {
    return movie.map((movie) => ({
      id: movie.kinopoiskId,
      image: movie.posterUrlPreview,
    }));
  };
  return (
    <div className={classNames(s.wrapper, {}, [className])}>
      <h3 className={s.title}>{title}</h3>
      <Carousel slides={movieToSlides()} />
    </div>
  );
};
