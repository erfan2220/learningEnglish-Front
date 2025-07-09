import TutorDetail from "@/components/TutorDetail/TutorDetail";
import React from "react";

interface Props {
  params: {
    tutorId: string;
  };
}
const TutorDetailPage = async ({ params }: Props) => {
  const { tutorId } = await params;
  return (
    <div>
      <TutorDetail tutorId={tutorId} />
    </div>
  );
};

export default TutorDetailPage;
