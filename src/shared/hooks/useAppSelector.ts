import { useSelector } from "react-redux";
import type { RootState } from "@/app/providers/StoreProvider";

export const useAppSelector = useSelector.withTypes<RootState>();
