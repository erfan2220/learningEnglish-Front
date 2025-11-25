"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Country from "@/components/Common/Country/Country";
import { api } from "@/lib/APIs/axiosInstance";
import { User, TutorCourse } from "@/model/types";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const arrowIcon = "/icons/arrowBlue.svg";

const DashboardTutorCourses = () => {
  const [me, setMe] = useState<User>();
  const [courses, setCourses] = useState<TutorCourse[]>([]);
  const [loading, setLoading] = useState(true);

  // گرفتن اطلاعات کاربر
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/api/me");
        setMe(res.data);
      } catch (error) {
        console.error("Fetching me failed:", error);
        toast.error("Failed to fetch me. Please try again later.");
      }
    };
    fetchMe();
  }, []);

  // گرفتن اطلاعات tutor و courses
  useEffect(() => {
    if (!me?.id) return;

    const fetchTutorCourses = async () => {
      try {
        const res = await api.get(`/api/tutors/?user=${me.id}`);
        const tutor = res.data[0];

        if (!tutor || !tutor.courses) {
          setCourses([]);
        } else {
          setCourses(tutor.courses);
        }
      } catch (error) {
        console.error("Fetching courses failed:", error);
        toast.error("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchTutorCourses();
  }, [me]);

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

      {loading && (
        <div className="m-6 text-gray-500 flex items-center justify-center h-[250px] w-full">
          <BeatLoader color="#5F33E1" />
        </div>
      )}

      {!loading && courses.length === 0 && (
        <p className="m-6 text-gray-500">No courses found.</p>
      )}

      {/* Courses */}
      {courses.map((course) => (
        <Link
          href={`/dashboard/tutor/detail/courses/${course.id}`}
          key={course.id}
          className="flex text-[#45444A] px-2 md:px-8 mt-4 text-sm justify-between sm:justify-start items-center w-full h-[60px] bg-white rounded-2xl shadow-md hover:shadow-xl"
        >
          {/* Title */}
          <p className="font-bold w-1/2 sm:w-1/4">{course.course_title}</p>

          {/* Tutor Name */}
          <p className="hidden sm:block sm:w-1/4">
            {me?.first_name} {me?.last_name}
          </p>

          {/* Language */}
          <div className="hidden sm:block sm:w-1/4">
            <Country
              flag={"/icons/ukFlag.svg"}
              countryName={course.language}
              width="24px"
              textSize="14px"
              fontWeight="normal"
            />
          </div>

          {/* Time */}
          <div className="flex w-1/2 sm:w-1/4 justify-between items-start">
            <p>
              {course.time_slots?.[0] || "No time"} ,{" "}
              {course.days_available?.[0] || "No day"}
            </p>
            <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardTutorCourses;
