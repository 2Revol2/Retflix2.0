type Base = {
  filmId: number;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
};

export type SequelsAndPrequels = Base[];

export interface SimilarMovies {
  total: number;
  items: Base[];
}
