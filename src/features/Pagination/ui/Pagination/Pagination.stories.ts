import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "features/Pagination",
  component: Pagination,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Light: Story = {
  args: {
    totalPages: 10,
  },
};

export const Dark: Story = {
  args: {
    totalPages: 10,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
