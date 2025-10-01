import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { YEAR_LIST } from "@/shared/constants/const";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "features/Select",
  component: Select,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {
    options: YEAR_LIST,
  },
};

export const Placeholder: Story = {
  args: {
    options: YEAR_LIST,
    placeholder: "2025",
  },
};

export const Dark: Story = {
  args: {
    options: YEAR_LIST,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
