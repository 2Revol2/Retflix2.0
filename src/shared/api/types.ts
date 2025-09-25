interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface CountryWithId extends Country {
  id: number;
}

export interface GenreWithId extends Genre {
  id: number;
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

export interface FiltersResponce {
  countries: CountryWithId[];
  genres: GenreWithId[];
}
