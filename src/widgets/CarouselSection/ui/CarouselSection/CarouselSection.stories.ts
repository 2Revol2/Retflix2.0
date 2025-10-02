import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { CarouselSection } from "./CarouselSection";

const meta: Meta<typeof CarouselSection> = {
  title: "widgets/CarouselSection",
  component: CarouselSection,
  parameters: {},
  args: {
    slides: [
      { id: 1, image: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/6331655.jpg" },
      { id: 2, image: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5995503.jpg" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CarouselSection>;

export const Light: Story = {
  args: {},
};

export const LightWithTitle: Story = {
  args: {
    title: "Title",
  },
};

export const LightWithLink: Story = {
  args: {
    title: "Title",
    href: "#",
  },
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
