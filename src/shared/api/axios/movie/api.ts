import type { MovieDetails } from "../../types";
import { baseInstance } from "../instance";
import type { SequelsAndPrequels, SimilarMovies } from "./type";

export const getFilm = async (id: string) => (await baseInstance.get<MovieDetails>(`v2.2/films/${id}`)).data;

export const getSequelsAndPreguels = async (id: string) =>
  (await baseInstance.get<SequelsAndPrequels>(`v2.2/films/${id}/sequels_and_prequels`)).data;

export const getSimilars = async (id: string) =>
  (await baseInstance.get<SimilarMovies>(`v2.2/films/${id}/similars`)).data;
