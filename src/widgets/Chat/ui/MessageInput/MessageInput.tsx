"use client";
import { useTranslations } from "next-intl";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { sendMessage } from "@/shared/api/axios/messages/api";
import { useMessage } from "../../model/store/useMessage";

interface MessageInputProps {
  className?: string;
  userId: string;
}

export const MessageInput = (props: MessageInputProps) => {
  const { className, userId } = props;
  const { message, setMessage } = useMessage();
  const t = useTranslations("ChatPage");
  const onSendMessage = async () => {
    if (!message) return;
    try {
      await sendMessage(message, userId);
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <HStack max gap={"4"} className={classNames("", {}, [className])}>
      <Input placeholder={t("EnterMessage")} value={message} onChange={setMessage} />
      <Button onClick={onSendMessage} variant={"outline"}>
        {t("Send")}
      </Button>
    </HStack>
  );
};
