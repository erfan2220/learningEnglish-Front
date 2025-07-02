import TutorShowCart from "@/components/TutorShowCart/TutorShowCart";
import { studentDetail } from "@/mock/studentMockData";
import React from "react";

const DashboardStudentFavorites = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#45444A] m-4">
        My Favorite Tutors
      </h2>
      <div className="flex flex-wrap gap-y-4 justify-center items-start sm:px-8">
        <div className="flex flex-wrap gap-y-4 justify-evenly sm:px-8">
          {studentDetail[0].favoriteTutors.map((tutorId, index) => (
            <div key={index}>
              <TutorShowCart tutorId={tutorId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStudentFavorites;
