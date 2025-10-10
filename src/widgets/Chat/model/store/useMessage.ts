import { create } from "zustand";

interface MessageStore {
  message: string;
  setMessage: (message: string) => void;
}

export const useMessage = create<MessageStore>((set) => ({
  message: "",
  setMessage: (message) => set({ message }),
}));
