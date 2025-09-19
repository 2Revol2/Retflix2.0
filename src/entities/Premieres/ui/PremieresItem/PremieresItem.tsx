import { useTranslations } from "next-intl";
import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack, VStack } from "@/shared/ui/Stack";
import { RoutePath } from "@/shared/constants/route";
import { Button } from "@/shared/ui/Button/Button";
import type { Premiere } from "../../model/types/types";
import s from "./PremieresItem.module.css";

interface PremieresItemProps {
  className?: string;
  premier: Premiere;
}

export const PremieresItem = (props: PremieresItemProps) => {
  const { className, premier } = props;
  const t = useTranslations("HomePage");

  return (
    <article className={classNames(s.PremieresListItem, {}, [className])}>
      <img src={premier.posterUrl} className={s.poster} alt={premier.nameRu ?? premier.nameEn ?? "Poster"} />
      <div className={s.overlay}></div>
      <VStack justify="end" gap="8" className={s.infoBlock}>
        <h3 className={s.name}>{premier.nameRu ? premier.nameRu : premier.nameEn}</h3>
        <HStack gap="16">
          <p className={s.info}>{premier.year}</p>
          <p className={s.info}>
            {t("Duration")}: {premier.duration} {t("minutes")}
          </p>
        </HStack>
        <p className={classNames(s.country, {}, [s.info])}>{premier.countries.map((c) => c.country).join(", ")}</p>
        <p className={classNames(s.genre, {}, [s.info])}>{premier.genres.map((g) => g.genre).join(", ")}</p>
        <Link href={`${RoutePath.movie_details}${premier.kinopoiskId}`}>
          <Button className={s.link}>{t("Watch")}</Button>
        </Link>
      </VStack>
    </article>
  );
};
