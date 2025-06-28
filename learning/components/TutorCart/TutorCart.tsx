import { TutorData } from "@/model/types";
import React from "react";
import Image from "next/image";
import Country from "../Country/Country";
import Link from "next/link";
import Button from "../Button/Button";

const TutorCart = ({ tutorData }: { tutorData: TutorData }) => {
  return (
    <div className="bg-[#F1ECFE] rounded-2xl border-2 border-[#D2D2D2] shadow-md p-4">
      <Link href={`/tutor/detail/${tutorData.id}`}>
        <div className="w-full mb-4">
          <Image
            src={tutorData.introduceVideo}
            alt={tutorData.name}
            width={320}
            height={120}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="text-xl text-[#5C5A60] font-bold">{tutorData.name}</div>
        <div className="text-sm text-[#8B8A8E] mb-4">{tutorData.role}</div>

        <div className="flex flex-wrap gap-4">
          {tutorData.speaks.map((lang, index) => (
            <Country
              key={index}
              flag={lang.flag}
              countryName={lang.language}
              width={20}
              textSize={"14px"}
            />
          ))}
        </div>
        <div className="mt-6">
          <p className="font-semibold text-[#5C5A60] text-sm">Price</p>
          <p className="font-bold text-lg text-[#45444A]">{tutorData.price}</p>
        </div>

        <Button type="button" label={"try now"} widthBtn="100%" />
      </Link>
    </div>
  );
};

export default TutorCart;
