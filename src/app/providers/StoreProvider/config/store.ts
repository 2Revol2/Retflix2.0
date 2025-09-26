import { configureStore } from "@reduxjs/toolkit";
import { toggleSidebarReducer } from "@/features/ToggleSidebar";
import { rtkApi } from "@/shared/api/rtkApi/rtkApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggleSidebar: toggleSidebarReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
