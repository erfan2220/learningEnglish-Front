//@ts-nocheck
import React from "react";

import Country from "../Country/Country";
import Link from "next/link";
import Button from "../Button/Button";
import { Tutor } from "@/model/tutorType";
import dynamic from "next/dynamic";

interface TutorCartProps {
  tutorData: Tutor;
}

const TutorCart = ({ tutorData }: TutorCartProps) => {
  const VideoPlayer = dynamic(() => import("../VideoPlayer/VideoPlayer"), {
    ssr: false,
  });
  return (
    <div className="bg-[#F1ECFE] rounded-2xl border-2 border-[#D2D2D2] shadow-md p-4 h-[420px]">
      <div className="relative">
        <div className="w-full  mx-auto">
          <VideoPlayer src={tutorData.intro_video_file} />
        </div>
        <div className="text-xl text-[#5C5A60] font-bold">
          {tutorData.user.first_name} {tutorData.user.last_name}
        </div>
        <div className="text-sm text-[#8B8A8E] mb-4">Professional Tutor</div>

        <div className="flex flex-wrap gap-4">
          {tutorData.languages_spoken.map((lang, index) => (
            <div key={index}>
              <Country
                countryName={lang}
                width={20}
                textSize={"14px"}
                fontWeight={"bold"}
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="font-semibold text-[#5C5A60] text-sm">Price</p>
          <div className="font-bold text-lg text-[#45444A]">
            <p>
              {"Toman"} {"0000"}
            </p>
          </div>
        </div>

        
      </div>
      <Link href={`/tutor/detail/${tutorData.id}`} className="absolute bottom-6 left-2 right-2">
          <Button type="button" label={"book now"} widthBtn="100%" />
        </Link>
    </div>
  );
};

export default TutorCart;
