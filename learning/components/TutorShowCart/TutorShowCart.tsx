import { tutorDetail } from "@/mock/tutorMockData";
import React from "react";
import Image from "next/image";

const TutorShowCart = ({ tutorId }) => {
  return (
    <div>
      {tutorDetail.map(
        (tutor) =>
          tutor.tutorId === tutorId && (
            <div
              key={tutor.id}
              className="flex flex-wrap items-center justify-center w-[200px] sm:w-[320px] rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-4 sm:p-4 p-1">
                <div>
                  <Image
                    src={tutor.tutorPhoto}
                    alt="tutor photo"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="flex flex-col items-center ">
                  <p className="text-sm font-bold text-[#45444A]">
                    {tutor.tutorFirstName} {tutor.tutorLastName}
                  </p>
                  <p className="text-xs text-[#8B8A8E]">{tutor.role}</p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TutorShowCart;
