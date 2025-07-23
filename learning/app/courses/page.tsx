import Courses from "@/components/Courses/Courses";
import React, { Suspense } from "react";

const CoursesPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Courses />
      </Suspense>
    </div>
  );
};

export default CoursesPage;
