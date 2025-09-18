const MovieCategories = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  console.log(category);

  return <div>MovieCategories</div>;
};

export default MovieCategories;
