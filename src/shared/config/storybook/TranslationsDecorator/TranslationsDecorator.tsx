import { NextIntlClientProvider } from "next-intl";
import type { Decorator } from "@storybook/react";
import defaultMessages from "../../../../../messages/en.json";

export const TranslationsDecorator: Decorator = (Story) => {
  return (
    <NextIntlClientProvider locale="en" messages={defaultMessages}>
      <Story />
    </NextIntlClientProvider>
  );
};
