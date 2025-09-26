"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/shared/ui/Input/Input";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { MovieList } from "@/entities/Movie";
import { Pagination } from "@/features/Pagination";
import { VStack } from "@/shared/ui/Stack";
import { useSearchMovies } from "./api/searchApi";

interface SearchPageProps {
  page: number;
}

const SearchPage = ({ page }: SearchPageProps) => {
  const [keyword, setKeyword] = useState("");
  const debouncedKeywords = useDebounce(keyword, 2000);
  const { data } = useSearchMovies({ keyword: debouncedKeywords, page });
  const t = useTranslations("Search");

  return (
    <VStack gap="16" max align="center">
      <Input value={keyword} onChange={setKeyword} placeholder={t("Search")} />
      <MovieList movies={data?.items} />
      <Pagination totalPages={data?.totalPages || 1} />
    </VStack>
  );
};

export default SearchPage;
