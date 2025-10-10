import { userInstance } from "../instance";
import type { Message } from "./types";

export const getMessages = async () => (await userInstance.get<Message[]>("/chat/messages")).data;

export const sendMessage = async (text: string, authorId: string) =>
  await userInstance.post("/chat/messages", { text, authorId });
