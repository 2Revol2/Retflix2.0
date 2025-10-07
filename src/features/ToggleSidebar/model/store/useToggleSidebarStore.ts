import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

export const useToggleSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleSidebar: (isOpen) => set({ isOpen }),
}));
