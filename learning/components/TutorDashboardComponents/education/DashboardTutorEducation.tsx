"use client";
import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button/Button";
import { countryList } from "@/mock/countryList";
import Image from "next/image";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";
import { TutorEducation, User } from "@/model/types";
import { BeatLoader } from "react-spinners";

const instituteIcon = "/icons/institutionGray.svg";
const locationIcon = "/icons/locationGray.svg";
const dateIcon = "/icons/dayIcon.svg";
const degreeIcon = "/icons/degreeGray.svg";
const fieldIcon = "/icons/educationGray.svg";

const DashboardTutorEducation = () => {
  const [educations, setEducations] = useState<any[]>([]);
  const [me, setMe] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  // ⭐ fetch me
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get(`/api/me`);
        setMe(res.data);
      } catch (error) {
        console.error("Fetching me failed:", error);
        toast.error("Failed to fetch me.");
      }
    };
    fetchMe();
  }, []);

  // ⭐ fetch educations
  useEffect(() => {
    if (!me?.id) return;

    const fetchEducations = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/api/tutor-educations/?user=${me.id}`);
        console.log(res.data);
        // اگر خالی بود، یک فرم جدید بساز
        if (res.data.length === 0) {
          setEducations([
            {
              id: null,
              degree: "",
              institution_name: "",
              country: "",
              city: "",
              field: "",
              start_date: "",
              end_date: "",
            },
          ]);
        } else {
          // اگر قبلی بود، مقداردهی کن
          const formatted = res.data.map((edu: TutorEducation) => ({
            id: edu.id,
            degree: edu.degree || "",
            institution_name: edu.institution_name || "",
            country: edu.country || "",
            city: edu.city || "",
            field: edu.field || "",
            start_date: edu.start_date || "",
            end_date: edu.end_date || "",
          }));

          setEducations(formatted);
        }
      } catch (error) {
        console.error("Fetching educations failed:", error);
        toast.error("Failed to fetch educations.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducations();
  }, [me]);

  // ⭐ Add new education
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: null,
        degree: "",
        institution_name: "",
        country: "",
        city: "",
        field: "",
        start_date: "",
        end_date: "",
      },
    ]);
  };

  // ⭐ Remove specific item
  const handleRemoveEducation = (index: number) => {
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
  };

  // ⭐ Handle input change
  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  // ⭐ Submit (POST or PATCH)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!me?.id) {
      toast.error("User not found.");
      return;
    }

    try {
      await Promise.all(
        educations.map((edu) => {
          const payload = {
            degree: edu.degree,
            institution_name: edu.institution_name,
            country: edu.country,
            city: edu.city,
            field: edu.field,
            start_date: edu.start_date,
            end_date: edu.end_date,
            tutor: me.id,
          };

          if (edu.id) {
            // update existing
            return api.patch(`/api/tutor-educations/${edu.id}/`, payload);
          } else {
            // create new
            return api.post(`/api/tutor-educations/`, payload);
          }
        })
      );

      toast.success("Educations updated successfully!");
    } catch (error: any) {
      console.log("ERROR:", error?.response?.data);
      toast.error("Failed to update educations.");
    }
  };

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Educations</h1>

      {isLoading ? (
        <div className="m-6 text-gray-500 flex items-center justify-center h-[250px] w-full">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : (
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

              {/* Degree */}
              <div className="w-full sm:w-[450px]">
                <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                  Latest Degree
                </label>
                <div className="relative w-full">
                  <select
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
                    <option value="Master's Degree">{`Master's Degree`}</option>
                    <option value="Doctor of Philosophy">PhD</option>
                    <option value="General Medical Doctor">
                      Medical Doctor
                    </option>
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

              {/* Institution */}
              <div className="w-full sm:w-[450px]">
                <Inputs
                  placeholder="Institution Name"
                  type="text"
                  inputIcon={instituteIcon}
                  label="Institution Name"
                  value={edu.institution_name}
                  onchange={(e) =>
                    handleChange(index, "institution_name", e.target.value)
                  }
                  width="100%"
                />
              </div>

              {/* Country */}
              <div className="w-full sm:w-[450px]">
                <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">
                  Institution Country
                </label>
                <div className="relative w-full">
                  <select
                    value={edu.country}
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

              {/* City */}
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

              {/* Field */}
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

              {/* Start Date */}
              <div className="w-full sm:w-[450px]">
                <Inputs
                  placeholder="Start Date"
                  type="date"
                  inputIcon={dateIcon}
                  label="Start Date"
                  value={edu.start_date}
                  onchange={(e) =>
                    handleChange(index, "start_date", e.target.value)
                  }
                  width="100%"
                />
              </div>

              {/* End Date */}
              <div className="w-full sm:w-[450px]">
                <Inputs
                  placeholder="End Date"
                  type="date"
                  inputIcon={dateIcon}
                  label="End Date"
                  value={edu.end_date}
                  onchange={(e) =>
                    handleChange(index, "end_date", e.target.value)
                  }
                  width="100%"
                />
              </div>
            </div>
          ))}

          {/* Add new */}
          <p
            className="text-[#45444A] font-bold underline hover:cursor-pointer flex sm:items-center sm:justify-center mt-4"
            onClick={handleAddEducation}
          >
            + Add Education
          </p>

          {/* Submit */}
          <div className="flex justify-end mt-8">
            <Button type="submit" label="Update Education" />
          </div>
        </form>
      )}
    </div>
  );
};

export default DashboardTutorEducation;
