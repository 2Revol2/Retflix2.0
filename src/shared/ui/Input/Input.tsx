"use client";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Input.module.css";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { className, value, onChange, placeholder, type, ...otherProps } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      onChange={onChangeHandler}
      value={value}
      type={type}
      className={classNames(s.input, {}, [className])}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
