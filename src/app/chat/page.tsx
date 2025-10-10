import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { AuthForm } from "@/widgets/AuthForm";
import { LogoutButton } from "@/app/chat/ui/LogoutButton/LogoutButton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Chat } from "@/widgets/Chat";
import type { User } from "@/shared/api/axios/auth/types";
import s from "./chat.module.css";

const ChatPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const t = await getTranslations("ChatPage");
  let user: User | undefined = undefined;
  if (token) {
    try {
      const payload = JSON.parse(atob(token.value.split(".")[1]));
      user = payload;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

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
