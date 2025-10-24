// components/TutorCart/TutorCart.tsx
import React from "react";
import Link from "next/link";
import { Tutor } from "@/model/tutorType";
import dynamic from "next/dynamic";
import { FluentDoorRoutes } from "@/routes/routes";
import Country from "@/components/Common/Country/Country";
import Button from "@/components/Common/Button/Button";

interface TutorCartProps {
  tutorData: Tutor;
}

const TutorCart = ({ tutorData }: TutorCartProps) => {
  const VideoPlayer = dynamic(() => import("../../VideoPlayer/VideoPlayer"), {
    ssr: false,
  });

  const fullName =
    `${tutorData.user.first_name} ${tutorData.user.last_name}`.trim();
  const mp4Src =
    tutorData.intro_video_file && tutorData.intro_video_file.trim() !== ""
      ? tutorData.intro_video_file
      : null;

  return (
    <div className="relative bg-[#F1ECFE] rounded-2xl border-2 border-[#D2D2D2] shadow-md p-4 h-[420px]">
      <div>
        {mp4Src ? (
          <div className="w-full mx-auto">
            <VideoPlayer src={mp4Src} />
          </div>
        ) : (
          <div className="w-full h-40 rounded-lg bg-white/60 grid place-items-center text-sm text-[#8B8A8E]">
            No intro video
          </div>
        )}

        <div className="text-xl text-[#5C5A60] font-bold mt-2">{fullName}</div>
        <div className="text-sm text-[#8B8A8E] mb-4">Professional Tutor</div>

        <div className="flex flex-wrap gap-4">
          {tutorData.languages_spoken.map((lang) => (
            <div key={`${tutorData.id}-${lang}`}>
              <Country
                countryName={lang}
                width={20}
                textSize="14px"
                fontWeight="bold"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="font-semibold text-[#5C5A60] text-sm">Price</p>
          <div className="font-bold text-lg text-[#45444A]">
            <p>Toman 0000</p>
          </div>
        </div>
      </div>

      <Link
        href={`${FluentDoorRoutes.tutorDetail}/${tutorData.id}`}
        className="absolute bottom-6 left-2 right-2"
      >
        <Button type="button" label="book now" widthBtn="100%" />
      </Link>
    </div>
  );
};

export default TutorCart;
