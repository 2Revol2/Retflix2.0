import { getTranslations } from "next-intl/server";
import { getFilm, getSimilars } from "@/shared/api/axios/movie/api";
import { HStack, VStack } from "@/shared/ui/Stack";
import { MovieInfo } from "@/entities/Movie";
import { VideoPlayer } from "@/widgets/VideoPlayer";
import { CarouselSection } from "@/widgets/CarouselSection";
import s from "./movie.module.css";

const MovieDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const t = await getTranslations("MovieDetails");
  const movie = await getFilm(id);
  const { items: similars } = await getSimilars(id);

  const similarsToSlides = () => {
    return similars.map((movie) => ({ id: movie.filmId, image: movie.posterUrl }));
  };

  return (
    <VStack gap="16">
      <div className={s.movieInfo}>
        <div className={s.imageWrapper}>
          <img src={movie.posterUrl} alt={movie.nameRu} className={s.image} />
        </div>
        <VStack gap="16" className={s.info}>
          <h3 className={s.title}>{movie.nameRu}</h3>
          <HStack gap="32">
            <p className={s.rating}>
              <span className={s.kinopoisk}>{t("kinopoisk")}:</span> {movie.ratingKinopoisk}
            </p>
            <p className={s.rating}>
              <span className={s.imdb}>{t("imdb")}:</span> {movie.ratingImdb}
            </p>
          </HStack>
          <div className={s.infoGrid}>
            <MovieInfo title={t("year")} info={movie.year} />
            <MovieInfo title={t("country")} info={movie.countries.map((c) => c.country)} />
            <MovieInfo title={t("genre")} info={movie.genres.map((g) => g.genre)} />
            {movie.filmLength && <MovieInfo title={t("duration")} info={`${movie.filmLength} ${t("min")}`} />}
          </div>
          <MovieInfo title={t("description")} info={movie.description} />
        </VStack>
      </div>
      <VStack max align="center" gap="16">
        <h3>{t("watchOnline")}</h3>
        <VideoPlayer />
      </VStack>
      {similars.length > 0 && (
        <CarouselSection slides={similarsToSlides()} type="movieDetails" title="Вам могут понравится" />
      )}
    </VStack>
  );
};

export default MovieDetails;
