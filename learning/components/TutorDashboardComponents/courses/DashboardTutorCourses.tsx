"use client";
import React from "react";

import { courseMockDetail } from "@/mock/courseMockData";
import Country from "@/components/Country/Country";
import Link from "next/link";
import { tutorMockDetail } from "@/mock/tutorMockData";
import Image from "next/image";

const arrowIcon = "/icons/arrowBlue.svg";

const DashboardTutorCourses = () => {
  const personNumber = 0;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#45444A] m-4">Courses List</h2>

      {/* Headers */}
      <div className="flex text-[#45444A] text-lg font-bold px-2 md:px-8 mt-6 justify-between sm:justify-start items-center w-full h-[60px] bg-white/80 rounded-2xl shadow-md">
        <p className="w-1/2 sm:w-1/4">Title</p>
        <p className="hidden sm:block sm:w-1/4">Tutor</p>
        <p className="hidden sm:block sm:w-1/4">Language</p>
        <p className="w-1/2 sm:w-1/4">Time</p>
      </div>

      {/* Courses */}
      {tutorMockDetail[personNumber].coursesList.map((tutorCourseId) => {
        const course = courseMockDetail.find(
          (course) => course.courseId === tutorCourseId
        );

        if (!course) return null;

        return (
          <Link
            href={`/dashboard/tutor/detail/courses/${course.courseId}`}
            key={course.id}
            className="flex text-[#45444A] px-2 md:px-8 mt-4 text-sm justify-between sm:justify-start items-center w-full h-[60px] bg-white rounded-2xl shadow-md hover:shadow-xl"
          >
            <p className="font-bold w-1/2 sm:w-1/4">{course.courseTitle}</p>
            <p className="hidden sm:block sm:w-1/4">
              {course.tutorFirstName} {course.tutorLastName}
            </p>
            <div className="hidden sm:block sm:w-1/4">
              <Country
                flag={course.courseLanguageFlag}
                countryName={course.courseLanguage}
                width={"24px"}
                textSize={"14px"}
                fontWeight={"normal"}
              />
            </div>
            <div className="flex w-1/2 sm:w-1/4 justify-between items-start">
              <p>
                {course.courseTimeStart}-{course.courseTimeEnd},{" "}
                {course.courseDay}
              </p>
              <div>
                {/* <img
                  src={"/icons/arrowBlue.svg"}
                  alt="arrow icon"
                  className="w-6 h-6"
                /> */}
                <Image
                  src={arrowIcon}
                  alt="arrow icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardTutorCourses;
