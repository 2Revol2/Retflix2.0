"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Divider } from "@/shared/ui/Divider/Divider";
import { useToggleSidebarStore } from "@/features/ToggleSidebar";
import { NavbarCategories, NavbarSection } from "../../model/consts/consts";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import s from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const { isOpen } = useToggleSidebarStore();

  return (
    <aside className={classNames(s.siderbar, { [s.isOpen]: isOpen }, [className])}>
      <VStack gap="16" align={isOpen ? undefined : "center"} max as={"nav"}>
        {NavbarCategories.map((item) => (
          <SidebarItem item={item} key={item.url} isOpen={isOpen} />
        ))}
        <Divider />
        {NavbarSection.map((item) => (
          <SidebarItem item={item} key={item.url} isOpen={isOpen} />
        ))}
      </VStack>
    </aside>
  );
};
