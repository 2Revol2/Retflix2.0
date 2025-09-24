import { getMoviesCollections } from "@/shared/api/axios/collections/api";
import { getFilms } from "@/shared/api/axios/movies/api";
import { getMoviesPremieres } from "@/shared/api/axios/premieres/api";
import { RoutePath } from "@/shared/constants/route";
import { VStack } from "@/shared/ui/Stack";
import { CarouselSection } from "@/widgets/CarouselSection";

const Home = async () => {
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

  return (
    <div>
      <VStack gap="16">
        <CarouselSection movie={premieres} title="Новинки" />
        <CarouselSection movie={moviesTop} title="Популярные фильмы" href={RoutePath.popular_films} />
        <CarouselSection movie={films} title="Фильмы" href={RoutePath.films} />
        <CarouselSection movie={serials} title="Сериалы" href={RoutePath.serials} />
        <CarouselSection movie={cartoons} title="Мультфильмы" href={RoutePath.cartoons} />
      </VStack>
    </div>
  );
};

export default Home;
