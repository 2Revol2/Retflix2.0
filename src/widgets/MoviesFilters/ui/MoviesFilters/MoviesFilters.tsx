import { classNames } from "@/shared/lib/classNames/classNames";
import { getFilters } from "@/shared/api/axios/movies/api";
import { Select } from "@/features/Select";
import { YEAR_LIST } from "@/shared/constants/const";
import { ResetFiltres } from "@/features/ResetFiltres/ui/ResetFiltres/ResetFiltres";
import s from "./MoviesFilters.module.css";

interface MoviesFiltersProps {
  className?: string;
}

export const MoviesFilters = async (props: MoviesFiltersProps) => {
  const { className } = props;
  const { genres, countries } = await getFilters();

  const normalizedGenres = genres.map((genre) => ({ value: genre.id, label: genre.genre }));
  const normalizedCountries = countries.map((contry) => ({ value: contry.id, label: contry.country }));

  return (
    <div className={classNames(s.MoviesFilters, {}, [className])}>
      <div className={s.filtersWrapper}>
        <Select placeholder="Country" options={normalizedCountries} urlTag="country" />
        <Select placeholder="Genre" options={normalizedGenres} urlTag="genre" />
        <Select placeholder="Year" options={YEAR_LIST} urlTag="year" />
        <ResetFiltres />
      </div>
    </div>
  );
};
