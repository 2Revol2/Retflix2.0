import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_KINIPOISK_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_KINOPOISK_API_KEY;

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (header) => {
      header.set("X-API-KEY", API_KEY ?? "");
      return header;
    },
  }),
  endpoints: () => ({}),
});
