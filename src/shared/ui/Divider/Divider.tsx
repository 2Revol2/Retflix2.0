import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Divider.module.css";

interface DividerProps {
  className?: string;
}

export const Divider = (props: DividerProps) => {
  const { className } = props;
  return <div className={classNames(s.divider, {}, [className])} />;
};
