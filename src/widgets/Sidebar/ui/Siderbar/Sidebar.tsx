"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { isOpenSidebar } from "@/features/ToggleSidebar";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { NavbarCategories, NavbarSection } from "../../model/consts/consts";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import s from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const isSidebarOpen = useAppSelector(isOpenSidebar);

  return (
    <aside className={classNames(s.siderbar, { [s.isOpen]: isSidebarOpen }, [className])}>
      <VStack gap="16" align={isSidebarOpen ? undefined : "center"} max as={"nav"}>
        {NavbarCategories.map((item) => (
          <SidebarItem item={item} key={item.url} isOpen={isSidebarOpen} />
        ))}

        {NavbarSection.map((item) => (
          <SidebarItem item={item} key={item.url} isOpen={isSidebarOpen} />
        ))}
      </VStack>
    </aside>
  );
};
