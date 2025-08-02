"use client";
import React, { useState } from "react";
// import lessonIcon from "./../../../assets/icons/learningD.svg";
// import homeworkIcon from "./../../../assets/icons/homeworkD.svg";
import DashboardStudentLessons from "./DashboardStudentLessons";
import DashboardStudentHomeworks from "./DashboardStudentHomeworks";

const DashboardStudentDetail = () => {
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
            <img
              src={"/icons/learningD.svg"}
              alt="lesson icon"
              style={{ width: "80%", height: "80%" }}
            />
            {/* <Image
              src={lessonIcon}
              alt={"lesson-icon"}
              width={24}
              height={24}
              style={{ width: "80%", height: "80%" }}
            /> */}
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
            <img
              src={"/icons/homeworkD.svg"}
              alt="home work icon"
              style={{ width: "80%", height: "80%" }}
            />
            {/* <Image
              src={homeworkIcon}
              alt={"HW-icon"}
              width={24}
              height={24}
              style={{ width: "80%", height: "80%" }}
            /> */}
          </div>
          <p>Homeworks</p>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////// */}

      {isActiveLesson && <DashboardStudentLessons />}

      {isActiveHomework && <DashboardStudentHomeworks />}
    </div>
  );
};

export default DashboardStudentDetail;
