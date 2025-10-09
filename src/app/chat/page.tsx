import { cookies } from "next/headers";
import { AuthForm } from "@/widgets/AuthForm";
import { LogoutButton } from "@/app/chat/ui/LogoutButton/LogoutButton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Chat } from "@/widgets/Chat";
import s from "./chat.module.css";

const ChatPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  let user: { username: string } | undefined = undefined;
  if (token) {
    try {
      const payload = JSON.parse(atob(token.value.split(".")[1]));
      user = payload;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <VStack max className={s.chat} gap={"8"}>
      {!token && <AuthForm className={s.authForm} />}
      <HStack justify={"between"} max align={"center"}>
        <h3 className={s.title}>Movie buffs chat</h3>
        {user && <LogoutButton className={s.logoutButton} />}
      </HStack>
      <Chat />
    </VStack>
  );
};

export default ChatPage;
