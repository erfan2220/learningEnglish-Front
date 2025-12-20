"use client";

import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button/Button";
import Image from "next/image";
import { countryList } from "@/mock/countryList";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";
import { User } from "@/model/types";
import { BeatLoader } from "react-spinners";

const experienceIcon = "/icons/experienceGray.svg";
const locationIcon = "/icons/locationGray.svg";
const dateIcon = "/icons/dayIcon.svg";

/* ===================== TYPES ===================== */

interface ExperienceItem {
  id?: number; // ⭐ برای تشخیص PATCH یا POST
  experience: string;
  organization: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  describe: string;
}

type ExperienceField =
  | "experience"
  | "organization"
  | "country"
  | "city"
  | "startDate"
  | "endDate"
  | "describe";

/* ===================== COMPONENT ===================== */

const DashboardTutorDescription = () => {
  const [bio, setBio] = useState("");
  const [teachingStyle, setTeachingStyle] = useState("");
  const [goalsTeach, setGoalsTeach] = useState("");
  const [expect, setExpect] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tutorId, setTutorId] = useState<number | null>(null);

  const [experience, setExperience] = useState<ExperienceItem[]>([
    {
      experience: "",
      organization: "",
      country: "",
      city: "",
      startDate: "",
      endDate: "",
      describe: "",
    },
  ]);

  const [me, setMe] = useState<User>();

  /* ===================== FETCH ME ===================== */

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/api/me");
        setMe(res.data);
      } catch {
        toast.error("Failed to fetch user");
      }
    };

    fetchMe();
  }, []);

  /* ===================== FETCH TUTOR INFO ===================== */

  useEffect(() => {
    if (!me?.id) return;

    const fetchTutorInfo = async () => {
      try {
        setIsLoading(true);

        const res = await api.get(`/api/tutors/?user=${me.id}`);
        const tutor = res.data[0];

        setTutorId(tutor.id); // ⭐ این خیلی مهمه

        setBio(tutor.bio || "");
        setTeachingStyle(tutor.teaching_style || "");
        setExpect(tutor.expectation || "");
        setGoalsTeach(tutor.description || "");

        if (tutor.experiences?.length > 0) {
          const formatted: ExperienceItem[] = tutor.experiences.map(
            (exp: any) => ({
              id: exp.id, // ⭐ خیلی مهم
              experience: exp.title || "",
              organization: exp.organization || "",
              country: exp.country || "",
              city: exp.city || "",
              startDate: exp.start_date || "",
              endDate: exp.end_date || "",
              describe: exp.description || "",
            })
          );

          setExperience(formatted);
        }
      } catch {
        toast.error("Failed to fetch tutor info");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorInfo();
  }, [me]);

  /* ===================== EXPERIENCE ACTIONS ===================== */

  const handleAddExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        experience: "",
        organization: "",
        country: "",
        city: "",
        startDate: "",
        endDate: "",
        describe: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (
    index: number,
    field: ExperienceField,
    value: string
  ) => {
    setExperience((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  /* ===================== SUBMIT ===================== */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!me?.id) return toast.error("User not found");

    try {
      // 🔹 experiences
      await Promise.all(
        experience.map((exp) => {
          const payload: any = {
            title: exp.experience,
            organization: exp.organization,
            country: exp.country,
            city: exp.city,
            start_date: exp.startDate,
            end_date: exp.endDate,
            description: exp.describe,
          };

          if (exp.id) {
            // ✅ PATCH
            return api.patch(`/api/tutor-experiences/${exp.id}/`, payload);
          } else {
            // ✅ POST
            payload.tutor = me.id;
            return api.post("/api/tutor-experiences/", payload);
          }
        })
      );

      // 🔹 tutor description fields
      if (!tutorId) throw new Error("Tutor not found");

      await api.patch(`/api/tutors/${tutorId}/`, {
        bio,
        teaching_style: teachingStyle,
        expectation: expect,
        description: goalsTeach,
      });

      toast.success("Profile updated successfully!");
    } catch (err: any) {
      console.error(err?.response?.data);
      toast.error("Failed to update information");
    }
  };

  /* ===================== UI BELOW ===================== */

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Description</h1>
      {isLoading ? (
        <div className="m-6 text-gray-500 flex items-center justify-center h-[250px] w-full">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  text-[#45444A] mt-12 items-center justify-center">
            <p className="w-full sm:w-[450px] text-[#737177]">
              Please write 3–5 short paragraphs to describe yourself, your
              teaching style, and what students can expect from your lessons.
              This helps learners decide if you’re the right fit for them.
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
                  inputIcon={experienceIcon}
                  label="Experience Title"
                  value={exp.experience}
                  onchange={(e) =>
                    handleChange(index, "experience", e.target.value)
                  }
                  width="100%"
                />
              </div>

              <div className="w-full sm:w-[450px]">
                <Inputs
                  placeholder="Experience Organization"
                  type="text"
                  inputIcon={experienceIcon}
                  label="Experience Organization"
                  value={exp.organization}
                  onchange={(e) =>
                    handleChange(index, "organization", e.target.value)
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

                  <Image
                    src={locationIcon}
                    alt="country icon"
                    width={24}
                    height={24}
                    className="absolute top-[20px] left-4 -translate-y-1/2"
                  />
                </div>
              </div>

              <div className="w-full sm:w-[450px]">
                <Inputs
                  placeholder="City"
                  type="text"
                  inputIcon={locationIcon}
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
                  inputIcon={dateIcon}
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
                  inputIcon={dateIcon}
                  label="End Date"
                  value={exp.endDate}
                  onchange={(e) =>
                    handleChange(index, "endDate", e.target.value)
                  }
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
            <Button type="submit" label="Update Description" />
          </div>
        </form>
      )}
    </div>
  );
};

export default DashboardTutorDescription;
