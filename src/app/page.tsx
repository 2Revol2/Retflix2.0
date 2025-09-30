import { getTranslations } from "next-intl/server";
import { getMoviesCollections } from "@/shared/api/axios/collections/api";
import { getFilms } from "@/shared/api/axios/movies/api";
import { getMoviesPremieres } from "@/shared/api/axios/premieres/api";
import { RoutePath } from "@/shared/constants/route";
import { VStack } from "@/shared/ui/Stack";
import { CarouselSection } from "@/widgets/CarouselSection";
import type { BaseMovie } from "@/shared/api/types";

const Home = async () => {
  const t = await getTranslations("Sidebar");

  const [premieresRes, moviesTopRes, filmsRes, serialsRes, cartoonsRes] = await Promise.all([
    getMoviesPremieres(),
    getMoviesCollections("TOP_POPULAR_MOVIES"),
    getFilms({ type: "FILM" }),
    getFilms({ type: "TV_SERIES" }),
    getFilms({ genres: 18 }),
  ]);

  const premieres = premieresRes.items;
  const moviesTop = moviesTopRes.items;
  const films = filmsRes.items;
  const serials = serialsRes.items;
  const cartoons = cartoonsRes.items;

  const moviesToSlides = (movies: BaseMovie[]) => {
    return movies.map((movie) => ({
      id: movie.kinopoiskId,
      image: movie.posterUrlPreview,
    }));
  };

  return (
    <div>
      <VStack gap="16">
        <CarouselSection slides={moviesToSlides(premieres)} title={t("Premieres")} />
        <CarouselSection
          slides={moviesToSlides(moviesTop)}
          title={t("TOP_POPULAR_MOVIES")}
          href={RoutePath.popular_films}
        />
        <CarouselSection slides={moviesToSlides(films)} title={t("FILM")} href={RoutePath.films} />
        <CarouselSection slides={moviesToSlides(serials)} title={t("TV_SERIES")} href={RoutePath.serials} />
        <CarouselSection slides={moviesToSlides(cartoons)} title={t("CARTOONS")} href={RoutePath.cartoons} />
      </VStack>
    </div>
  );
};

export default Home;
