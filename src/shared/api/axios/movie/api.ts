import { LRUCache } from "lru-cache";
import type { MovieDetails } from "../../types";
import { baseInstance } from "../instance";
import type { SequelsAndPrequels, SimilarMovies } from "./type";

const cache = new LRUCache({
  max: 20,
  ttl: 1000 * 60 * 60 * 2,
});

export const getFilm = async (id: string) => {
  const cacheKey = `film-${id}`;
  const cached = cache.get(cacheKey) as MovieDetails;
  if (cached) return cached;
  const data = (await baseInstance.get<MovieDetails>(`v2.2/films/${id}`)).data;
  console.log("fetch film", cacheKey);
  cache.set(cacheKey, data);
  return data;
};

export const getSequelsAndPreguels = async (id: string) =>
  (await baseInstance.get<SequelsAndPrequels>(`v2.2/films/${id}/sequels_and_prequels`)).data;

export const getSimilars = async (id: string) => {
  const cacheKey = `similars-${id}`;
  const cached = cache.get(cacheKey) as SimilarMovies;
  if (cached) return cached;
  const data = (await baseInstance.get<SimilarMovies>(`v2.2/films/${id}/similars`)).data;
  console.log("fetch similars", cacheKey);
  cache.set(cacheKey, data);
  return data;
};
