import { cookies } from "next/headers";
import { AuthForm } from "@/widgets/AuthForm";
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

  return (
    <div className={s.chat}>
      {!token && <AuthForm className={s.authForm} />}
      {user && <div>Привет, {user.username}!</div>}
      <div>chat</div>
    </div>
  );
};

export default Chat;
