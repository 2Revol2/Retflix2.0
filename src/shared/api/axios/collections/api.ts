import { baseInstance } from "../instance";
import type { CollectionsResponse } from "./types";

export const getMoviesCollections = async (type?: string, page?: number) =>
  (
    await baseInstance.get<CollectionsResponse>("v2.2/films/collections", {
      params: {
        type,
        page,
      },
    })
  ).data;
