"use client";

import { courseMockDetail } from "@/mock/courseMockData";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import arrowDown from "../../../assets/icons/arrowDownD.svg";
import arrowUp from "../../../assets/icons/arrowUpD.svg";

const DashboardStudentLessons = () => {
  const { courseId } = useParams();
  const courseIdStr = Array.isArray(courseId) ? courseId[0] : courseId;

  // Track open lesson by lessonId (number or string)
  const [openLessonId, setOpenLessonId] = useState<number | string | boolean>(
    false
  );

  console.log(courseId);

  return (
    <div className="my-10">
      {courseMockDetail.map((course) => {
        if (course.courseId === courseIdStr) {
          return (
            <div key={course.courseId}>
              {course.lesson.map((lesson) => (
                <div key={lesson.lessonId}>
                  <div
                    className="flex px-2 sm:px-8 text-sm text-[#45444A] bg-white items-center mt-4 h-[60px] rounded-2xl shadow-md hover:shadow-lg "
                    onClick={() => {
                      setOpenLessonId((prev) =>
                        prev === lesson.lessonId ? false : lesson.lessonId
                      );
                    }}
                  >
                    <>
                      <p className="w-1/2 font-bold">{lesson.lessonTitle}</p>
                      <div className="flex justify-between w-1/2 font-semibold">
                        <p>{lesson.lessonPart}</p>
                        {openLessonId === lesson.lessonId ? (
                          <Image
                            src={arrowUp}
                            alt="arrow"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src={arrowDown}
                            alt="arrow"
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    </>
                  </div>
                  {openLessonId === lesson.lessonId && (
                    <div className="bg-white mb-8 py-14  sm:px-14 px-4 flex flex-col justify-center items-center rounded-xl shadow-md hover:shadow-lg mt-2 text-sm text-[#737177] space-y-4">
                      {/* /////video//////////// */}

                      <video
                        src={lesson.lessonVideo}
                        controls
                        className="w-full max-w-md rounded-lg shadow-md"
                      />

                      {/* /////pdf file//////////// */}
                      <div className="w-full flex flex-col">
                        <div>
                          <a
                            href={lesson.lessonDocument}
                            download
                            className="text-[#5F33E1] underline hover:text-[#35129D] font-medium inline"
                          >
                            {lesson.lessonTitle}
                            {" - "}
                            {lesson.lessonPart}
                          </a>
                        </div>

                        <hr className="flex-1 my-4 border-1 border-[#45444A]" />

                        {/* /////description//////////// */}

                        <p>{lesson.lessonDescription}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default DashboardStudentLessons;
