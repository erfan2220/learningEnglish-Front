"use client";
import React from "react";
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

const AuthorizationPage7 = () => {
  const btnTrigger = false;

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
            <Link
              href={"/tutorAuthentication/step7"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={priceIconWhite}
                  alt="price icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
          </div>
        </div>
        {/* ======================================================================== */}
        <div className=" flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">Pricing</h1>
          <p>
            Add your available lesson types, durations, and prices. You can also
            offer trial lessons and discounts for lesson packages. This helps
            students choose the best option for their goals and budget.
          </p>

          {/* ================================= */}

          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Link href={"/tutorAuthentication/step6"}>
              <Button type="submit" label={"Back"} btnIcon={null} />
            </Link>

            <Button type="submit" label={"Next Step"} disabled={!btnTrigger} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage7;
