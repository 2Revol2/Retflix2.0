import type { Movie } from "../../types";

export interface MoviesResponse {
  total: number;
  items: Movie[];
  totalPages: number;
}
