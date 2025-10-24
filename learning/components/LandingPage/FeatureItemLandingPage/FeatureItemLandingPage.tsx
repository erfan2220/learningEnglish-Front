import React from "react";
// import noticeIcon from "/icons/noticeIcon.svg";
import Image from "next/image";

const FeatureItemLandingPage = ({ detail }: { detail: string }) => {
  return (
    <div className="flex items-start gap-2 mb-2">
      {/* <img
        src={"/icons/noticeIcon.svg"}
        alt="start pic"
        className="w-6 h-6 mt-2"
      /> */}
      <Image
        src="/icons/noticeIcon.svg"
        alt="start pic"
        width={24}
        height={24}
        className="mt-2"
      />
      <p className="text-[#5C5A60] md:text-xl ">{detail}</p>
    </div>
  );
};

export default FeatureItemLandingPage;
