import { FiltersResponce } from "../../types";
import { baseInstance } from "../instance";
import type { MoviesResponse } from "./types";

interface GetFilmsParams {
  countries?: number;
  genres?: number;
  order?: string;
  type?: string;
  year?: number;
  page?: number;
  keyword?: string;
}

export const getFilms = async ({
  countries,
  genres,
  order = "NUM_VOTE",
  type,
  page = 1,
  year,
  keyword,
}: GetFilmsParams = {}) =>
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
        keyword,
      },
    })
  ).data;

export const getFilters = async () => (await baseInstance.get<FiltersResponce>("v2.2/films/filters")).data;
