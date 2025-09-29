import type { MovieDetails } from "../../types";
import { baseInstance } from "../instance";

export const getFilm = async (id: string) => (await baseInstance.get<MovieDetails>(`v2.2/films/${id}`)).data;
