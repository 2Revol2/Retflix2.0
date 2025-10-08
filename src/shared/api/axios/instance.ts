import axios from "axios";

const MOVIE_BASE_URL = process.env.NEXT_PUBLIC_KINIPOISK_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_KINOPOISK_API_KEY;
const USER_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function createInstance(baseURL?: string, apiKey?: string) {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "X-API-KEY": apiKey,
    },
  });
}

export const baseInstance = createInstance(MOVIE_BASE_URL, API_KEY);
export const userInstance = createInstance(USER_BASE_URL);
