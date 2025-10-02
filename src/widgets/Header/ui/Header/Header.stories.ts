import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "widgets/Header",
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
