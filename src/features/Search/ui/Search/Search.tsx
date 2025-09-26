"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/shared/ui/Input/Input";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface SearchProps {
  className?: string;
}

export const Search = (props: SearchProps) => {
  const { className } = props;
  const [keyword, setKeyword] = useState("");
  const t = useTranslations("Search");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const debouncedKeyword = useDebounce(keyword, 1500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", debouncedKeyword);
    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedKeyword, pathname, router, searchParams]);

  return <Input value={keyword} onChange={setKeyword} placeholder={t("Search")} className={className} />;
};
