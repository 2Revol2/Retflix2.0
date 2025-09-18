const MovieSection = async ({ params }: { params: Promise<{ section: string }> }) => {
  const { section } = await params;

  console.log(section);
  return <div>MovieSection</div>;
};

export default MovieSection;
