import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { MovieInfo } from "./MovieInfo";

const meta: Meta<typeof MovieInfo> = {
  title: "entities/Movie/MovieInfo",
  component: MovieInfo,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof MovieInfo>;

export const Light: Story = {
  args: {
    title: "Country",
    info: ["Ukraine", "Poland"],
  },
};

export const Dark: Story = {
  args: {
    title: "Country",
    info: ["Ukraine", "Poland"],
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
