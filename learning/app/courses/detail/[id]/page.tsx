import CourseDetail from "@/components/CourseDetail/CourseDetail";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CourseDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (isNaN(parseInt(id))) {
    return <p className="mt-30">Invalid course ID</p>;
  }

  return <CourseDetail courseId={parseInt(id)} />;
};

export default CourseDetailPage;
