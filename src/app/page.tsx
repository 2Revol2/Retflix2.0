import { getMoviesPremieres, PremieresItem, MonthsArray } from "@/entities/Premieres";
import { Carousel } from "@/widgets/Carousel";
import s from "./home.module.css";

const Home = async () => {
  const dateNow = new Date();
  const month = MonthsArray[dateNow.getMonth()];
  const year = dateNow.getFullYear();
  const { items: moviesPremieres } = await getMoviesPremieres(year, month);

  return (
    <div>
      <Carousel className={s.carousel} lazy>
        {moviesPremieres.map((premier) => (
          <PremieresItem key={premier.kinopoiskId} premier={premier} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
