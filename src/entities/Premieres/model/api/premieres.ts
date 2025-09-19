import { baseInstance } from "@/shared/api/axios/instance";
import type { PremieresResponse } from "../types/types";

export const getMoviesPremieres = async (year: number, month: string) =>
  (
    await baseInstance.get<PremieresResponse>("v2.2/films/premieres", {
      params: {
        year,
        month,
      },
    })
  ).data;
