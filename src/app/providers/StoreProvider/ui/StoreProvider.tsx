"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import type { AppStore, RootState } from "../config/store";
import { makeStore } from "../config/store";

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: RootState;
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
export default StoreProvider;
