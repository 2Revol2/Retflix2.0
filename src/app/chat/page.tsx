import { cookies } from "next/headers";
import { AuthForm } from "@/widgets/AuthForm";
import { LogoutButton } from "@/app/chat/ui/LogoutButton/LogoutButton";
import { HStack } from "@/shared/ui/Stack";
import s from "./chat.module.css";

const Chat = async () => {
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
  console.log(user);
  return (
    <div className={s.chat}>
      {!token && <AuthForm className={s.authForm} />}
      <HStack justify={"between"} max align={"center"}>
        <h3 className={s.title}>Movie buffs chat</h3>
        {user && <LogoutButton className={s.logoutButton} />}
      </HStack>
      <div>chat</div>
    </div>
  );
};

export default Chat;
