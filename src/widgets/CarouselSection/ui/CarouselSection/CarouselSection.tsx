import Link from "next/link";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Carousel, Slide } from "@/shared/ui/Carousel/Carousel";
import s from "./CarouselSection.module.css";

interface CarouselSectionProps {
  className?: string;
  slides: Slide[];
  title?: string;
  href?: string;
  type?: "default" | "movieDetails";
}

export const CarouselSection = (props: CarouselSectionProps) => {
  const { className, slides, title, href, type = "default" } = props;

  return (
    <div className={classNames(s.wrapper, {}, [className])}>
      {href ? (
        <Link href={href} className={s.link}>
          <h3 className={s.title}>{title}</h3>
        </Link>
      ) : (
        <h3 className={s.title}>{title}</h3>
      )}
      <Carousel slides={slides} type={type} />
    </div>
  );
};
