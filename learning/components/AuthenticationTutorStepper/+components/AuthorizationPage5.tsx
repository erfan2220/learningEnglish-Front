"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Inputs from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { countryList } from "@/mock/countryList";
import { useRouter } from "next/navigation";

const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";
const locationIcon = "/icons/locationGray.svg";
const experienceIcon = "/icons/experienceGray.svg";
const dateIcon = "/icons/dayIcon.svg";

// تعریف نوع داده‌ها برای TypeScript (اختیاری)
const defaultExperience = {
  experience: "",
  country: "",
  city: "",
  startDate: "",
  endDate: "",
  describe: "",
};

const AuthorizationPage5 = () => {
  const [bio, setBio] = useState("");
  const [teachingStyle, setTeachingStyle] = useState("");
  const [goalsTeach, setGoalsTeach] = useState("");
  const [expect, setExpect] = useState("");
  const [experience, setExperience] = useState([{ ...defaultExperience }]);
  const [isLoaded, setIsLoaded] = useState(false); // برای جلوگیری از رندر مضاعف
  const router = useRouter();

  // بارگذاری داده‌ها از localStorage هنگام لود کامپوننت
  useEffect(() => {
    // بررسی وجود localStorage (برای محیط‌هایی مثل SSR که localStorage وجود ندارد)
    if (typeof window === 'undefined') return;
    
    try {
      const savedData = localStorage.getItem("tutorAuthStep5");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setBio(parsedData.bio || "");
        setTeachingStyle(parsedData.teachingStyle || "");
        setGoalsTeach(parsedData.goalsTeach || "");
        setExpect(parsedData.expect || "");
        setExperience(
          parsedData.experience && parsedData.experience.length > 0
            ? parsedData.experience
            : [{ ...defaultExperience }]
        );
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      // در صورت خطا، داده‌های پیش‌فرض تنظیم می‌شوند
      setBio("");
      setTeachingStyle("");
      setGoalsTeach("");
      setExpect("");
      setExperience([{ ...defaultExperience }]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // ذخیره‌سازی داده‌ها در localStorage هنگام تغییر
  useEffect(() => {
    // فقط پس از بارگذاری اولیه و در مرورگر ذخیره کند
    if (!isLoaded || typeof window === 'undefined') return;
    
    try {
      const dataToSave = {
        bio,
        teachingStyle,
        goalsTeach,
        expect,
        experience,
      };
      localStorage.setItem("tutorAuthStep5", JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  }, [bio, teachingStyle, goalsTeach, expect, experience, isLoaded]);

  const btnTrigger =
    bio !== "" &&
    teachingStyle !== "" &&
    goalsTeach !== "" &&
    expect !== "" &&
    experience.every(
      (exp) =>
        exp.experience !== "" &&
        exp.country !== "" &&
        exp.city !== "" &&
        exp.startDate !== "" &&
        exp.endDate !== "" &&
        exp.describe !== ""
    );

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { ...defaultExperience },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    if (experience.length <= 1) return; // حداقل یک تجربه باید باقی بماند
    const updated = experience.filter((_, i) => i !== index);
    setExperience(updated);
  };

  const handleChange = (
    index: number,
    field:
      | "experience"
      | "country"
      | "city"
      | "startDate"
      | "endDate"
      | "describe",
    value: string
  ) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Final Experience Data:", experience);
    //api
  };

  const handleNextStep = () => {
    // ذخیره نهایی قبل از رفتن به مرحله بعد
    const finalData = {
      bio,
      teachingStyle,
      goalsTeach,
      expect,
      experience,
    };
    localStorage.setItem("tutorAuthStep5", JSON.stringify(finalData));
    router.push("/tutorAuthentication/step6");
  };

  // اگر داده‌ها هنوز بارگذاری نشده، می‌توانید یک loading نشان دهید
  if (!isLoaded) {
    return <div className="py-2 pt-6 md:py-12 flex justify-center items-center">Loading...</div>;
  }

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
          <h1 className="text-[#45444A] font-bold text-xl">Description</h1>
          <p>
            Please write 3–5 short paragraphs to describe yourself, your
            teaching style, and what students can expect from your lessons. This
            helps learners decide if you’re the right fit for them.
          </p>

          {/* ================================= */}

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full text-[#45444A] items-center justify-center">
              <p className="w-full text-[#737177]">
                Please write 3–5 short paragraphs to describe yourself, your
                teaching style, and what students can expect from your lessons.
                This helps learners decide if you’re the right fit for them.
              </p>

              <div className="w-full  mt-3 text-[#45444A]">
                <label className="text-xs mx-2">Who are you?</label>
                <textarea
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="type here ..."
                  className=" border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm  focus:outline-0"
                />
              </div>

              {/* ///////////////////// */}
              <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">
                  What is your teaching style or philosophy?
                </label>
                <textarea
                  rows={5}
                  value={teachingStyle}
                  onChange={(e) => setTeachingStyle(e.target.value)}
                  placeholder="type here ..."
                  className=" border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm  focus:outline-0"
                />
              </div>

              {/* ///////////////////// */}
              <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">
                  {" "}
                  Who do you usually teach? (age, level, goals)?
                </label>
                <textarea
                  rows={5}
                  value={goalsTeach}
                  onChange={(e) => setGoalsTeach(e.target.value)}
                  placeholder="type here ..."
                  className=" border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm  focus:outline-0"
                />
              </div>

              {/* ///////////////////// */}

              <div className="w-full text-[#45444A] ">
                <label className="text-xs mx-2">
                  {" "}
                  What can students expect from your classes?
                </label>
                <textarea
                  rows={5}
                  value={expect}
                  onChange={(e) => setExpect(e.target.value)}
                  placeholder="type here ..."
                  className=" border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm  focus:outline-0"
                />
              </div>
            </div>

            {/* ////////////////// */}

            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 mt-4 items-center justify-center relative"
              >
                <hr className="border-2 border-[#BBBBBB] mx-2 sm:mx-0 w-full" />
                {/* delete experience  */}
                {experience.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(index)}
                    className="absolute top-1 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                  >
                    Delete Experience
                  </button>
                )}

                <div className="w-full">
                  <Inputs
                    placeholder="Experience Title"
                    type="text"
                    inputIcon={experienceIcon}
                    label="Experience Title"
                    value={exp.experience}
                    onchange={(e) =>
                      handleChange(index, "experience", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full">
                  <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                    Country
                  </label>
                  <div className="relative w-full">
                    <select
                      name="selectCountry"
                      value={exp.country}
                      onChange={(e) =>
                        handleChange(index, "country", e.target.value)
                      }
                      className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option value="" disabled>
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
                    placeholder="City"
                    type="text"
                    inputIcon={locationIcon}
                    label="City"
                    value={exp.city}
                    onchange={(e) =>
                      handleChange(index, "city", e.target.value)
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
                    value={exp.startDate}
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
                    value={exp.endDate}
                    onchange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                    width="100%"
                  />
                </div>

                <div className="w-full text-[#45444A]">
                  <label className="text-xs mx-2">
                    {" "}
                    Briefly describe your teaching experience
                  </label>
                  <textarea
                    rows={5}
                    value={exp.describe}
                    onChange={(e) =>
                      handleChange(index, "describe", e.target.value)
                    }
                    placeholder="type here ..."
                    className=" border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm  focus:outline-0"
                  />
                </div>
              </div>
            ))}

            {/* add new exp   */}
            <p
              className="text-[#45444A] font-bold underline hover:cursor-pointer flex sm:items-center sm:justify-center mt-4"
              onClick={handleAddExperience}
            >
              + Add Experience
            </p>
          </form>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="button"
              label={"Back"}
              btnIcon={null}
              onclick={() => router.push("/tutorAuthentication/step4")}
            />

            <Button
              type="button"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={handleNextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage5;