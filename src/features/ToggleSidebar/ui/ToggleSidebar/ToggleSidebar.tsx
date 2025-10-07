"use client";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { useToggleSidebarStore } from "../../model/store/useToggleSidebarStore";

interface ToggleSidebarProps {
  className?: string;
}

export const ToggleSidebar = (props: ToggleSidebarProps) => {
  const { className } = props;
  const { isOpen, toggleSidebar } = useToggleSidebarStore();

  return (
    <Button variant="clear" onClick={() => toggleSidebar(!isOpen)} className={classNames("", {}, [className])}>
      {isOpen ? <RiMenuFold3Fill size={40} /> : <RiMenuFold4Fill size={40} />}
    </Button>
  );
};
