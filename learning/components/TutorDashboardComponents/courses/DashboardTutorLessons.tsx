"use client";

import { courseMockDetail } from "@/mock/courseMockData";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import arrowDown from "./../../../assets/icons/arrowDownD.svg";
import arrowUp from "./../../../assets/icons/arrowUpD.svg";
import deleteIcon from "./../../../assets/icons/deleteRed.svg";
import addIcon from "./../../../assets/icons/addWhite.svg";
import Button from "@/components/Button/Button";
import DeletePopup from "./DeletePopup";
import AddLessonPopUp from "./AddLessonPopUp";
import Image from "next/image";

const DashboardTutorLessons = () => {
  const { courseId } = useParams();
  const courseIdStr = Array.isArray(courseId) ? courseId[0] : courseId;

  // Track open lesson by lessonId (number or string)
  const [openLessonId, setOpenLessonId] = useState<number | string | boolean>(
    false
  );
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<string | number | null>(
    null
  );
  const [showAddLessonPopup, setShowAddLessonPopup] = useState(false);

  console.log(courseId);

  const handleDeleteLesson = (lessonId: string | number) => {
    setLessonToDelete(lessonId);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting lesson with id:", lessonToDelete);
    // Call API
    setShowDeletePopup(false);
    setLessonToDelete(null);
  };

  const handleClosePopup = () => {
    setShowDeletePopup(false);
    setLessonToDelete(null);
    setShowAddLessonPopup(false);
  };

  const handleShowPopUp = () => {
    setShowAddLessonPopup(true);
  };

  const handleAddLesson = () => {
    // Logic to add a lesson
    // This could involve showing a form or redirecting to another page
    console.log("Add lesson clicked");
    setShowAddLessonPopup(false);
  };

  return (
    <div className="my-10">
      {courseMockDetail.map((course) => {
        if (course.courseId === courseIdStr) {
          return (
            <div key={course.courseId}>
              {course.lesson.map((lesson) => (
                <div key={lesson.lessonId}>
                  <div
                    className="flex justify-between px-2 sm:px-8 text-sm text-[#45444A] bg-white items-center mt-4 h-[60px] rounded-2xl shadow-md hover:shadow-lg "
                    onClick={() => {
                      setOpenLessonId((prev) =>
                        prev === lesson.lessonId ? false : lesson.lessonId
                      );
                    }}
                  >
                    <>
                      <p className="sm:w-1/2 font-bold">{lesson.lessonTitle}</p>
                      <div className="flex justify-between sm:w-1/2 font-semibold">
                        <p className="hidden sm:block">{lesson.lessonPart}</p>
                        <div className="flex gap-2">
                          <div
                            className="w-full hover:cursor-pointer"
                            onClick={() => handleDeleteLesson(lesson.lessonId)}
                          >
                            {/* <img
                              src={"/icons/deleteRed.svg"}
                              alt="delete"
                              className="w-6 h-6"
                            /> */}
                            <Image
                              src={deleteIcon}
                              alt="delete"
                              width={24}
                              height={24}
                            />
                          </div>
                          {openLessonId === lesson.lessonId ? (
                            // <img
                            //   src={"/icons/arrowUpD.svg"}
                            //   alt="arrowUp"
                            //   className="w-6 h-6"
                            // />
                            <Image
                              src={arrowUp}
                              alt="arrow"
                              width={24}
                              height={24}
                            />
                          ) : (
                            
                            // <img
                            //   src={"/icons/arrowDownD.svg"}
                            //   alt="arrowDown"
                            //   className="w-6 h-6"
                            // />

                            <Image
                              src={arrowDown}
                              alt="arrow"
                              width={24}
                              height={24}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  </div>
                  {openLessonId === lesson.lessonId && (
                    <div className="bg-white mb-8 py-14  sm:px-14 px-4 flex flex-col justify-center items-center rounded-xl shadow-md hover:shadow-lg mt-2 text-sm text-[#737177] space-y-4">
                      {/* =======================video============================== */}

                      <video
                        src={lesson.lessonVideo}
                        controls
                        className="w-full max-w-md rounded-lg shadow-md"
                      />

                      {/* =======================pdf file========================= */}
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

                        {/* =================description========================= */}

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
      {/* ==================add lesson============================== */}
      <div className="flex justify-end items-center mt-4">
        <Button
          label="+ Add Lesson"
          type="button"
          colorBtnBorder="#5F33E1"
          btnIcon={addIcon}
          onclick={handleShowPopUp}
        />
      </div>

      {/* ==================pop up delete============================== */}
      {showDeletePopup && (
        <DeletePopup
          handleClosePopup={handleClosePopup}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
      {/* ==================pop up add lesson============================== */}
      {showAddLessonPopup && (
        <AddLessonPopUp
          handleAddLesson={handleAddLesson}
          handleClosePopup={handleClosePopup}
        />
      )}
    </div>
  );
};

export default DashboardTutorLessons;
