import CourseDetail from "@/components/Course/CourseDetail/CourseDetail";
import React from "react";

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const CourseDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return <CourseDetail id={id} />;
};

export default CourseDetailPage;
