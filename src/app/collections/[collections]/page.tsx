const MovieCategories = async ({ params }: { params: Promise<{ collections: string }> }) => {
  const { collections } = await params;
  // const data = await getMoviesCollections(collections);
  console.log(collections);

  return <div>Movie Collections</div>;
};

export default MovieCategories;
