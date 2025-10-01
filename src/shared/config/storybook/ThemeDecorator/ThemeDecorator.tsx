import type { Decorator } from "@storybook/react";
import type { Theme } from "@/app/providers/ThemeProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator =>
  function (Story) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
