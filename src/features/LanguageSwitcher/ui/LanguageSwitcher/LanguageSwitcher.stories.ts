import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "features/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
