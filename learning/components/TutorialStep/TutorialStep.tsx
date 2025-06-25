import React from "react";
import Image from "next/image";

const TutorialStep = ({ stepNumber, title, detail, picture, flexRow }) => {
  return (
    <div
      className={`flex flex-col gap-2 md:flex-${flexRow} items-center px-[10%] py-4 gap-5 md:gap-0`}
    >
      <div className="flex-1">
        <p className="text-[#E18D33] font-bold text-base md:text-lg">
          step {stepNumber}:
        </p>
        <h4 className="text-[#45444A] font-bold md:text-3xl text-2xl">
          {title}
        </h4>
        <p className="text-[#5C5A60] text-base md:text-lg font-semibold mt-4">
          {detail}
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {" "}
        <Image
          src={picture}
          alt="step picture"
          width={100}
          height={100}
          className="object-contain"
          style={{ width: "70%", height: "70%" }}
        />
      </div>
    </div>
  );
};

export default TutorialStep;
