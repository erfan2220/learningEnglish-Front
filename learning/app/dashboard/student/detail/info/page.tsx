import React from "react";
import Image from "next/image";
import profilePhoto from "../../../../../assets/icons/profilePhoto.svg";

const DashboardStudentInfoPage = () => {
  return (
    <div className="mt-8 px-1 md:px-2 lg:px-4">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src={profilePhoto}
            alt="profile photo"
            width={120}
            height={120}
          />
        </div>
        <u>upload photo</u>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row  gap-4 mt-8">
        <div className="w-1/3">hi</div>
        <div className="w-2/3">sdsg</div>
      </div>
    </div>
  );
};

export default DashboardStudentInfoPage;
