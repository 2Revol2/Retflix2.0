import { getTranslations } from "next-intl/server";
import { AuthForm } from "@/widgets/AuthForm";
import { LogoutButton } from "@/app/chat/ui/LogoutButton/LogoutButton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Chat } from "@/widgets/Chat";
import { getUser } from "@/shared/lib/getUser/getUser";
import s from "./chat.module.css";

const ChatPage = async () => {
  const t = await getTranslations("ChatPage");
  const user = await getUser();

  if (!user) {
    return (
      <div className={s.chat}>
        <AuthForm className={s.authForm} />
      </div>
    );
  }

  return (
    <VStack max className={s.chat} gap={"8"}>
      <HStack justify={"between"} max align={"center"}>
        <h3 className={s.title}>{t("MovieBuffsChat")}</h3>
        {user && <LogoutButton className={s.logoutButton} />}
      </HStack>
      <Chat user={user} />
    </VStack>
  );
};

export default ChatPage;
