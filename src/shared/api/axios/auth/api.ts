import { userInstance } from "@/shared/api/axios/instance";
import type { User } from "./types";

export const register = async (username: string, password: string) =>
  await userInstance.post(`/auth/register`, { username, password });

export const login = async (username: string, password: string) =>
  await userInstance.post(`/auth/login`, { username, password });

export const logout = async () => await userInstance.post(`/auth/logout`);

export const getCurrentUser = async () => (await userInstance.get<User>("/auth/me")).data;
