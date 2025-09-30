import type { CountryWithId, GenreWithId, Movie } from "../../types";

export interface MoviesResponse {
  total: number;
  items: Movie[];
  totalPages: number;
}

export interface FiltersResponce {
  countries: CountryWithId[];
  genres: GenreWithId[];
}
