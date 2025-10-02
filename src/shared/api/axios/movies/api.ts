import { LRUCache } from "lru-cache";
import { baseInstance } from "../instance";
import type { FiltersResponce, MoviesResponse } from "./types";

interface GetFilmsParams {
  countries?: number;
  genres?: number;
  order?: string;
  type?: string;
  year?: number;
  page?: number;
  keyword?: string;
}

const cache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 60 * 2,
});

export const getFilms = async ({
  countries,
  genres,
  order = "NUM_VOTE",
  type,
  page = 1,
  year,
  keyword,
}: GetFilmsParams = {}) => {
  const cacheKey = JSON.stringify({
    countries,
    genres,
    order,
    type,
    page,
    year,
    keyword,
  });
  const cached = cache.get(cacheKey);
  if (cached) return cached as MoviesResponse;
  const data = (
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

  console.log("fetch films", cacheKey);
  cache.set(cacheKey, data);

  return data;
};

export const getFilters = async () => {
  const cacheKey = "filters";
  const cached = cache.get(cacheKey);
  if (cached) return cached as FiltersResponce;

  const data = (await baseInstance.get<FiltersResponce>("v2.2/films/filters")).data;

  console.log("fetch filters", cacheKey);
  cache.set(cacheKey, data);

  return data;
};
