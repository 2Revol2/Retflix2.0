const MovieDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
