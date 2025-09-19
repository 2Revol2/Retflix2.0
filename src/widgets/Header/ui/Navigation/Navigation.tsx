import { NavigationMenu } from "radix-ui";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { ListItem } from "../NavigationItem/ListItem";
import { NavbarCategories, NavbarSection } from "../../model/constants/const";
import s from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

export const Navigation = (props: NavigationProps) => {
  const { className } = props;
  const t = useTranslations("Header");
  return (
    <NavigationMenu.Root className={classNames(s.navigation, {}, [className])}>
      <NavigationMenu.List className={s.menuList}>
        {NavbarSection.map((item) => (
          <NavigationMenu.Item key={item.url}>
            <Link className={s.link} href={item.url}>
              {t(item.title)}
            </Link>
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild className={s.trigger}>
            <Button variant="clear">{t("more")}</Button>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={s.content}>
            {NavbarCategories.map((item) => (
              <ListItem href={item.url} key={item.url}>
                {t(item.title)}
              </ListItem>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
