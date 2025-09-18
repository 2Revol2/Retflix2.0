import type { ReactNode } from "react";
import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ListItem.module.css";

interface NavigationItemProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export const ListItem = (props: NavigationItemProps) => {
  const { className, children, href } = props;
  return (
    <Link className={classNames(s.listItem, {}, [className])} href={href}>
      {children}
    </Link>
  );
};
