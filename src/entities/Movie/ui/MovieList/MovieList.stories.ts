import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import type { Movie } from "@/shared/api/types";
import { MovieList } from "./MovieList";

const movie: Movie = {
  kinopoiskId: 263531,
  nameRu: "Мстители",
  nameEn: "The Avengers",
  nameOriginal: "The Avengers",
  countries: [
    {
      country: "США",
    },
  ],
  genres: [
    {
      genre: "фантастика",
    },
  ],
  ratingKinopoisk: 7.9,
  ratingImbd: 7.9,
  year: "2012",
  posterUrl: "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
  posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
};

const meta: Meta<typeof MovieList> = {
  title: "entities/Movie/MovieList",
  component: MovieList,
  parameters: {},
  args: {
    movies: [
      { ...movie, kinopoiskId: 1 },
      { ...movie, kinopoiskId: 2 },
      { ...movie, kinopoiskId: 3 },
      { ...movie, kinopoiskId: 4 },
      { ...movie, kinopoiskId: 5 },
      { ...movie, kinopoiskId: 6 },
      { ...movie, kinopoiskId: 7 },
      { ...movie, kinopoiskId: 8 },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof MovieList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
