import { cookies } from "next/headers";
import { AuthForm } from "@/widgets/AuthForm";
import { LogoutButton } from "@/app/chat/ui/LogoutButton/LogoutButton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Chat } from "@/widgets/Chat";
import type { User } from "@/shared/api/axios/auth/types";
import s from "./chat.module.css";

const ChatPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

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
    return <AuthForm className={s.authForm} />;
  }

  return (
    <VStack max className={s.chat} gap={"8"}>
      <HStack justify={"between"} max align={"center"}>
        <h3 className={s.title}>Movie buffs chat</h3>
        {user && <LogoutButton className={s.logoutButton} />}
      </HStack>
      <Chat user={user} />
    </VStack>
  );
};

export default ChatPage;
