import React from "react";
import Link from "next/link";
import { TemporaryCourse } from "@/model/courseType";

const CourseCart = ({ course }: { course: TemporaryCourse }) => {
  return (
    <Link href={`/courses/detail/${course.id}`}>
      <div className="relative pb-4 px-4 border-2 border-[#D2D2D2] bg-white/70 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02]  transition-all duration-400">
        <div className="my-4 ">
          <img
            src={course.image}
            alt="course pic"
            style={{ width: "100%", height: "200px" }}
          />
          {/* <Image
            src={course.image}
            alt="course pic"
            width={100}
            height={100}
            style={{ width: "100%", height: "200px" }}
          /> */}
        </div>
        <div className="bg-[#FFC3CD] rounded-3xl inline px-6 py-1 absolute top-4 left-4">
          {course.level}
        </div>
        <div className="flex gap-2 text-[#6A129D] font-semibold text-sm items-center py-1">
          <div>
            {course.schedule_start} - {course.schedule_end}
          </div>

          <div>{course.schedule_day}</div>
        </div>
        <h4 className="text-[#45444A] text-lg font-bold">{course.title}</h4>

        <div className="flex items-center gap-2 my-2">
          {/* <div>
            <Image
              src={course.tutor.profile_picture}
              alt={"tutorPic"}
              width={40}
              height={40}
            />
          </div> */}
          <span className="font-bold text-[#45444A]">
            {"no"} {"name"}
          </span>
        </div>

        <div className="flex text-[#45444A] text-sm font-semibold gap-2 my-2">
          speaks:{" "}
          {course.tutor.languages_spoken.map((Language, index) => (
            <div key={index}>
              <p>
                {Language}
                {"  "}
              </p>
            </div>
          ))}
        </div>

        <div className="text-[#45444A]  flex">
          <p className="font-semibold">{course.active_students} </p>
          <p> - active students</p>
        </div>
        <p className="mt-4 text-lg text-[#45444A] font-bold">
          {"USD"} {course.price_per_dollar}
        </p>
      </div>
    </Link>
  );
};

export default CourseCart;
