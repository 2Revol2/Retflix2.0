import { baseInstance } from "../instance";
import type { MoviesResponse } from "./types";

interface GetFilmsParams {
  countries?: number;
  genres?: number;
  order?: string;
  year?: number;
  page?: number;
  type?: string;
}

export const getFilms = async ({ countries, genres, order = "NUM_VOTE", type, page = 1, year }: GetFilmsParams = {}) =>
  (
    await baseInstance.get<MoviesResponse>("v2.2/films", {
      params: {
        countries,
        genres,
        order,
        type,
        page,
        yearFrom: year,
        yearTo: year,
      },
    })
  ).data;
