import CourseDetail from "@/components/CourseDetail/CourseDetail";
import React from "react";

interface Props {
  params: {
    courseId: string;
  };
}

const CourseDetailPage = ({ params }: Props) => {
  return (
    <div>
      <CourseDetail courseId={params.courseId} />
    </div>
  );
};

export default CourseDetailPage;
