import React from "react";
import Image from "next/image";
import noticeIcon from "../../assets/icons/noticeIcon.svg";

const FeatureItemLandingPage = ({ detail }) => {
  return (
    <div className="flex items-start gap-2 mb-2">
      <Image
        src={noticeIcon}
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
