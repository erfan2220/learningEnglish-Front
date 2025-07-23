"use client";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Image from "next/image";
import Country from "../Country/Country";
import clockIcon from "../../assets/icons/clockPurple.svg";
import levelIcon from "../../assets/icons/levelIcon.svg";
import peopleIcon from "../../assets/icons/people.svg";
import languageIcon from "../../assets/icons/languagePurple.svg";
import Button from "../Button/Button";
import axiosInstance from "@/APIs/axiosInstance";
import { CourseTypeTemporary } from "@/model/courseType";
import profilePhoto from "../../assets/icons/profilePhoto.svg";

const CourseDetail = ({ courseId }: { courseId: number }) => {
  const [course, setCourse] = useState<CourseTypeTemporary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosInstance.get(`/api/courses/${courseId}`);
        setCourse(res.data);
      } catch (error) {
        console.error("Fetching error", error);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (!isNaN(courseId)) {
      fetchCourse();
    } else {
      setError("Invalid course ID");
      setLoading(false);
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p>Course not found</p>
      </div>
    );
  }

  // Helper function to get day name from day number
  const getDayName = (dayNumber: string) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = parseInt(dayNumber) % 7;
    return days[dayIndex];
  };

  // Format time to HH:MM format
  const formatTime = (timeString: string) => {
    return timeString.split(":").slice(0, 2).join(":");
  };

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <Layout>
          <div className="p-4 sm:p-12">
            {/* Header */}
            <h1 className="text-[#45444A] font-bold text-2xl">
              {course.title}
            </h1>

            {/* Info */}
            <div className="flex flex-wrap my-4 gap-3 text-[#45444A] font-bold text-sm">
              <div className="px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Country
                  countryName={course.language}
                  fontWeight={"semibold"}
                  textSize="14px"
                  width={22}
                />
              </div>
              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Image src={clockIcon} alt="time icon" width={22} height={22} />
                <p>100 mins</p>
              </div>
              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Image
                  src={levelIcon}
                  alt="level icon"
                  width={22}
                  height={22}
                />
                <p>{course.level}</p>
              </div>
              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Image
                  src={peopleIcon}
                  alt="people icon"
                  width={22}
                  height={22}
                />
                <p>{course.capacity} spots / class</p>
              </div>
              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <p>
                  {getDayName(course.schedule_day)}{" "}
                  {formatTime(course.schedule_start)}-
                  {formatTime(course.schedule_end)}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="my-8 mt-10 text-[#45444A]">
              <h4 className="font-bold">Class description</h4>
              <p className="text-[#737177]">{course.description}</p>
            </div>

            {/* Course Requirements */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Requirements</h4>
              <p className="text-[#737177]">No special requirements</p>
            </div>

            {/* Course Materials */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Materials</h4>
              <p className="text-[#737177]">All materials will be provided</p>
            </div>

            {/* Course Length */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Length</h4>
              <p className="text-[#737177]">
                <b>{course.lessons.length}</b> Lessons
              </p>
            </div>
          </div>
        </Layout>

        <Layout>
          <div className="p-4 sm:p-12">
            <h2 className="text-[#45444A] font-bold text-2xl">
              About Your Tutor
            </h2>

            {/* Tutor Info */}
            <div className="flex gap-4 items-center my-5">
              <Image
                src={course.tutor?.profile_picture || profilePhoto}
                alt="tutor photo"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
              <div className="text-[#45444A]">
                <p className="font-bold">Sam Smith</p>
                <p className="text-[#737177] text-sm">Teacher</p>
              </div>
            </div>

            {/* Active Students */}
            <div className="flex gap-2 px-3 py-1 text-[#5C5A60]">
              <Image
                src={peopleIcon}
                alt="students icon"
                width={22}
                height={22}
              />
              <p className="font-semibold">
                <b>12</b> Active Students
              </p>
            </div>

            {/* Languages Spoken */}
            <div className="flex items-center gap-2 px-3 py-1 text-[#5C5A60]">
              <Image
                src={languageIcon}
                alt="language icon"
                width={22}
                height={22}
              />
              <div className="font-semibold flex flex-wrap gap-6">
                Speaks{" "}
                {Object.entries(course.tutor?.languages_spoken || {}).map(
                  ([language, level]) => (
                    <div key={language} className="flex items-center">
                      <Country
                        countryName={language}
                        fontWeight="semibold"
                        textSize="13px"
                        width={22}
                      />
                      <span className="text-xs text-gray-500 ml-1">
                        ({level})
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8">
              <h4 className="text-[#45444A] font-bold">Bio</h4>
              <p className="text-[#737177]">
                Experienced teacher with a passion for education.
              </p>
            </div>
          </div>
        </Layout>

        {/* Fixed Bottom Bar */}
        <div className="fixed left-0 right-0 bottom-0 z-40 flex justify-between border-[#737177] px-3 sm:px-10 md:px-28 items-center h-16 bg-[#CB71FF90] backdrop-blur-sm shadow-[-5px_-3px_15px_rgba(0,0,0,0.2)]">
          <p className="font-bold text-[#45444A]">
            USD {course.price_per_hour} / hour
          </p>
          <Button label="Start Course" type="button" marginTop="0" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
