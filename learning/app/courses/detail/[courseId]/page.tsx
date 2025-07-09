import CourseDetail from "@/components/CourseDetail/CourseDetail";
import React from "react";

interface Props {
  params: {
    courseId: string;
  };
}

const CourseDetailPage = async ({ params }: Props) => {
  const { courseId } = await params;
  return (
    <div>
      <CourseDetail courseId={courseId} />
    </div>
  );
};

export default CourseDetailPage;
