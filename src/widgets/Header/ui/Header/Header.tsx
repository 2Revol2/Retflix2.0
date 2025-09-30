import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { RoutePath } from "@/shared/constants/route";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { ToggleSidebar } from "@/features/ToggleSidebar";
import s from "./Header.module.css";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <HStack justify="between" align="center" as="header" className={classNames(s.header, {}, [className])}>
      <HStack align="center" gap="4">
        <ToggleSidebar />
        <h1>
          <Link className={s.logo} href={RoutePath.main}>
            ReMovie
          </Link>
        </h1>
      </HStack>

      <HStack align="center" gap="8">
        <Button className={s.search}>
          <Link href={RoutePath.search} className={s.link}>
            <CiSearch size={24} />
          </Link>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </HStack>
    </HStack>
  );
};
