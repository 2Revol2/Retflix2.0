import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { Mods } from "@/shared/lib/classNames/classNames";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Flex.module.css";

type FlexJustify = "start" | "center" | "end" | "between" | "around";
type FlexAlign = "start" | "center" | "end";
type FlexDirection = "row" | "column";
type FlexGap = "4" | "8" | "16" | "24" | "32" | "48";

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
  around: s.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  "4": s.gap4,
  "8": s.gap8,
  "16": s.gap16,
  "24": s.gap24,
  "32": s.gap32,
  "48": s.gap48,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  as?: React.ElementType;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "start",
    direction = "row",
    gap,
    max,
    as: Component = "div",
  } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className,
  ];

  const mods: Mods = {
    [s.max]: max,
  };

  return <Component className={classNames(s.flex, mods, classes)}>{children}</Component>;
};
