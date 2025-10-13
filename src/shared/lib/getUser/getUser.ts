import { cookies } from "next/headers";
import type { User } from "@/shared/api/axios/auth/types";

export const getUser = async (): Promise<User | undefined> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) return undefined;

  if (token) {
    try {
      return JSON.parse(atob(token.value.split(".")[1]));
    } catch (error) {
      return undefined;
    }
  }
};
