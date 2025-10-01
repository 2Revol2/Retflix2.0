import "@/app/styles/index.css";
import type { Decorator } from "@storybook/react";

export const StyleDecorator: Decorator = (Story) => (
  <div>
    <Story />
  </div>
);
