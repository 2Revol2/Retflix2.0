"use client";
import { VStack } from "@/shared/ui/Stack";
import { MessageInput } from "../MessageInput/MessageInput";
import s from "./Chat.module.css";

export const Chat = () => {
  return (
    <VStack className={s.chat} max>
      <div className={s.messages}>messages...</div>
      <MessageInput className={s.input} />
    </VStack>
  );
};
