import type { RootState } from "@/app/providers/StoreProvider";

export const isOpenSidebar = (state: RootState) => state.toggleSidebar.isOpen;
