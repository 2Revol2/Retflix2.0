import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ToggleSidebar } from "./ToggleSidebar";

const meta: Meta<typeof ToggleSidebar> = {
  title: "features/ToggleSidebar",
  component: ToggleSidebar,
  parameters: {},
  args: {},
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof ToggleSidebar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
