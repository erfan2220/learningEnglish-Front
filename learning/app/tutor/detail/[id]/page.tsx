import TutorDetail from "@/components/TutorDetail/TutorDetail";


interface Props {
  params: Promise<{
    id: number;
  }>;
}
const TutorDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  // const id = Number(params.id);
  return <TutorDetail id={id} />;
};

export default TutorDetailPage;



