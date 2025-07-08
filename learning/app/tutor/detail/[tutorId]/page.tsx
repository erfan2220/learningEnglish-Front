import TutorDetail from "@/components/TutorDetail/TutorDetail";
import React from "react";

interface Props {
  params: {
    tutorId: string;
  };
}
const TutorDetailPage = ({ params }: Props) => {
  return (
    <div>
      <TutorDetail tutorId={params.tutorId} />
    </div>
  );
};

export default TutorDetailPage;
