import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {},
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLight: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryLight: Story = {
  args: {
    variant: "secondary",
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: "secondary",
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight: Story = {
  args: {
    variant: "outline",
  },
};

export const OutlinedDark: Story = {
  args: {
    variant: "outline",
  },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight: Story = {
  args: {
    variant: "clear",
  },
};

export const ClearDark: Story = {
  args: {
    variant: "clear",
  },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
