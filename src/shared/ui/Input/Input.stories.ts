import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: "test",
  },
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
