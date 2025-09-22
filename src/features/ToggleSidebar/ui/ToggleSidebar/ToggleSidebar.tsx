"use client";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { isOpenSidebar } from "../../model/selector/sidebar";
import { toggleSidebarActions } from "../../model/slice/toggleSidebarSlice";

interface ToggleSidebarProps {
  className?: string;
}

export const ToggleSidebar = (props: ToggleSidebarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(isOpenSidebar);

  const toogleSidebar = () => {
    dispatch(toggleSidebarActions.toggleSidebar());
  };
  return (
    <Button variant="clear" onClick={toogleSidebar} className={classNames("", {}, [className])}>
      {isSidebarOpen ? <RiMenuFold3Fill size={40} /> : <RiMenuFold4Fill size={40} />}
    </Button>
  );
};
