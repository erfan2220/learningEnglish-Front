"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Inputs from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { countryList } from "@/mock/countryList";
import { useRouter } from "next/navigation";


// ✅ icons served from /public/icons
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const instituteIcon = "/icons/institutionGray.svg";
const locationIcon = "/icons/locationGray.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";
const dateIcon = "/icons/dayIcon.svg";
const degreeIcon = "/icons/degreeGray.svg";
const fieldIcon = "/icons/educationGray.svg";



const AuthorizationPage4 = () => {
  const router = useRouter();
  const [educations, setEducations] = useState([
    {
      degree: "",
      institution: "",
      country: "",
      city: "",
      field: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const btnTrigger = educations.every(
    (education) =>
      education.degree !== "" &&
      education.institution !== "" &&
      education.country !== "" &&
      education.city !== "" &&
      education.field !== "" &&
      education.startDate !== "" &&
      education.endDate !== ""
  );

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        degree: "",
        institution: "",
        country: "",
        city: "",
        field: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
  };

  const handleChange = (
    index: number,
    field:
      | "degree"
      | "institution"
      | "country"
      | "city"
      | "field"
      | "startDate"
      | "endDate",
    value: string
  ) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Final Education Data:", educations);
    //api
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
        <div className=" flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">Education</h1>
          <p>
            Mention your academic degrees to show students your expertise and
            qualifications.
          </p>

          {/* ================================= */}
          <form onSubmit={handleSubmit} className="w-full">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-3 mb-4 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
              >
                {/* delete education  */}
                {educations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="absolute top-0 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                  >
                    Delete Education
                  </button>
                )}

                <div className="w-full">
                  <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                    Latest Degree
                  </label>
                  <div className="relative w-full">
                    <select
                      name="selectDegree"
                      value={edu.degree}
                      onChange={(e) =>
                        handleChange(index, "degree", e.target.value)
                      }
                      className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option disabled value="">
                        Degree
                      </option>
                      <option value="Pre-Diploma">Pre-Diploma</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's Degree">
                        {"Bachelor's Degree"}
                      </option>
                      <option value="Master's Degree">
                        {"Master's Degree"}
                      </option>
                      <option value="Doctor of Philosophy">PhD</option>
                      <option value="General Medical Doctor">
                        Medical Doctor
                      </option>
                      <option value="Specialist Medical Degree">
                        Specialist Degree
                      </option>
                    </select>
                    {/* <img
                      src={"/icons/degreeGray.svg"}
                      alt="degreeIcon"
                      className="w-6 h-6 absolute top-[20px] left-4 -translate-y-1/2"
                    /> */}
                    <Image
                      src={degreeIcon}
                      alt="degree icon"
                      width={24}
                      height={24}
                      className="absolute top-[20px] left-4 -translate-y-1/2"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Inputs
                    placeholder="Institution Name"
                    type="text"
                    inputIcon={degreeIcon}
                    label="Institution Name"
                    value={edu.institution}
                    onchange={(e) =>
                      handleChange(index, "institution", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full">
                  <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                    Institution Country
                  </label>
                  <div className="relative w-full">
                    <select
                      name="selectCountry"
                      value={edu.degree}
                      onChange={(e) =>
                        handleChange(index, "country", e.target.value)
                      }
                      className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option disabled value="">
                        --select country--
                      </option>
                      {countryList.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    <Image
                      src={locationIcon}
                      alt="country icon"
                      width={24}
                      height={24}
                      className="absolute top-[20px] left-4 -translate-y-1/2"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Inputs
                    placeholder="Institution City"
                    type="text"
                    inputIcon={instituteIcon}
                    label="Institution City"
                    value={edu.city}
                    onchange={(e) =>
                      handleChange(index, "city", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full">
                  <Inputs
                    placeholder="Field of Study"
                    type="text"
                    inputIcon={fieldIcon}
                    label="Field of Study"
                    value={edu.field}
                    onchange={(e) =>
                      handleChange(index, "field", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full">
                  <Inputs
                    placeholder="Start Date"
                    type="date"
                    inputIcon={dateIcon}
                    label="Start Date"
                    value={edu.startDate}
                    onchange={(e) =>
                      handleChange(index, "startDate", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full">
                  <Inputs
                    placeholder="End Date"
                    type="date"
                    inputIcon={dateIcon}
                    label="End Date"
                    value={edu.endDate}
                    onchange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                    width="100%"
                  />
                </div>
              </div>
            ))}

            {/* add new edu   */}
            <p
              className="text-[#45444A] font-bold underline hover:cursor-pointer flex sm:items-center sm:justify-center mt-4"
              onClick={handleAddEducation}
            >
              + Add Education
            </p>
          </form>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="submit"
              label={"Back"}
              btnIcon={null}
              onclick={() => router.push("/tutorAuthentication/step3")}
            />

            <Button
              type="submit"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={() => router.push("/tutorAuthentication/step5")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage4;
