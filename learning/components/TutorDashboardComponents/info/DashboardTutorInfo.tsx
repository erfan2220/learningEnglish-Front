"use client";

import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Image from "next/image";
import Button from "@/components/Common/Button/Button";
import { countryList } from "@/mock/countryList";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";
import { User } from "@/model/types";
import { BeatLoader } from "react-spinners";

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
  const [me, setMe] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const [tutorId, setTutorId] = useState<number | null>(null);
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

  // گرفتن اطلاعات کاربر
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get(`/api/me`);
        setMe(res.data);
      } catch (error) {
        console.error("Fetching me failed:", error);
        toast.error("Failed to fetch me. Please try again later.");
      }
    };
    fetchMe();
  }, []);

  useEffect(() => {
    if (!me?.id) return;

    const fetchTutorInfo = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/api/tutors/?user=${me.id}`);
        const tutor = res.data[0];
        if (!tutor) return;
        setTutorId(tutor.id);
        console.log("tutorId", tutor.id);
        // image
        if (tutor.profile_picture) {
          setImagePreview(tutor.profile_picture);
        }

        // user fields
        setFirstName(tutor.user?.first_name || "");
        setLastName(tutor.user?.last_name || "");
        setEmail(tutor.user?.email || "");

        // phone
        setPhoneNumber(tutor.phone_number || "");

        // country
        setSelectedCountry(tutor.country || "");

        // subject (first one only)
        setSelectedSubject(tutor.subjects?.[0] || "");

        // video
        setSelectedVideo(tutor.intro_video_file || null);

        // languages_spoken
        if (tutor.languages_spoken?.length > 0) {
          setEntries(
            tutor.languages_spoken.map((l: any) => ({
              language: l.language || "",
              level: l.level || "",
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch tutor info:", error);
        toast.error("Failed to fetch tutor info.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorInfo();
  }, [me]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") resolve(reader.result);
        else reject("Failed to convert file");
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // گرفتن فایل عکس
      const imageInput = document.querySelector<HTMLInputElement>(
        'input[type="file"][accept="image/*"]'
      );
      let profile_picture = "";
      if (imageInput?.files?.[0]) {

        profile_picture = await fileToBase64(imageInput.files[0]);
      }

      // گرفتن فایل ویدیو
      const videoInput = document.querySelector<HTMLInputElement>(
        'input[type="file"][accept="video/*"]'
      );
      let intro_video_file = "";
      if (videoInput?.files?.[0]) {
        intro_video_file = await fileToBase64(videoInput.files[0]);
      }

      // // آماده کردن رشته زبان‌ها
      // const languages_spoken = entries
      //   .map((entry) => `${entry.language}:${entry.level}`)
      //   .join(",");
      //
      // // رشته موضوع
      // const subjects = selectedSubject;

      const languages_spoken = entries
          .filter(e => e.language && e.level)
          .map(e => ({ language: e.language, level: e.level }));

      const subjects = selectedSubject ? [selectedSubject] : [];


      // ساخت payload
      const payload:any = {
        // profile_picture,
        languages_spoken,
        country: selectedCountry,
        subjects,
        phone_number: phoneNumber,
        // intro_video_file,
      };

      // ✅ only include file fields if user picked a file
      if (imageInput?.files?.[0]) {
        payload.profile_picture = imageInput.files[0];
      }

      if (videoInput?.files?.[0]) {
        payload.intro_video_file = videoInput.files[0];
      }

      // ✅ send as multipart/form-data, not JSON
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (key === "languages_spoken" || key === "subjects") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value as any);
        }
      });

      await api.patch(`/api/tutors/${tutorId}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });



      toast.success("Information updated successfully!");
    } catch (error) {
      console.error("Updating tutor info failed:", error);
      toast.error("Failed to update information.");
    }
  };

  return (
    <div className="my-8 px-1 md:px-2 lg:px-4">
      {isLoading ? (
        <div className="m-6 text-gray-500 flex items-center justify-center h-[250px] w-full">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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

          <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
            <div className="w-full md:w-1/3 ml-4 flex md:items-start md:justify-center font-bold mt-4 md:mt-6 mb-4 md:mb-0">
              Personal Information
            </div>
            <div className="w-full flex flex-col gap-1 md:w-2/3 md:pr-32">
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
                value={me?.email}
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
                  introducing who you are, your teaching style, and what
                  students can expect from your lessons.
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
      )}
    </div>
  );
};

export default DashboardTutorInfo;
