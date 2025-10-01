import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "shared/Carousel",
  component: Carousel,
  parameters: {},
  args: {
    slides: [
      { id: 1, image: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/6331655.jpg" },
      { id: 2, image: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5995503.jpg" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
