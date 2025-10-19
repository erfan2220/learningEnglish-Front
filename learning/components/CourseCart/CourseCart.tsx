import React from "react";
import Link from "next/link";
import { TemporaryCourse } from "@/model/courseType";
import Image from "next/image";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

const notFoundPic = "/images/notFound.png";
const CourseCart = ({ course }: { course: TemporaryCourse }) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="relative w-full pb-4 px-4 border-2 border-[#D2D2D2] bg-white/70 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02]  transition-all duration-400">
        <Link
          href={`${FluentDoorRoutes.coursesDetail}/${course.id}`}
          className="w-full"
        >
          <div className="my-4 ">
            <Image
              src={course.image ?? notFoundPic}
              alt="course pic"
              width={100}
              height={100}
              style={{ width: "100%", height: "200px" }}
            />
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
            <span className="font-bold text-[#45444A]">
              {course.tutor.user}
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
        </Link>
        {/* ============ */}
        <div className="w-full">
          <Button
            label="Book Now"
            type="button"
            widthBtn="100%"
            onclick={() => {
              router.push(`${FluentDoorRoutes.cart}`);
              localStorage.setItem("selectedCourseId", course.courseId);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
