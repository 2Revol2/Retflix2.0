"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/Input/Input";
import { useAuthForm } from "@/widgets/AuthForm/model/store/useAuthForm";
import { Button } from "@/shared/ui/Button/Button";
import s from "./AuthForm.module.css";

interface AuthFormProps {
  className?: string;
}

export const AuthForm = (props: AuthFormProps) => {
  const { className } = props;
  const { formData, setUsername, setPassword, setSubmitPassword, authMode, setAuthMode, error, isLoading, submitForm } =
    useAuthForm();
  const t = useTranslations("AuthForm");

  return (
    <div className={classNames(s.authForm, {}, [className])}>
      <VStack gap={"16"} className={s.inside}>
        <Input placeholder={t("Username")} value={formData.username} onChange={setUsername} />
        <Input placeholder={t("Password")} type="password" value={formData.password} onChange={setPassword} />
        {authMode === "register" && (
          <Input
            placeholder={t("RepeatPassword")}
            type="password"
            value={formData.submitPassword}
            onChange={setSubmitPassword}
          />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {authMode === "login" && (
          <Button variant={"clear"} className={s.register} onClick={() => setAuthMode("register")}>
            {t("DontHaveAccount")}
          </Button>
        )}
        {authMode === "register" && (
          <Button variant={"clear"} className={s.register} onClick={() => setAuthMode("login")}>
            {t("HaveAccount")}
          </Button>
        )}
        <Button variant={"outline"} style={{ width: "100%" }} onClick={submitForm} disabled={isLoading}>
          <span>{isLoading ? t("Loading") : authMode === "login" ? t("Login") : t("Register")}</span>
        </Button>
      </VStack>
    </div>
  );
};
