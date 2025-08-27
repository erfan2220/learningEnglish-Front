"use client";
import React, { useState } from "react";
import aboutIconWhite from "../../../assets/icons/aboutIconWhite.svg";
import photoIconWhite from "../../../assets/icons/photoIconWhite.svg";
import certificateIconWhite from "../../../assets/icons/certificateIconWhite.svg";
import educationWhite from "../../../assets/icons/educationWhite.svg";
import descriptionIconWhite from "../../../assets/icons/descriptionIconWhite.svg";
import videoIconWhite from "../../../assets/icons/videoIconWhite.svg";
import priceIconWhite from "../../../assets/icons/priceIconWhite.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const AuthorizationPage6 = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const btnTrigger = selectedVideo !== null;
  const router = useRouter();

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);
    setSelectedVideo(videoURL);
  };

  return (
    <div className="py-2 pt-6 md:py-12">
      {/* ====================header section==================== */}
      <div className="mt-[60px]">
        {/* =====start stepper===== */}
        <div className="w-full bg-white/70 shadow-md h-28 flex flex-col gap-0.5 sm:gap-1 justify-center items-center">
          <div className="flex gap-0.5 sm:gap-1 px-2 sm:px-4 justify-center items-center max-w-[1320px] mx-auto w-full">
            {/* ===step1==== */}
            <Link
              href={"/tutorAuthentication/step1"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b flex items-center justify-center from-[#B49AFF] to-[#FF9AAB] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={aboutIconWhite}
                  alt="about icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
              {/* <p className="hidden sm:block text-[#45444A] text-sm font-semibold ">
                About
              </p> */}
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step2==== */}
            <Link
              href={"/tutorAuthentication/step2"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={photoIconWhite}
                  alt="photo icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
              {/* <p className="hidden sm:block text-[#45444A] text-sm font-semibold ">
                Photo
              </p> */}
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step3==== */}
            <Link
              href={"/tutorAuthentication/step3"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={certificateIconWhite}
                  alt="certificate icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step4==== */}
            <Link
              href={"/tutorAuthentication/step4"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={educationWhite}
                  alt="education icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step5==== */}
            <Link
              href={"/tutorAuthentication/step5"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={descriptionIconWhite}
                  alt="description icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step6==== */}
            <Link
              href={"/tutorAuthentication/step6"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={videoIconWhite}
                  alt="video icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step7==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={priceIconWhite}
                  alt="price icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
          </div>
        </div>
        {/* ======================================================================== */}
        <div className=" flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">
            Introduce Yourself with a Short Video
          </h1>
          <p>
            Record a 1–3 minute video of yourself in landscape mode, introducing
            who you are, your teaching style, and what students can expect from
            your lessons.
          </p>
          <p>Make sure:</p>
          <ul className="list-disc pl-7 -mt-3">
            <li>Your face is clearly visible</li>
            <li>Your voice is loud and clear</li>
            <li>You record in a quiet and well-lit space</li>
            <li>
              Speak in the language you plan to teach, so students can hear your
              accent and speaking style
            </li>
          </ul>

          <p>
            This video helps students get to know you and feel more comfortable
            booking a lesson!
          </p>

          <div className="w-full flex flex-col gap-1">
            <div className="w-full ">
              {selectedVideo && (
                <video controls className="w-full rounded-lg shadow-md">
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <label className="cursor-pointer text-blue-600 underline inline-block mt-2">
                Upload a Video
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* ================================= */}

          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="submit"
              label={"Back"}
              btnIcon={null}
              onclick={() => router.push("/tutorAuthentication/step5")}
            />

            <Button
              type="submit"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={() => router.push("/tutorAuthentication/step7")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage6;
