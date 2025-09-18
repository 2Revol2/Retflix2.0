"use client";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { Button } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import Moon from "@/shared/assets/icons/Moon";
import Sun from "@/shared/assets/icons/Sun";
import s from "./ThemeSwitcher.module.css";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className={classNames(s.ThemeSwitcher, {}, [className])} variant="secondary" onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
};
