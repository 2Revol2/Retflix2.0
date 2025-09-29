import { getFilm } from "@/shared/api/axios/movie/api";
import { HStack, VStack } from "@/shared/ui/Stack";
import { MovieInfo } from "@/entities/Movie";
import { VideoPlayer } from "@/widgets/VideoPlayer";
import s from "./movie.module.css";

const MovieDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const movie = await getFilm(id);

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
              <span className={s.kinopoisk}>КиноПоиск:</span> {movie.ratingKinopoisk}
            </p>
            <p className={s.rating}>
              <span className={s.imdb}>IMDB:</span> {movie.ratingImdb}
            </p>
          </HStack>
          <div className={s.infoGrid}>
            <MovieInfo title={"Год"} info={movie.year} />
            <MovieInfo title={"Страна"} info={movie.countries.map((c) => c.country)} />
            <MovieInfo title={"Жанр"} info={movie.genres.map((g) => g.genre)} />
            {movie.filmLength && <MovieInfo title={"Длительность"} info={`${movie.filmLength} мин.`} />}
          </div>
          <MovieInfo title={"Описание"} info={movie.description} />
        </VStack>
      </div>
      <VStack max align="center" gap="16">
        <h3>Смотреть онлайн</h3>
        <VideoPlayer />
      </VStack>
    </VStack>
  );
};

export default MovieDetails;
