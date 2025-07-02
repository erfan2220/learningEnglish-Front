import React from "react";
import Image from "next/image";

const CourseCart = ({ course }) => {
  return (
    <div className="relative pb-4 px-4 border-2 border-[#D2D2D2] bg-white/70 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105  transition-all duration-300">
      <div className="my-4 ">
        <Image
          src={course.coursePicture}
          alt={course.courseTitle}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="bg-[#FFC3CD] rounded-3xl inline px-6 py-1 absolute top-4 left-4">
        {course.courseLevel}
      </div>
      <div className="flex gap-2 text-[#6A129D] font-semibold text-sm items-center py-1">
        <div>
          {course.courseTimeStart} - {course.courseTimeEnd}
        </div>
        <div>{course.courseDay}</div>
      </div>
      <h4 className="text-[#45444A] text-lg font-bold">{course.courseTitle}</h4>

      <div className="flex items-center gap-2 my-2">
        <div>
          <Image
            src={course.tutorPhoto}
            alt={course.tutorFirstName}
            width={40}
            height={40}
          />
        </div>
        <span className="font-bold text-[#45444A]">
          {course.tutorFirstName} {course.tutorLastName}
        </span>
      </div>

      <div className="flex text-[#45444A] text-sm font-semibold gap-2 my-2">
        speaks:{" "}
        {course.tutorSpeak.map((Language) => (
          <p key={Language.languageId}>{Language.languageName}</p>
        ))}
      </div>

      <div className="text-[#45444A]  flex">
        <p className="font-semibold">{course.activeStudents}</p>
        {"  "} <p>active students</p>
      </div>
      <p className="mt-4 text-lg text-[#45444A] font-bold">
        {course.price[0].currency} {course.price[0].price}
      </p>
    </div>
  );
};

export default CourseCart;
