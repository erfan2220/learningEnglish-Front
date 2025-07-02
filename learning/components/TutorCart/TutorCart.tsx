import React from "react";

import Country from "../Country/Country";
import Link from "next/link";
import Button from "../Button/Button";

const TutorCart = ({ tutorData }) => {
  return (
    <div className="bg-[#F1ECFE] rounded-2xl border-2 border-[#D2D2D2] shadow-md p-4">
      <div>
        <div className="w-full mb-4">
          <video
            src={tutorData.introduceVideo}
            controls
            muted
            playsInline
            preload="metadata"
            width="400"
          />
        </div>
        <div className="text-xl text-[#5C5A60] font-bold">
          {tutorData.tutorFirstName} {tutorData.tutorLastName}
        </div>
        <div className="text-sm text-[#8B8A8E] mb-4">{tutorData.role}</div>

        <div className="flex flex-wrap gap-4">
          {tutorData.speaks.map((lang) => (
            <Country
              key={lang.languageId}
              flag={lang.flag}
              countryName={lang.language}
              width={20}
              textSize={"14px"}
            />
          ))}
        </div>
        <div className="mt-6">
          <p className="font-semibold text-[#5C5A60] text-sm">Price</p>
          <p className="font-bold text-lg text-[#45444A]">
            <p>
              {tutorData.pricePerHour[0].currency}{" "}
              {tutorData.pricePerHour[0].price}
            </p>
          </p>
        </div>

        <Link href={`/tutor/detail/${tutorData.id}`}>
          <Button type="button" label={"try now"} widthBtn="100%" />
        </Link>
      </div>
    </div>
  );
};

export default TutorCart;
