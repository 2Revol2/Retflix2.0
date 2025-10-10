"use client";
import { useEffect, useState } from "react";
import { VStack } from "@/shared/ui/Stack";
import { getMessages } from "@/shared/api/axios/messages/api";
import type { Message } from "@/shared/api/axios/messages/types";
import type { User } from "@/shared/api/axios/auth/types";
import { MessageItem } from "@/widgets/Chat/ui/Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import s from "./Chat.module.css";

interface ChatProps {
  user: User;
}

export const Chat = ({ user }: ChatProps) => {
  const [message, setMessage] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages();
      setMessage(data);
    };
    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <VStack className={s.chat} max>
      {message.length === 0 && <div className={s.empty}>No messages yet</div>}
      <VStack gap={"16"} max className={s.messages}>
        {message.map((message) => (
          <MessageItem key={message.id} message={message} user={user} />
        ))}
      </VStack>
      <MessageInput className={s.input} userId={user.userId} />
    </VStack>
  );
};
