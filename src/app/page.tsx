import { getTranslations } from "next-intl/server";
import { MonthsArray } from "@/shared/constants/months";
// import { getMoviesPremieres } from "@/shared/api/axios/MoviesApi/api";

const Home = async () => {
  const t = await getTranslations("HomePage");
  const dateNow = new Date();
  const month = MonthsArray[dateNow.getMonth()];
  const year = dateNow.getFullYear();
  // const { items: MoviesPremieres } = await getMoviesPremieres(year, month);

  return <div>{t("title")}</div>;
};

export default Home;
