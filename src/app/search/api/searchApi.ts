import type { MoviesResponse } from "@/shared/api/axios/movies/types";
import { rtkApi } from "@/shared/api/rtkApi/rtkApi";

const searchApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    searchMovies: build.query<MoviesResponse, { keyword: string; page: number }>({
      query: ({ keyword, page }) => ({
        url: "v2.2/films",
        params: { keyword, page },
      }),
    }),
  }),
});

export const useSearchMovies = searchApi.useSearchMoviesQuery;
