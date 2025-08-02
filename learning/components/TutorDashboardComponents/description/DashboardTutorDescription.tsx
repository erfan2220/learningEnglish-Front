"use client";
import Inputs from "@/components/Input/Input";
import React, { useState } from "react";
import { countryList } from "@/mock/countryList";
// import experienceIcon from "./../../../assets/icons/experienceGray.svg";
// import locationIcon from "./../../../assets/icons/locationGray.svg";
// import dateIcon from "./../../../assets/icons/dayIcon.svg";
import Button from "@/components/Button/Button";

const DashboardTutorDescription = () => {
  const [bio, setBio] = useState("");
  const [teachingStyle, setTeachingStyle] = useState("");
  const [goalsTeach, setGoalsTeach] = useState("");
  const [expect, setExpect] = useState("");

  const [experience, setExperience] = useState([
    {
      experience: "",
      country: "",
      city: "",
      startDate: "",
      endDate: "",
      describe: "",
    },
  ]);

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        experience: "",
        country: "",
        city: "",
        startDate: "",
        endDate: "",
        describe: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
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
    // console.log("Final Education Data:", educations);
    //api
  };

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Description</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  text-[#45444A] mt-12 items-center justify-center">
          <p className="w-full sm:w-[450px] text-[#737177]">
            Please write 3–5 short paragraphs to describe yourself, your
            teaching style, and what students can expect from your lessons. This
            helps learners decide if you’re the right fit for them.
          </p>

          <div className="w-full sm:w-[450px] mt-3 text-[#45444A]">
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
          <div className="w-full sm:w-[450px] mt-3 text-[#45444A]">
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
          <div className="w-full sm:w-[450px] mt-3 text-[#45444A]">
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

          <div className="w-full sm:w-[450px] mt-3 text-[#45444A] ">
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
            <hr className="border-2 border-[#BBBBBB] mx-2 sm:mx-0 w-full sm:w-[80%] " />
            {/* delete experience  */}
            {experience.length > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveExperience(index)}
                className="absolute top-1 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
              >
                Delete Experience
              </button>
            )}

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Experience Title"
                type="text"
                inputIcon={"/icons/experienceGray.svg"}
                label="Experience Title"
                value={exp.experience}
                onchange={(e) =>
                  handleChange(index, "experience", e.target.value)
                }
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
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
                  <option selected disabled value="">
                    --select country--
                  </option>
                  {countryList.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <img
                  src={"/icons/locationGray.svg"}
                  alt="locationIcon"
                  className="w-6 h-6 absolute top-[20px] left-4 -translate-y-1/2"
                />
                {/* <Image
                  src={locationIcon}
                  alt="country icon"
                  width={24}
                  height={24}
                  className="absolute top-[20px] left-4 -translate-y-1/2"
                /> */}
              </div>
            </div>

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="City"
                type="text"
                inputIcon={"/icons/locationGray.svg"}
                label="City"
                value={exp.city}
                onchange={(e) => handleChange(index, "city", e.target.value)}
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Start Date"
                type="date"
                inputIcon={"/icons/dayIcon.svg"}
                label="Start Date"
                value={exp.startDate}
                onchange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="End Date"
                type="date"
                inputIcon={"/icons/dayIcon.svg"}
                label="End Date"
                value={exp.endDate}
                onchange={(e) => handleChange(index, "endDate", e.target.value)}
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px] text-[#45444A]">
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

        {/*  submit btn */}
        <div className="flex justify-end mt-8">
          <Button type="submit" label="Update Education" />
        </div>
      </form>
    </div>
  );
};

export default DashboardTutorDescription;
