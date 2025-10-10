"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui/Button/Button";
import { logout } from "@/shared/api/axios/auth/api";
import { classNames } from "@/shared/lib/classNames/classNames";

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { className } = props;
  const t = useTranslations("ChatPage");
  const onLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button className={classNames("", {}, [className])} onClick={onLogout}>
      {t("Logout")}
    </Button>
  );
};
