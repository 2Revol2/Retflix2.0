import { getTranslations } from "next-intl/server";
import { MovieList } from "@/entities/Movie";
import { Pagination } from "@/features/Pagination";
import { getFilms } from "@/shared/api/axios/movies/api";
import { MoviesFilters } from "@/widgets/MoviesFilters";
import s from "./section.module.css";

const MovieSection = async ({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams: { [key: string]: number | undefined };
}) => {
  const { section } = await params;
  const t = await getTranslations("Sidebar");
  const page = searchParams["page"] ?? 1;
  const country = searchParams["country"];
  const movieType = section === "CARTOONS" ? undefined : section;
  const genreId = section === "CARTOONS" ? 18 : searchParams.genre;

  const year = searchParams["year"];
  const { items: movies, totalPages } = await getFilms({
    page,
    type: movieType,
    genres: genreId,
    countries: country,
    year,
  });

  return (
    <div>
      <h3 className={s.section}>{t(section)}</h3>
      <MoviesFilters className={s.filters} />
      <MovieList movies={movies} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default MovieSection;
