"use client";
import React, { useEffect, useState } from "react";

import Inputs from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button/Button";
import { countryList } from "@/mock/countryList";
import Image from "next/image";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";

const instituteIcon = "/icons/institutionGray.svg";
const locationIcon = "/icons/locationGray.svg";
const dateIcon = "/icons/dayIcon.svg";
const degreeIcon = "/icons/degreeGray.svg";
const fieldIcon = "/icons/educationGray.svg";

const DashboardTutorEducation = () => {
  const [getEducation, setGetEducation] = useState([]);
  const [me, setMe] = useState({});

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

  console.log("me:", me);

  useEffect(() => {
    if (!me?.id) return;

    const fetchEducations = async () => {
      try {
        const res = await api.get(`/api/tutor-educations/${me.id}`);
        setGetEducation(res.data);
      } catch (error) {
        console.error("Fetching educations failed:", error);
        toast.error("Failed to fetch educations. Please try again later.");
      }
    };

    fetchEducations();
  }, [me]);

  console.log(getEducation);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!me?.id) {
      toast.error("User not found. Please try again.");
      return;
    }

    try {
      await Promise.all(
        educations.map((edu) => {
          const payload = {
            degree: edu.degree,
            institution_name: edu.institution,
            country: edu.country,
            city: edu.city,
            field: edu.field,
            start_date: edu.startDate,
            end_date: edu.endDate,
            tutor: me.id,
          };

          return api.patch(`/api/tutor-educations/${me.id}`, payload);
        })
      );

      toast.success("Educations updated successfully!");
    } catch (error) {
      console.error("Updating educations failed:", error);
      toast.error("Failed to update educations. Please try again later.");
    }
  };

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Educations</h1>

      <form onSubmit={handleSubmit}>
        {educations.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 mt-12 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
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

            <div className="w-full sm:w-[450px]">
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
                  <option value="Master's Degree">{"Master's Degree"}</option>
                  <option value="Doctor of Philosophy">PhD</option>
                  <option value="General Medical Doctor">Medical Doctor</option>
                  <option value="Specialist Medical Degree">
                    Specialist Degree
                  </option>
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

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Institution Name"
                type="text"
                inputIcon={instituteIcon}
                label="Institution Name"
                value={edu.institution}
                onchange={(e) =>
                  handleChange(index, "institution", e.target.value)
                }
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
              <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                Institution Country
              </label>
              <div className="relative w-full">
                <select
                  name="selectCountry"
                  value={edu.country}
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
                placeholder="Institution City"
                type="text"
                inputIcon={locationIcon}
                label="Institution City"
                value={edu.city}
                onchange={(e) => handleChange(index, "city", e.target.value)}
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Field of Study"
                type="text"
                inputIcon={fieldIcon}
                label="Field of Study"
                value={edu.field}
                onchange={(e) => handleChange(index, "field", e.target.value)}
                width="100%"
              />
            </div>

            <div className="w-full sm:w-[450px]">
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

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="End Date"
                type="date"
                inputIcon={dateIcon}
                label="End Date"
                value={edu.endDate}
                onchange={(e) => handleChange(index, "endDate", e.target.value)}
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

        {/*  submit btn */}
        <div className="flex justify-end mt-8">
          <Button type="submit" label="Update Education" />
        </div>
      </form>
    </div>
  );
};

export default DashboardTutorEducation;
