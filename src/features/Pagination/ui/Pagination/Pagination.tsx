"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { getVisiblePages } from "@/shared/lib/getVisiblePages/getVisiblePages";
import s from "./Pagination.module.css";

interface PaginationProps {
  className?: string;
  totalPages: number;
}

export const Pagination = (props: PaginationProps) => {
  const { className, totalPages } = props;

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = searchParams.get("page") ?? "1";

  const goToPage = (pageNum: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNum.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const goToNextPage = () => {
    goToPage(Number(page) + 1);
  };

  const goToPrevPage = () => {
    goToPage(Number(page) - 1);
  };

  return (
    <HStack gap="8" align="center" justify="center" className={classNames(s.pagination, {}, [className])}>
      <Button variant="secondary" className={s.button} onClick={goToPrevPage} disabled={Number(page) <= 1}>
        <MdNavigateBefore size={20} />
      </Button>

      <HStack gap="4" align="center" className={s.list} as={"ul"}>
        {getVisiblePages(Number(page), totalPages).map((item, index) => (
          <li key={index}>
            {item === "..." ? (
              <HStack align="center">…</HStack>
            ) : (
              <Button
                className={classNames(s.button, { [s.active]: Number(page) === item })}
                onClick={() => goToPage(Number(item))}
              >
                {item}
              </Button>
            )}
          </li>
        ))}
      </HStack>

      <Button variant="secondary" className={s.button} onClick={goToNextPage} disabled={Number(page) >= totalPages}>
        <MdNavigateNext size={20} />
      </Button>
    </HStack>
  );
};
