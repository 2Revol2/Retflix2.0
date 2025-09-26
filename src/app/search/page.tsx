import { MovieList } from "@/entities/Movie";
import { Pagination } from "@/features/Pagination";
import { VStack } from "@/shared/ui/Stack";
import { Search } from "@/features/Search/ui/Search/Search";
import { getFilms } from "@/shared/api/axios/movies/api";

const SearchPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const keyword = searchParams["keyword"] ?? "";
  const page = Number(searchParams["page"] ?? 1);
  const { items, totalPages } = await getFilms({ keyword: keyword, page });
  return (
    <VStack gap="16" max align="center">
      <Search />
      <MovieList movies={items} />
      <Pagination totalPages={totalPages} />
    </VStack>
  );
};

export default SearchPage;
