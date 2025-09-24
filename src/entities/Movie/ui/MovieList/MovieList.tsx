import { classNames } from "@/shared/lib/classNames/classNames";
import type { Movie } from "@/shared/api/types";
import { HStack } from "@/shared/ui/Stack";
import { MovieItem } from "../MovieItem/MovieItem";
import s from "./MovieList.module.css";

interface MovieListProps {
  className?: string;
  movies: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  const { className, movies } = props;
  return (
    <HStack align="center" justify="center" gap="16" className={classNames(s.MovieList, {}, [className])}>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.kinopoiskId} />
      ))}
    </HStack>
  );
};
