"use client";
import React from "react";
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
  const {
    formData,
    setUsername,
    setPassword,
    setSubmitPassword,
    authMode,
    setAuthMode,
    error,
    isLoading,
    isSuccess,
    submitForm,
  } = useAuthForm();

  if (isSuccess) return null;

  return (
    <div className={classNames(s.authForm, {}, [className])}>
      <VStack gap={"16"} className={s.inside}>
        <Input placeholder="username" value={formData.username} onChange={setUsername} />
        <Input placeholder="password" type="password" value={formData.password} onChange={setPassword} />
        {authMode === "register" && (
          <Input
            placeholder="repeat password"
            type="password"
            value={formData.submitPassword}
            onChange={setSubmitPassword}
          />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {authMode === "login" && (
          <Button variant={"clear"} className={s.register} onClick={() => setAuthMode("register")}>
            dont have an account? register
          </Button>
        )}
        {authMode === "register" && (
          <Button variant={"clear"} className={s.register} onClick={() => setAuthMode("login")}>
            you have an account? login
          </Button>
        )}
        <Button variant={"outline"} style={{ width: "100%" }} onClick={submitForm} disabled={isLoading}>
          <span>{isLoading ? "Loading..." : authMode === "login" ? "login" : "register"}</span>
        </Button>
      </VStack>
    </div>
  );
};
