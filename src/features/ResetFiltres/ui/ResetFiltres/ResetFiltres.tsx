"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

interface ResetFiltresProps {
  className?: string;
}

export const ResetFiltres = (props: ResetFiltresProps) => {
  const { className } = props;
  const t = useTranslations("Filters");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button onClick={() => router.push(pathname)} className={classNames("", {}, [className])}>
      {t("Reset")}
    </Button>
  );
};
