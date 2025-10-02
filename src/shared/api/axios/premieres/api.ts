import { LRUCache } from "lru-cache";
import { monthArray } from "@/shared/constants/month";
import { baseInstance } from "../instance";
import type { PremiresResponse } from "./types";

const cache = new LRUCache<string, PremiresResponse>({
  max: 100,
  ttl: 1000 * 60 * 60 * 2,
});

export const getMoviesPremieres = async () => {
  const year = new Date().getFullYear();
  const month = monthArray[new Date().getMonth()];
  const cacheKey = "premieres";
  const cached = cache.get(cacheKey);

  if (cached) return cached;

  const data = (
    await baseInstance.get<PremiresResponse>("v2.2/films/premieres", {
      params: { year, month },
    })
  ).data;

  console.log("fetch premieres");

  cache.set(cacheKey, data);

  return data;
};
