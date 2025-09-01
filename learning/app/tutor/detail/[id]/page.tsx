import TutorDetail from "@/components/TutorDetail/TutorDetail";

interface Props {
  params: {
    id: string;
  };
}

const TutorDetailPage = ({ params }: Props) => {
  const id = Number(params.id);
  return <TutorDetail id={id} />;
};

export default TutorDetailPage;
