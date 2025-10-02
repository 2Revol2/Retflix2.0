import { LRUCache } from "lru-cache";
import { baseInstance } from "../instance";
import type { CollectionsResponse } from "./types";

const cache = new LRUCache<string, CollectionsResponse>({
  max: 100,
  ttl: 1000 * 60 * 60 * 2,
});

export const getMoviesCollections = async (type?: string, page?: number) => {
  const cacheKey = `collections-${type || "all"}-${page || 1}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const data = (
    await baseInstance.get<CollectionsResponse>("v2.2/films/collections", {
      params: { type, page },
    })
  ).data;

  console.log("fetch collections", cacheKey);

  cache.set(cacheKey, data);

  return data;
};
