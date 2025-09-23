import { createSlice } from "@reduxjs/toolkit";

export interface ToggleSidebarState {
  isOpen: boolean;
}

const initialState: ToggleSidebarState = {
  isOpen: false,
};

export const toggleSidebarSlice = createSlice({
  name: "toogle sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { actions: toggleSidebarActions } = toggleSidebarSlice;
export const { reducer: toggleSidebarReducer } = toggleSidebarSlice;
