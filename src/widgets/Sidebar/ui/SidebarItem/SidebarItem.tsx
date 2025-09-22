import Link from "next/link";
import { useTranslations } from "next-intl";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { SidebarItemType } from "../../model/types/types";
import s from "./SidebarItem.module.css";

interface SidebarItemProps {
  className?: string;
  isOpen?: boolean;
  item: SidebarItemType;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { className, isOpen, item } = props;
  const t = useTranslations("Sidebar");
  return (
    <Link className={classNames(s.link, { [s.linkOpen]: isOpen }, [className])} href={item.url}>
      <div className={isOpen ? "" : s.icon}>{item.icon}</div>
      {isOpen && t(item.title)}
    </Link>
  );
};
