"use client";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
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
  const t = useTranslations("ChatPage");
  const { message, setMessage } = useMessage();

  const { mutate } = useMutation({
    mutationFn: () => sendMessage(message, userId),
    onSuccess: () => {
      setMessage("");
    },
  });

  return (
    <HStack max gap={"4"} className={classNames("", {}, [className])}>
      <Input placeholder={t("EnterMessage")} value={message} onChange={setMessage} />
      <Button onClick={() => mutate()} variant={"outline"}>
        {t("Send")}
      </Button>
    </HStack>
  );
};
