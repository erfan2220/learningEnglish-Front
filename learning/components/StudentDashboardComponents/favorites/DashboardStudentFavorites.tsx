import TutorShowCart from "@/components/TutorShowCart/TutorShowCart";
import { studentDetail } from "@/mock/studentMockData";
import React from "react";

const DashboardStudentFavorites = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold m-4">My Favorite Tutors</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {studentDetail[0].favoriteTutors.map((tutorId, index) => (
          <div key={index}>
            <TutorShowCart tutorId={tutorId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStudentFavorites;
