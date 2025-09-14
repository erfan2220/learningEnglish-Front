"use client";
import React, { useEffect, useState } from "react";
import aboutIconWhite from "../../../assets/icons/aboutIconWhite.svg";
import photoIconWhite from "../../../assets/icons/photoIconWhite.svg";
import certificateIconWhite from "../../../assets/icons/certificateIconWhite.svg";
import educationWhite from "../../../assets/icons/educationWhite.svg";
import descriptionIconWhite from "../../../assets/icons/descriptionIconWhite.svg";
import videoIconWhite from "../../../assets/icons/videoIconWhite.svg";
import priceIconWhite from "../../../assets/icons/priceIconWhite.svg";
import Image from "next/image";
import Link from "next/link";
import Inputs from "@/components/Input/Input";
import countryIcon from "./../../../assets/icons/locationGray.svg";
import phoneIcon from "./../../../assets/icons/phoneGray.svg";
import subjectIcon from "./../../../assets/icons/educationGray.svg";
import languageIcon from "./../../../assets/icons/languageGray.svg";
import levelIcon from "./../../../assets/icons/levelIconGray.svg";
import binIcon from "./../../../assets/icons/binGray.svg";
import userIcon from "../../../assets/icons/userIconGray.svg";

import Button from "@/components/Button/Button";
import { countryList } from "@/mock/countryList";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

