import type { Movie } from "../../types";

export interface CollectionsResponse {
  total: number;
  items: Movie[];
  totalPages: number;
}
