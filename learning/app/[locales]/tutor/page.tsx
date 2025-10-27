import TutorList from "@/components/TutorList/TutorList";
import React, { Suspense } from "react";

const TutorPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TutorList />
      </Suspense>
    </div>
  );
};

export default TutorPage;
