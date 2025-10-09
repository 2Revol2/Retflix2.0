export interface formData {
  username: string;
  password: string;
  submitPassword?: string;
}

export type AuthMode = "register" | "login";

export interface authFormStore {
  formData: formData;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setSubmitPassword: (submitPassword: string) => void;
  authMode: AuthMode;
  setAuthMode: (authMode: AuthMode) => void;
  error: string;
  isLoading: boolean;
  isSuccess: boolean;
  submitForm: () => Promise<void>;
}
