import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useToggleSidebarStore } from "@/features/ToggleSidebar";
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
  const pathname = usePathname();
  const isActive = pathname === item.url;

  const { toggleSidebar } = useToggleSidebarStore();
  return (
    <Link
      onClick={() => toggleSidebar(false)}
      className={classNames(s.link, { [s.linkOpen]: isOpen, [s.active]: isActive }, [className])}
      href={item.url}
    >
      <div className={isOpen ? "" : s.icon}>{item.icon}</div>
      {isOpen && t(item.title)}
    </Link>
  );
};
