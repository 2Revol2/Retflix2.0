export interface Premiere {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  duration: number;
}

export interface PremieresResponse {
  items: Premiere[];
  total: number;
}
