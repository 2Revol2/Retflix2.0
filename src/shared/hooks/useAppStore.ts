import { useStore } from "react-redux";
import type { AppStore } from "@/app/providers/StoreProvider/config/store";

export const useAppStore = useStore.withTypes<AppStore>();
