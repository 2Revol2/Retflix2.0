import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { Movie } from "@/shared/api/types";
import { RoutePath } from "@/shared/constants/route";
import { HStack, VStack } from "@/shared/ui/Stack";
import s from "./MovieItem.module.css";

interface MovieItemProps {
  className?: string;
  movie: Movie;
}

export const MovieItem = (props: MovieItemProps) => {
  const { className, movie } = props;
  return (
    <Link href={`${RoutePath.movie_details}${movie.kinopoiskId}`} className={classNames(s.MovieItem, {}, [className])}>
      <VStack align="center" gap="8" justify="center" className={s.cardWrapper}>
        <img src={movie.posterUrl} alt={movie.nameOriginal} width={200} className={s.image} />
        <HStack>
          <h5 className={s.title}>{movie.nameRu}</h5>
        </HStack>
      </VStack>
    </Link>
  );
};
