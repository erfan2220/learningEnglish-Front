import React from "react";
import Image from "next/image";
import messageImage from "../../../../../assets/images/messageImage.svg";

const DashboardStudentMessagesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px]">
      <div className="max-w-[500px] max-h-[500px]">
        <Image
          src={messageImage}
          alt="welcome picture"
          width={200}
          height={200}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default DashboardStudentMessagesPage;
