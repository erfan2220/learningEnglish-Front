"use client";
import React, { useState } from "react";
import profilePhoto from "./../../../assets/icons/profilePhoto.svg";
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

const AuthorizationPage2 = () => {
  const [imagePreview, setImagePreview] = useState(profilePhoto);

  const btnTrigger =
    imagePreview !== profilePhoto && imagePreview !== "";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
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
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={certificateIconWhite}
                  alt="certificate icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step4==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={educationWhite}
                  alt="education icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step5==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={descriptionIconWhite}
                  alt="description icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step6==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={videoIconWhite}
                  alt="video icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
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
        <div className="flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">About</h1>
          <p>
            To help students recognize and connect with you, upload a clear and
            friendly photo.
          </p>
          <div>
            <p>Your photo should:</p>
            <ul className="list-disc pl-7">
              <li>Show only you (no other people)</li>
              <li>
                Be taken from a proper distance (not too close or too far)
              </li>
              <li>Clearly show your eyes and full face</li>
              <li>Be well-lit and high quality</li>
              <li>Look warm, friendly, and professional</li>
            </ul>
          </div>

          {/* ================================= */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-gray-300">
              {/* <img
                src={imagePreview}
                alt="imagePreview"
                className="w-[120px] h-[120px] object-cover"
              /> */}

              <Image
                src={imagePreview}
                alt="profile photo"
                width={180}
                height={180}
                className="object-cover"
              />
            </div>

            <label className="cursor-pointer text-blue-600 underline">
              Upload photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Link href={"/tutorAuthentication/step1"}>
              <Button type="submit" label={"Back"} btnIcon={null}/>
            </Link>
            <Link href={"/tutorAuthentication/step3"}>
              <Button type="submit" label={"Next Step"} disabled={!btnTrigger}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage2;
