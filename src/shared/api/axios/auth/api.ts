import { userInstance } from "@/shared/api/axios/instance";

export const register = async (username: string, password: string) =>
  await userInstance.post(`/auth/register`, { username, password });

export const login = async (username: string, password: string) =>
  await userInstance.post(`/auth/login`, { username, password });

export const logout = async () => await userInstance.post(`/auth/logout`);
