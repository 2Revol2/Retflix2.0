import { getTranslations } from "next-intl/server";
import { MovieList } from "@/entities/Movie";
import { Pagination } from "@/features/Pagination";
import { getMoviesCollections } from "@/shared/api/axios/collections/api";

const MovieCategories = async ({
  params,
  searchParams,
}: {
  params: Promise<{ collections: string }>;
  searchParams: { [key: string]: number | undefined };
}) => {
  const { collections } = await params;
  const page = searchParams["page"] ?? 1;

  const { items, totalPages } = await getMoviesCollections(collections, page);
  const t = await getTranslations("Sidebar");

  return (
    <div>
      {t(collections)}
      <MovieList movies={items} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default MovieCategories;
