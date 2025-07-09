import CourseDetail from "@/components/CourseDetail/CourseDetail";
import React from "react";

const CourseDetailPage = () => {
  return (
    <div>
      <CourseDetail />
    </div>
  );
};

export default CourseDetailPage;

// import TutorDetail from "@/components/TutorDetail/TutorDetail";
// import React from "react";

// interface Props {
//   params: {
//     tutorId: string;
//   };
// }
// const TutorDetailPage = ({ params }: Props) => {
//   return (
//     <div>
//       <TutorDetail tutorId={params.tutorId} />
//     </div>
//   );
// };

// export default TutorDetailPage;
