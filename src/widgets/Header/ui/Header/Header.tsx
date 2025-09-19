import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { RoutePath } from "@/shared/constants/route";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.css";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <HStack justify="between" align="center" as="header" className={classNames(s.header, {}, [className])}>
      <h1>
        <Link className={s.logo} href={RoutePath.main}>
          ReTflix
        </Link>
      </h1>
      <Navigation />
      <HStack align="center" gap="16">
        <Button variant="clear">search</Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </HStack>
    </HStack>
  );
};
