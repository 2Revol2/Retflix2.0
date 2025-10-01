import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ResetFiltres } from "./ResetFiltres";

const meta: Meta<typeof ResetFiltres> = {
  title: "features/ResetFiltres",
  component: ResetFiltres,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ResetFiltres>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
