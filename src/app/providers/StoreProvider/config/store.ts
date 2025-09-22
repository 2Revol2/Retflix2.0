import { configureStore } from "@reduxjs/toolkit";
import { toggleSidebarReducer } from "@/features/ToggleSidebar";

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggleSidebar: toggleSidebarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
