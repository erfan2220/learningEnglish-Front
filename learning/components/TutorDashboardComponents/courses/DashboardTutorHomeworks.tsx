"use client";
import { courseMockDetail } from "@/mock/courseMockData";
import { useParams } from "next/navigation";
import React from "react";

import Image from "next/image";

const downloadIcon = "/icons/download.svg";
const uploadIcon = "/icons/upload.svg";

const DashboardTutorHomeworks = () => {
  const { courseId } = useParams();
  const courseIdStr = Array.isArray(courseId) ? courseId[0] : courseId;

  // const [uploadAnswer, setUploadAnswer] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // const docURL = URL.createObjectURL(file);
    // setUploadAnswer(docURL);
  };

  return (
    <div className="mt-10">
      {/* /////////////////////////////////////// */}
      <div className="flex text-[#45444A] font-bold px-4 bg-white my-2 items-center justify-around h-[60px] rounded-xl shadow-md text-sm">
        <p className="w-1/3 sm:w-1/5">Lesson</p>
        <p className="hidden sm:flex justify-start w-1/3 sm:w-1/5">Title</p>
        <p className="flex justify-center w-1/3 sm:w-1/5">Download</p>
        <p className="hidden sm:flex justify-center w-1/3 sm:w-1/5">Due Date</p>
        <p className="flex justify-center w-1/3 sm:w-1/5">Upload</p>
      </div>

      {/* /////////////////////////////////////// */}

      {courseMockDetail.map((course) => {
        if (course.courseId === courseIdStr) {
          return (
            <div key={course.courseId}>
              {course.lesson.map((lesson) => (
                <div key={lesson.lessonId}>
                  {lesson.homeworks.map((homework) => (
                    <div
                      key={homework.homeworkId}
                      className="bg-white my-2 flex items-center justify-around h-[60px] px-3 rounded-xl shadow-md hover:shadow-lg text-sm"
                    >
                      <h4 className="font-bold w-1/3 sm:w-1/5">
                        {lesson.lessonTitle}
                      </h4>

                      <p className="font-semibold hidden sm:block sm:w-1/5 text-[#45444A]">
                        {homework.homeworkTitle}
                      </p>

                      <div className="flex justify-center w-1/3 sm:w-1/5">
                        <a
                          href={homework.homeworkDocument}
                          download
                          className="text-blue-600 hover:underline  mt-1 inline-block"
                        >
                          {/* <img
                            src={"/icons/download.svg"}
                            alt="download"
                            className="w-6 h-6"
                          /> */}
                          <Image
                            src={downloadIcon}
                            alt="download"
                            width={24}
                            height={24}
                          />
                        </a>
                      </div>
                      <div className="text-xs sm:flex justify-center hidden  sm:w-1/5">
                        <p className="">{homework.homeworkDueDate}</p>
                      </div>

                      {/* --------------------HEEEELP- :((( ------------------------- */}

                      <div className="flex justify-center w-1/3 sm:w-1/5">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        {/* <img
                          src={"/icons/upload.svg"}
                          alt="uploadIcon"
                          className="w-6 h-6"
                        /> */}

                        <Image
                          src={uploadIcon}
                          alt="download"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  ))}
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

export default DashboardTutorHomeworks;
