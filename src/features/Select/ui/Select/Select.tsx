"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import s from "./Select.module.css";

interface Option {
  label: string;
  value: number | string;
}

interface SelectProps {
  className?: string;
  placeholder?: string;
  options: Option[];
  urlTag?: string;
}

export const Select = (props: SelectProps) => {
  const { className, options, placeholder, urlTag } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedValue = searchParams.get(urlTag ?? "");
  const selectedOption = options.find((o) => o.value.toString() === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options?.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));

  const openHandler = () => {
    setIsOpen(true);
  };

  const handleSelect = (option: Option) => {
    setIsOpen(false);
    setSearch("");

    const params = new URLSearchParams(searchParams.toString());
    params.set(`${urlTag}`, option.value.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div ref={ref} className={classNames(s.select, {}, [className])}>
      <Input
        value={search ?? ""}
        onClick={openHandler}
        onChange={setSearch}
        placeholder={selectedOption?.label || placeholder}
      />
      {isOpen && (
        <ul className={s.dropdown}>
          {filteredOptions?.map((option) => (
            <li key={option.value} className={s.option} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}

          {filteredOptions?.length === 0 && <li className={s.noResults}>Нет совпадений</li>}
        </ul>
      )}
    </div>
  );
};
