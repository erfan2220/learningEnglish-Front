"use client";

import React, { useState } from "react";
import Image from "next/image";
import profilePhoto from "../../../assets/icons/profilePhoto.svg";
import Inputs from "@/components/Input/Input";
import userIcon from "../../../assets/icons/userIconGray.svg";
import emailIcon from "../../../assets/icons/emailGray.svg";
import countryIcon from "../../../assets/icons/locationGray.svg";
import phoneIcon from "../../../assets/icons/phoneGray.svg";
import studyIcon from "../../../assets/icons/educationGray.svg";
import institutionIcon from "../../../assets/icons/institutionGray.svg";
import passwordIcon from "../../../assets/icons/passwordIconGray.svg";
import editIcon from "../../../assets/icons/penDash.svg";
import degreeIcon from "../../../assets/icons/degreeGray.svg";
import subjectIcon from "../../../assets/icons/educationGray.svg";
import languageIcon from "../../../assets/icons/languageGray.svg";
import levelIcon from "../../../assets/icons/levelIconGray.svg";

import Button from "@/components/Button/Button";
import { countryList } from "@/mock/countryList";

const DashboardTutorInfo = () => {
  const [imagePreview, setImagePreview] = useState(profilePhoto);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  // const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const toggleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="my-8 px-1 md:px-2 lg:px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={imagePreview}
            alt="profile photo"
            width={120}
            height={120}
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
      {/* ///////////////////////////////////////////// */}
      <form>
        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Personal Information
          </div>
          <div className="w-full flex flex-col gap-1 md:w-2/3">
            <Inputs
              type="text"
              placeholder="First Name"
              label="First Name"
              width="80%"
              inputIcon={userIcon}
            />

            <Inputs
              type="text"
              placeholder="Last Name"
              label="Last Name"
              width="80%"
              inputIcon={userIcon}
            />

            <Inputs
              type="email"
              placeholder="Email"
              label="Email"
              width="80%"
              inputIcon={emailIcon}
            />

            <Inputs
              type="text"
              placeholder="Phone Number"
              label="Phone Number"
              width="80%"
              inputIcon={phoneIcon}
            />
            {/* ////////////////////////////////////////////////// */}
            <div className="flex flex-col w-[80%]">
              <label className="text-xs mx-2 mt-2 text-[#45444A]">
                Country
              </label>
              <div className="flex relative w-full">
                <select
                  className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option disabled value={""}>
                    --select--
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
            {/* //////////////////////////////////////////////// */}
            <div className="flex flex-col w-[80%]">
              <label className="text-xs mx-2 mt-2 text-[#45444A]">
                Subject you teach
              </label>
              <div className="flex relative w-full">
                <select
                  className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                  value={selectedCountry}
                  onChange={handleChange}
                >
                  <option disabled value={""}>
                    --select--
                  </option>
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

            {/* //////////////////////////////////////////////// */}
            <div className="flex flex-row w-[80%]">
              <div>
                <label className="text-xs mx-2 mt-2 text-[#45444A]">
                  Language you speak
                </label>
                <div className="flex relative w-full">
                  <select className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0">
                    <option>languages</option>
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese (中文)</option>
                    <option value="zh-HK">Chinese Hong Kong - (中文)</option>
                    <option value="zh-CN">
                      Chinese Simplified - (中文简体)
                    </option>
                    <option value="zh-TW">
                      Chinese Traditional - (中文繁體)
                    </option>
                    <option value="nl">Dutch (Nederlands)</option>
                    <option value="en">English</option>
                    <option value="en-IN">English (India)</option>
                    <option value="en-ZA">English (South Africa)</option>
                    <option value="en-GB">English (United Kingdom)</option>
                    <option value="en-US">English (United States)</option>
                    <option value="fr">French (Français)</option>
                    <option value="de">German - (Deutsch)</option>
                    <option value="fa">Persian - (فارسی)</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish - (Español)</option>
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
              <div>
                <label className="text-xs mx-2 mt-2 text-[#45444A]">
                  Level
                </label>
                <div className="flex relative w-full">
                  <select className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0">
                    <option>Level</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="native">native</option>
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
              <div></div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Latest Degree
          </div>

          <div className="w-full flex flex-col gap-1 md:w-2/3">
            <div className="flex flex-col gap-1">
              <label className="text-[#5C5A60] mx-2 text-sm ">
                Latest Degree
              </label>
              <div className="relative w-[80%]">
                <select
                  name="selectDegree"
                  className="text-[#5C5A60] mx-2 w-full border-2  border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                >
                  <option disabled selected value="Degree">{`Degree`}</option>
                  <option value="Pre-Diploma">{`Pre-Diploma`}</option>
                  <option value="Diploma">{`Diploma`}</option>
                  <option value="Bachelor's Degree">{`Bachelor's Degree`}</option>
                  <option value="Master's Degree">{`Master's Degree`}</option>
                  <option value="Doctor of Philosophy">{`Doctor of Philosophy`}</option>
                  <option value="General Medical Doctor">{`General Medical Doctor`}</option>
                  <option value="Specialist Medical Degree">{`Specialist Medical Degree`}</option>
                </select>

                <Image
                  src={degreeIcon}
                  alt="degree icon"
                  width={24}
                  height={24}
                  className="absolute top-[20px] left-4 -translate-y-1/2"
                />
              </div>
            </div>

            <Inputs
              type="text"
              placeholder="Institution Name"
              label="Institution Name"
              width="80%"
              inputIcon={institutionIcon}
            />

            <Inputs
              type="text"
              placeholder="Location"
              label="Location"
              width="80%"
              inputIcon={countryIcon}
            />

            <Inputs
              type="text"
              placeholder="Field of Study"
              label="Field of Study"
              width="80%"
              inputIcon={studyIcon}
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}

        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Account Settings
          </div>

          <div className="w-full flex flex-col gap-1 md:w-2/3">
            <div className="flex flex-col gap-1">
              <label className="mx-2 text-xs text-[#5C5A60] ">Password</label>
              <div className="flex gap-2 items-center">
                <div className="relative w-[80%]">
                  <input
                    type="password"
                    placeholder="*********"
                    disabled={isDisabled}
                    className="bg-white/80 mx-2 text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-12 py-2 text-sm h-11 focus:outline-0"
                  />
                  <Image
                    src={passwordIcon}
                    alt="pass icon"
                    width={24}
                    height={24}
                    className="absolute top-[20px] left-5 -translate-y-1/2"
                  />
                </div>
                <Image
                  src={editIcon}
                  alt="edit icon"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                  onClick={toggleEdit}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button type="submit" label={"update information"} />
        </div>
      </form>
    </div>
  );
};

export default DashboardTutorInfo;
