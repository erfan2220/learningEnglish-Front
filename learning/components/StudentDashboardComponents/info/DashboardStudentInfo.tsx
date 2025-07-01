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

import Button from "@/components/Button/Button";

const DashboardStudentInfo = () => {
  const [imagePreview, setImagePreview] = useState(profilePhoto);

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
      <div className="flex flex-col justify-center items-center space-y-2">
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
              placeholder="Country"
              label="Country"
              width="80%"
              inputIcon={countryIcon}
            />

            <Inputs
              type="text"
              placeholder="Phone Number"
              label="Phone Number"
              width="80%"
              inputIcon={phoneIcon}
            />
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Latest Degree
          </div>

          <div className="w-full flex flex-col gap-1 md:w-2/3">
            <div className="flex flex-col gap-1">
              <label className="text-[#5C5A60] text-sm ">Latest Degree</label>
              <div className="relative w-[80%]">
                <select
                  name="selectDegree"
                  className="text-[#5C5A60] w-full border-2  border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                >
                  <option disabled selected>{`Degree`}</option>
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
              <label className="text-xs text-[#5C5A60] ">Password</label>
              <div className="flex gap-2 items-center">
                <div className="relative w-[80%]">
                  <input
                    type="password"
                    placeholder="*********"
                    disabled={isDisabled}
                    className="bg-white/80 text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-12 py-2 text-sm h-11 focus:outline-0"
                  />
                  <Image
                    src={passwordIcon}
                    alt="pass icon"
                    width={24}
                    height={24}
                    className="absolute top-[20px] left-4 -translate-y-1/2"
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

export default DashboardStudentInfo;
