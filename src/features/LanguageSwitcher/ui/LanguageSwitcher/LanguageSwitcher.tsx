"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
  const [locale, setLocale] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const onChangeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  return (
    <Button onClick={() => onChangeLanguage(locale === "en" ? "ru" : "en")} className={classNames("", {}, [className])}>
      {locale === "en" ? "En" : "Ru"}
    </Button>
  );
};
