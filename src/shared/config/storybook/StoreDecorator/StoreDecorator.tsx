import "@/app/styles/index.css";
import type { Decorator } from "@storybook/react";
import { Provider } from "react-redux";
import { makeStore } from "@/app/providers/StoreProvider/config/store";

export const StoreDecorator: Decorator = (Story) => (
  <Provider store={makeStore()}>
    <Story />
  </Provider>
);
