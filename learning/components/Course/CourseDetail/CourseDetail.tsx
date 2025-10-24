"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
import { BeatLoader } from "react-spinners";
import { api } from "../../../lib/APIs/axiosInstance";
import { TemporaryCourse } from "@/model/courseType";
import Button from "../../Common/Button/Button";
import Country from "../../Common/Country/Country";

const clockIcon = "/icons/clockPurple.svg";
const levelIcon = "/icons/levelIcon.svg";
const peopleIcon = "/icons/people.svg";
const languageIcon = "/icons/languagePurple.svg";
const profilePhoto = "/icons/profilePhotoDefault.svg";
const dayIcon = "/icons/dayPink.svg";
const timeIcon = "/icons/length.svg";


const CourseDetail = ({ id }: { id: number }) => {
  const [course, setCourse] = useState<TemporaryCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/api/courses/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.error("Fetching error", error);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    } else {
      setError("Invalid course ID");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#5F33E1" />
        </div>
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
            <div className="flex flex-wrap my-4 gap-3 text-[#45444A] font-bold text-xs sm:text-sm">
              <div className="px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Country
                  flag={course.language_flag}
                  countryName={course.language}
                  fontWeight={"semibold"}
                  textSize="14px"
                  width={"22px"}
                />
              </div>
              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Image src={timeIcon} alt="time icon" width={22} height={22} />
                <p>{course.length} mins</p>
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
                <Image src={dayIcon} alt="day icon" width={22} height={22} />
                <p>{course.schedule_day}</p>
              </div>

              <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
                <Image
                  src={clockIcon}
                  alt="clock icon"
                  width={22}
                  height={22}
                />
                <p>
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

            <div className="my-8 mt-10 text-[#45444A]">
              <h4 className="font-bold">Link for Online Class</h4>
              <a
                href="https://demo.bigbluebutton.org/rooms/6h6-fnk-cyh-kgj/join"
                target="_blank"
              >
                <u>Go to Class</u>
              </a>
            </div>

            {/* Course Requirements */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Requirements</h4>
              <p className="text-[#737177]">{course.requirements}</p>
            </div>

            {/* Course Materials */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Materials</h4>
              <p className="text-[#737177]">{course.materials}</p>
            </div>

            {/* Course Length */}
            <div className="my-8 text-[#45444A]">
              <h4 className="font-bold">Course Length</h4>
              <p className="text-[#737177]">
                <b>{course.course_duration}</b> Lessons
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
                <p className="text-[#737177] text-sm">Professional Tutor</p>
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
                <b>{course.active_students}</b> Active Students
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
                {course.tutor.languages_spoken.map((Language, index) => (
                  <div key={index}>
                    <p>
                      {Language}
                      {"  "}
                      {/* {level} */}
                    </p>
                  </div>
                ))}
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
            Toman {course.price_per_toman} / hour
          </p>
          <Button
            label="Start Course"
            type="button"
            marginTop="0"
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

export default CourseDetail;
