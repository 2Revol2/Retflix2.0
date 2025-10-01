import type { Preview } from "@storybook/nextjs-vite";
import { ThemeDecorator } from "../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { TranslationsDecorator } from "../src/shared/config/storybook/TranslationsDecorator/TranslationsDecorator";
import { Theme } from "../src/app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), TranslationsDecorator],
};

export default preview;
