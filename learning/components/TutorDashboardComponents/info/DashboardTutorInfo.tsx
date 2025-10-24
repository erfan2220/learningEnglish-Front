"use client";

import React, { useState } from "react";

import Inputs from "@/components/Common/Input/Input";

import Image from "next/image";

import Button from "@/components/Common/Button/Button";
import { countryList } from "@/mock/countryList";


const userIcon = "/icons/userIconGray.svg";
const emailIcon = "/icons/emailGray.svg";
const countryIcon = "/icons/locationGray.svg";
const phoneIcon = "/icons/phoneGray.svg";
const passwordIcon = "/icons/passwordIconGray.svg";
const editIcon = "/icons/penDash.svg";
const subjectIcon = "/icons/educationGray.svg";
const languageIcon = "/icons/languageGray.svg";
const levelIcon = "/icons/levelIconGray.svg";
const binIcon = "/icons/binGray.svg";
const profilePhoto = "/icons/profilePhoto.svg";


const DashboardTutorInfo = () => {
  const [imagePreview, setImagePreview] = useState(profilePhoto);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const [entries, setEntries] = useState([{ language: "", level: "" }]);

  const handleAdd = () => {
    setEntries([...entries, { language: "", level: "" }]);
  };

  const handleRemove = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleChange = (
    index: number,
    field: "language" | "level",
    value: string
  ) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);
    setSelectedVideo(videoURL);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const toggleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="my-8 px-1 md:px-2 lg:px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
          {/* <img
            src={imagePreview}
            alt="imagePreview"
            className="w-[120px] h-[120px] object-cover"
          /> */}
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
              value={firstName}
              onchange={(e) => setFirstName(e.target.value)}
            />

            <Inputs
              type="text"
              placeholder="Last Name"
              label="Last Name"
              width="80%"
              inputIcon={userIcon}
              value={lastName}
              onchange={(e) => setLastName(e.target.value)}
            />

            <Inputs
              type="email"
              placeholder="Email"
              label="Email"
              width="80%"
              inputIcon={emailIcon}
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />

            <Inputs
              type="text"
              placeholder="Phone Number"
              label="Phone Number"
              width="80%"
              inputIcon={phoneIcon}
              value={phoneNumber}
              onchange={(e) => setPhoneNumber(e.target.value)}
            />

            <div className="w-[80%]">
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
                {/* <img
                  src={"/icons/locationGray.svg"}
                  alt="countryIcon"
                  className="w-5 h-5 absolute top-[12px] left-4 cursor-pointer"
                /> */}

                <Image
                  src={countryIcon}
                  alt="language icon"
                  width={20}
                  height={20}
                  className="absolute top-[12px] left-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="w-[80%]">
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
                {/* <img
                  src={"/icons/educationGray.svg"}
                  alt="subjectIcon"
                  className="w-5 h-5 absolute top-[12px] left-4 cursor-pointer"
                /> */}

                <Image
                  src={subjectIcon}
                  alt="language icon"
                  width={20}
                  height={20}
                  className="absolute top-[12px] left-4 cursor-pointer"
                />
              </div>
            </div>
            {/* ////////////////////////////////////////////////// */}
            <div className="flex flex-col gap-2">
              {entries.map((entry, index) => (
                <div key={index} className="flex w-full items-center gap-2">
                  {/* Language + Level Group */}
                  <div className="flex flex-col sm:flex-row w-[90%] sm:w-[80%] gap-2">
                    {/* Language */}
                    <div className="w-full sm:w-1/2">
                      <label className="text-xs mx-2 mt-2 text-[#45444A]">
                        Language you speak
                      </label>
                      <div className="relative">
                        <select
                          className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                          value={entry.language}
                          onChange={(e) =>
                            handleChange(index, "language", e.target.value)
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
                        {/* <img
                          src={"/icons/languageGray.svg"}
                          alt="languageIcon"
                          className="w-5 h-5 absolute top-[12px] left-4 cursor-pointer"
                        /> */}

                        <Image
                          src={languageIcon}
                          alt="language icon"
                          width={20}
                          height={20}
                          className="absolute top-[12px] left-4 cursor-pointer"
                        />
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
                          value={entry.level}
                          onChange={(e) =>
                            handleChange(index, "level", e.target.value)
                          }
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
                        {/* <img
                          src={"/icons/levelIconGray.svg"}
                          alt="levelIcon"
                          className="w-5 h-5 absolute top-[12px] left-4 cursor-pointer"
                        /> */}

                        <Image
                          src={levelIcon}
                          alt="level icon"
                          width={20}
                          height={20}
                          className="absolute top-[12px] left-4 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delete icon */}
                  <div className="mt-5">
                    {/* <img
                      src={"/icons/binGray.svg"}
                      alt="binIcon"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleRemove(index)}
                    /> */}

                    <Image
                      src={binIcon}
                      alt="bin"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                      onClick={() => handleRemove(index)}
                    />
                  </div>
                </div>
              ))}

              {/* Add Button */}
              <p
                className="text-[#45444A] font-bold underline hover:cursor-pointer"
                onClick={handleAdd}
              >
                + Add Language
              </p>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Introduction Video
          </div>

          <div className="w-full mt-4 flex flex-col gap-1 md:w-2/3">
            <div className="w-[80%] ">
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

            <div className="mt-4 w-[80%]">
              <p>
                Record a 1–3 minute video of yourself in landscape mode,
                introducing who you are, your teaching style, and what students
                can expect from your lessons.
              </p>
              <div className="my-4">
                Make sure:
                <ul className="list-disc ml-6">
                  <li>Your face is clearly visible</li>
                  <li>Your voice is loud and clear</li>
                  <li>You record in a quiet and well-lit space</li>
                  <li>
                    Speak in the language you plan to teach, so students can
                    hear your accent and speaking style
                  </li>
                </ul>
              </div>
              <p>
                This video helps students get to know you and feel more
                comfortable booking a lesson!
              </p>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}

        <div className="flex flex-col md:flex-row text-[#45444A] mt-14">
          <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
            Account Settings
          </div>

          <div className="w-full flex flex-col gap-2 md:w-2/3">
            <div className="flex flex-col gap-1">
              <label className="mx-2 text-xs text-[#5C5A60] ">Password</label>
              <div className="flex gap-2 items-center">
                <div className="relative w-[80%]">
                  <input
                    type="password"
                    placeholder="*********"
                    disabled={isDisabled}
                    className="bg-white/80 text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-12 py-2 text-sm h-11 focus:outline-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <img
                    src={"/icons/passwordIconGray.svg"}
                    alt="passwordIcon"
                    className="w-6 h-6 absolute top-[20px] left-5 -translate-y-1/2"
                  /> */}

                  <Image
                    src={passwordIcon}
                    alt="pass icon"
                    width={24}
                    height={24}
                    className="absolute top-[20px] left-5 -translate-y-1/2"
                  />
                </div>
                {/* <img
                  src={"/icons/penDash.svg"}
                  alt="editIcon"
                  className="w-7 h-7 cursor-pointer mx-2"
                  onClick={toggleEdit}
                /> */}

                <Image
                  src={editIcon}
                  alt="edit icon"
                  width={28}
                  height={28}
                  className="cursor-pointer mx-2"
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
