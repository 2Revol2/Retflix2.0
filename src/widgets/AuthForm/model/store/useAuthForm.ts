import { create } from "zustand";
import { login, register } from "@/shared/api/axios/auth/api";
import type { authFormStore, AuthMode } from "../types/type";

export const useAuthForm = create<authFormStore>((set, get) => ({
  formData: { username: "", password: "", submitPassword: "" },
  authMode: "login",
  error: "",
  isLoading: false,
  isSuccess: false,

  setUsername: (username) =>
    set((state) => ({
      formData: { ...state.formData, username },
      error: "",
    })),

  setPassword: (password) =>
    set((state) => ({
      formData: { ...state.formData, password },
      error: "",
    })),

  setSubmitPassword: (submitPassword) =>
    set((state) => ({
      formData: { ...state.formData, submitPassword },
      error: "",
    })),

  setAuthMode: (authMode: AuthMode) => set({ authMode, error: "" }),

  submitForm: async () => {
    const { formData, authMode } = get();

    if (!formData.username.trim()) {
      set({ error: "Username is required" });
      return;
    }
    if (!formData.password.trim()) {
      set({ error: "Password is required" });
      return;
    }
    if (authMode === "register" && formData.password !== formData.submitPassword) {
      set({ error: "Passwords do not match" });
      return;
    }

    set({ isLoading: true, error: "" });

    try {
      const authFunction = authMode === "login" ? login : register;
      await authFunction(formData.username, formData.password);
      set({ isSuccess: true, isLoading: false });
    } catch (error: any) {
      set({ error: error.response?.data?.message || "Network error", isLoading: false });
    }
  },
}));
