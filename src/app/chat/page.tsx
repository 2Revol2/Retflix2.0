import Link from "next/link";
import { auth0 } from "@/shared/lib/auth0";

const Chat = async () => {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <div>
        <Link href="/auth/login?screen_hint=signup">Sign up</Link>
        <Link href="/auth/login">Log in</Link>
      </div>
    );
  }

  return (
    <div>
      <h5>Chat</h5>
    </div>
  );
};

export default Chat;
