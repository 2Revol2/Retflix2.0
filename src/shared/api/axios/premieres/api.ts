import { monthArray } from "@/shared/constants/month";
import { baseInstance } from "../instance";
import type { PremiresResponse } from "./types";

export const getMoviesPremieres = async () => {
  const year = new Date().getFullYear();
  const month = monthArray[new Date().getMonth()];
  return (
    await baseInstance.get<PremiresResponse>("v2.2/films/premieres", {
      params: {
        year,
        month,
      },
    })
  ).data;
};
