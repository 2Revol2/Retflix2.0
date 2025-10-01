import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "shared/Divider",
  component: Divider,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithText: Story = {
  render: () => (
    <div>
      <span>Text</span>
      <Divider />
      <span>text</span>
    </div>
  ),
};

export const WithTextDark: Story = {
  render: () => (
    <div>
      <span>Text</span>
      <Divider />
      <span>text</span>
    </div>
  ),
};
WithTextDark.decorators = [ThemeDecorator(Theme.DARK)];
