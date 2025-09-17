"use client";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (initialTheme) {
      setTheme(initialTheme);
    }
  }, [initialTheme]);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      <div className={classNames("app", {}, [theme])}>{children}</div>
    </ThemeContext.Provider>
  );
};
