import CourseDetail from "@/components/CourseDetail/CourseDetail";
import React from "react";

interface Props {
  params: Promise<{
    courseId: string;
  }>;
}

const CourseDetailPage = async ({ params }: Props) => {
  const { courseId } = await params;

  if (isNaN(parseInt(courseId))) {
    return <p className="mt-30">Invalid course ID</p>;
  }

  return <CourseDetail courseId={courseId} />;
};

export default CourseDetailPage;
