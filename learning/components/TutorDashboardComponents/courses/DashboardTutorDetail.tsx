"use client";
import React, { useState } from "react";

import DashboardTutorLessons from "./DashboardTutorLessons";
import DashboardTutorHomeworks from "./DashboardTutorHomeworks";
import Image from "next/image";

const lessonIcon = "/icons/learningD.svg";
const homeworkIcon = "/icons/homeworkD.svg";

const DashboardTutorDetail = () => {
  const [isActiveLesson, setIsActiveLesson] = useState(true);
  const [isActiveHomework, setIsActiveHomework] = useState(false);
  return (
    <div>
      <div className="flex gap-2 sm:gap-4 mt-8">
        <div
          className={`py-2 w-full sm:w-60 text-sm flex flex-row justify-center items-center md:gap-1 lg:gap-2 font-semibold rounded-2xl shadow-md border-2 transition-all duration-300
            ${
              isActiveLesson
                ? "bg-[#9571FF] text-white"
                : "bg-white/80 text-[#45444A] hover:bg-[#f0e9ff]"
            }
            hover:cursor-pointer hover:scale-[1.02] border-[#D2D2D2]`}
          onClick={() => {
            setIsActiveLesson(true);
            setIsActiveHomework(false);
          }}
        >
          <div>
            {/* <img
              src={"/icons/learningD.svg"}
              alt="lessonIcon"
              className="w-6 h-6"
              style={{ width: "80%", height: "80%" }}
            /> */}
            <Image
              src={lessonIcon}
              alt={"lesson-icon"}
              width={24}
              height={24}
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <p>Lessons</p>
        </div>
        {/* ////////////////////////////// */}
        <div
          className={`py-2 text-sm w-full sm:w-60 flex flex-row justify-center items-center md:gap-1 lg:gap-2 font-semibold rounded-2xl shadow-md border-2 transition-all duration-300
            ${
              isActiveHomework
                ? "bg-[#9571FF] text-white"
                : "bg-white/80 text-[#45444A] hover:bg-[#f0e9ff]"
            }
            hover:cursor-pointer hover:scale-[1.02] border-[#D2D2D2]`}
          onClick={() => {
            setIsActiveLesson(false);
            setIsActiveHomework(true);
          }}
        >
          <div>
            {/* <img
              src={"/icons/homeworkD.svg"}
              alt="homeworkIcon"
              className="w-6 h-6"
              style={{ width: "80%", height: "80%" }}
            /> */}

            <Image
              src={homeworkIcon}
              alt={"HW-icon"}
              width={24}
              height={24}
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <p>Homeworks</p>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////////// */}

      {isActiveLesson && <DashboardTutorLessons />}

      {isActiveHomework && <DashboardTutorHomeworks />}
    </div>
  );
};

export default DashboardTutorDetail;
