import type { Message } from "@/shared/api/axios/messages/types";
import type { User } from "@/shared/api/axios/auth/types";
import { VStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Message.module.css";

interface MessageProps {
  message: Message;
  user: User;
}

export const MessageItem = (props: MessageProps) => {
  const { message, user } = props;
  const isOwnMessage = message.authorId === user.userId;

  return (
    <VStack max className={`${s.messageContainer}`} align={isOwnMessage ? "end" : "start"}>
      <VStack className={classNames(s.message, { [s.ownMessage]: isOwnMessage, [s.otherMessage]: !isOwnMessage }, [])}>
        {!isOwnMessage && <div className={s.username}>{message.author.username}</div>}
        <div className={s.text}>{message.text}</div>
      </VStack>
    </VStack>
  );
};
