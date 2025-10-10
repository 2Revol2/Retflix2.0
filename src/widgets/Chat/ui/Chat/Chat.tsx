"use client";
import { useQuery } from "@tanstack/react-query";
import { VStack } from "@/shared/ui/Stack";
import { getMessages } from "@/shared/api/axios/messages/api";
import type { User } from "@/shared/api/axios/auth/types";
import { MessageItem } from "@/widgets/Chat/ui/Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import s from "./Chat.module.css";

interface ChatProps {
  user: User;
}

export const Chat = ({ user }: ChatProps) => {
  const { data: messages = [] } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessages(),
    refetchInterval: 10000,
  });

  return (
    <VStack className={s.chat} max>
      {messages.length === 0 && <div className={s.empty}>No messages yet</div>}
      <VStack gap={"16"} max className={s.messages}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} user={user} />
        ))}
      </VStack>
      <MessageInput className={s.input} userId={user.userId} />
    </VStack>
  );
};