const AuthorizationPage1 = () => {
  const [firstName, setFirstName] = useState(
    typeof window !== "undefined" ? localStorage.getItem("firstName") || "" : ""
  );
  const [lastName, setLastName] = useState(
    typeof window !== "undefined" ? localStorage.getItem("lastName") || "" : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("phoneNumber") || ""
      : ""
  );
  const [selectedCountry, setSelectedCountry] = useState(
    typeof window !== "undefined" ? localStorage.getItem("country") || "" : ""
  );
  const [selectedSubject, setSelectedSubject] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("subjectTeach") || ""
      : ""
  );

  // تغییر: فقط زبان‌ها را ذخیره می‌کنیم نه سطح‌ها
  const [languages, setLanguages] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const savedLanguages = localStorage.getItem("languages");
      return savedLanguages ? JSON.parse(savedLanguages) : [""];
    }
    return [""];
  });

  const router = useRouter();

  const btnTrigger =
    firstName !== "" &&
    lastName !== "" &&
    phoneNumber !== "" &&
    selectedCountry !== "" &&
    selectedSubject !== "" &&
    languages.every((lang) => lang !== "");

  const handleAddLanguage = () => {
    setLanguages([...languages, ""]);
  };

  const handleRemoveLanguage = (index: number) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("country", selectedCountry);
      localStorage.setItem("subjectTeach", selectedSubject);
      localStorage.setItem("languages", JSON.stringify(languages));
    }
  }, [
    firstName,
    lastName,
    phoneNumber,
    selectedCountry,
    selectedSubject,
    languages,
  ]);

  return (
    <div className="py-2 pt-6 md:py-12">
      {/* ====================header section==================== */}
      <div className="mt-[60px]">
        {/* =====start stepper===== */}
        <div className="w-full bg-white/70 shadow-md h-28 flex flex-col gap-0.5 sm:gap-1 justify-center items-center">
          <div className="flex gap-0.5 sm:gap-1 px-2 sm:px-4 justify-center items-center max-w-[1320px] mx-auto w-full">
            {/* ===step1==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep1}
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
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step2==== */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={photoIconWhite}
                  alt="photo icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
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
        <div className="flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">About</h1>
          <p>
            Tell learners about yourself and start building your public tutor
            profile. Your progress is saved as you go, so feel free to return
            anytime to continue.
          </p>
          {/* ========================================= */}
          <form className="w-full flex flex-col">
            <div className="w-full flex flex-col text-[#45444A]">
              <div className="w-full flex flex-col gap-1 ">
                <Inputs
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                  width="100%"
                  inputIcon={userIcon}
                  value={firstName}
                  onchange={(e) => setFirstName(e.target.value)}
                />

                <Inputs
                  type="text"
                  placeholder="Last Name"
                  label="Last Name"
                  width="100%"
                  inputIcon={userIcon}
                  value={lastName}
                  onchange={(e) => setLastName(e.target.value)}
                />

                <Inputs
                  type="text"
                  placeholder="Phone Number"
                  label="Phone Number"
                  width="100%"
                  inputIcon={phoneIcon}
                  value={phoneNumber}
                  onchange={(e) => setPhoneNumber(e.target.value)}
                />

                <div className="w-full">
                  <label className="text-xs mx-2 mt-2 text-[#45444A]">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option disabled defaultValue={"-country-"} value="">
                        Country
                      </option>
                      {countryList.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <Image
                      src={countryIcon}
                      alt="country icon"
                      width={20}
                      height={20}
                      className="absolute top-[12px] left-4 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="text-xs mx-2 mt-2 text-[#45444A]">
                    Subject you teach
                  </label>
                  <div className="relative">
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option disabled defaultValue={"-subject-"} value="">
                        subject
                      </option>
                      <option value="Chinese">Chinese</option>
                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="Persian">Persian</option>
                    </select>
                    <Image
                      src={subjectIcon}
                      alt="subject icon"
                      width={20}
                      height={20}
                      className="absolute top-[12px] left-4 cursor-pointer"
                    />
                  </div>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div className="flex flex-col gap-2">
                  {languages.map((language, index) => (
                    <div key={index} className="flex w-full items-center gap-2">
                      {/* Language Input */}
                      <div className="flex flex-row w-[95%] sm:w-[95%] gap-2">
                        <div className="w-full">
                          <label className="text-xs mx-2 mt-2 text-[#45444A]">
                            Language you speak
                          </label>
                          <div className="relative">
                            <select
                              className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                              value={language}
                              onChange={(e) =>
                                handleLanguageChange(index, e.target.value)
                              }
                            >
                              <option disabled value="">
                                languages
                              </option>
                              <option value="Arabic">Arabic</option>
                              <option value="Chinese">Chinese</option>
                              <option value="Dutch">Dutch</option>
                              <option value="English">English</option>
                              <option value="French">French</option>
                              <option value="German">German</option>
                              <option value="Persian">Persian</option>
                              <option value="Russian">Russian</option>
                              <option value="Spanish">Spanish</option>
                            </select>
                            <Image
                              src={languageIcon}
                              alt="language icon"
                              width={20}
                              height={20}
                              className="absolute top-[12px] left-4 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Level */}
                      <div className="w-full sm:w-1/2">
                        <label className="text-xs mx-2 mt-2 text-[#45444A]">
                          Level
                        </label>
                        <div className="relative">
                          <select
                            className="border-2 w-full text-sm border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 h-11 focus:outline-0"
                            // value={entry.level}
                            // onChange={(e) =>
                            //   handleChange(index, "level", e.target.value)
                            // }
                          >
                            <option disabled value="">
                              Level
                            </option>
                            <option value="native">native</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                          </select>
                          <Image
                            src={levelIcon}
                            alt="level icon"
                            width={20}
                            height={20}
                            className="absolute top-[12px] left-4 cursor-pointer"
                          />
                        </div>
                      </div>

                      {languages.length > 1 && (
                        <div className="mt-5">
                          <Image
                            src={binIcon}
                            alt="bin"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                            onClick={() => handleRemoveLanguage(index)}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add Button */}
                  <p
                    className="text-[#45444A] font-bold underline hover:cursor-pointer"
                    onClick={handleAddLanguage}
                  >
                    + Add Language
                  </p>
                </div>
              </div>
            </div>
          </form>
          {/* /////////////////////////////////////////////////////////// */}
          <div className="flex items-center justify-end w-full mt-8">
            <Button
              type="submit"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={() =>
                router.push(FluentDoorRoutes.tutorAuthenticationStep2)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage1;
