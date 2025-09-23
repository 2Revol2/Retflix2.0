interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

interface BaseMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
}

export interface Premieres extends BaseMovie {
  duration: number;
  year: number;
}

export interface Movie extends BaseMovie {
  year: string;
  ratingKinopoisk: number;
  ratingImbd: number;
  nameOriginal: string;
}
