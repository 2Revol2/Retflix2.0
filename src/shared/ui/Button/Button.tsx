import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { Mods } from "@/shared/lib/classNames/classNames";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "clear";
}

export const Button = (props: ButtonProps) => {
  const { className, children, disabled, variant = "primary", ...otherProps } = props;

  const mods: Mods = {
    [s.disabled]: disabled,
  };

  return (
    <button {...otherProps} disabled={disabled} className={classNames(s.button, mods, [className, s[variant]])}>
      {children}
    </button>
  );
};
