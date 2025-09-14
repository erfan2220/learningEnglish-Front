"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Inputs from "@/components/Input/Input";
import CheckBox from "@/components/CheckBox.tsx/CheckBox";
import SubmitForm from "../SubmitForm";
import { FluentDoorRoutes } from "@/routes/routes";

// ✅ icons from /public/icons
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";
const languageIcon = "/icons/languageGray.svg";
const courseTitleIcon = "/icons/courseTitle.svg";
const durationTime = "/icons/durationTime.svg";
const priceIcon = "/icons/priceGray.svg";
const lesson = "/icons/lessonPartGray.svg";
const courseTypeIcon = "/icons/lessonGray.svg";
const timeSlot = "/icons/clockGray.svg";
const calender = "/icons/dayIcon.svg";

const AuthorizationPage7 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // مقدار اولیه course
  const initialCourse = {
    courseTitle: "",
    duration: "",
    price: "",
    lessonPackage: "",
    courseType: "",
    languagePart: "",
    description: "",
    timeSlots: [
      {
        daysAvailable: [] as string[],
        timeSlotPart: "",
        startDate: "",
      },
    ],
  };

  const [course, setCourse] = useState(initialCourse);

  // ✅ وقتی صفحه لود میشه، course رو از localStorage بخون
  useEffect(() => {
    const storedCourse = localStorage.getItem("courseData");
    if (storedCourse) {
      setCourse(JSON.parse(storedCourse));
    }
  }, []);

  // ✅ هر بار که course تغییر کرد، توی localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem("courseData", JSON.stringify(course));
  }, [course]);

  const btnTrigger =
    course.courseTitle !== "" &&
    course.duration !== "" &&
    course.price !== "" &&
    course.lessonPackage !== "" &&
    course.languagePart !== "" &&
    course.courseType !== "" &&
    course.description !== "" &&
    course.timeSlots.every(
      (slot) =>
        slot.daysAvailable.length > 0 &&
        slot.timeSlotPart !== "" &&
        slot.startDate !== ""
    );

  const handleAddTimeSlot = () => {
    setCourse({
      ...course,
      timeSlots: [
        ...course.timeSlots,
        {
          daysAvailable: [],
          timeSlotPart: "",
          startDate: "",
        },
      ],
    });
  };

  const handleRemoveTimeSlot = (index: number) => {
    const updatedTimeSlots = course.timeSlots.filter((_, i) => i !== index);
    setCourse({
      ...course,
      timeSlots: updatedTimeSlots,
    });
  };

  return (
    <div className="py-2 pt-6 md:py-12">
      {/* ====================header section==================== */}
      <div className="mt-[60px]">
        {/* =====start stepper===== */}
        <div className="w-full bg-white/70 shadow-md h-28 flex flex-col gap-0.5 sm:gap-1 justify-center items-center">
          <div className="flex gap-0.5 sm:gap-1 px-2 sm:px-4 justify-center items-center max-w-[1320px] mx-auto w-full">
            {/* ===step1==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep1}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b flex items-center justify-center from-[#B49AFF] to-[#FF9AAB] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={aboutIconWhite}
                  alt="about icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step2==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep2}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={photoIconWhite}
                  alt="photo icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step3==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep3}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={certificateIconWhite}
                  alt="certificate icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step4==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep4}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={educationWhite}
                  alt="education icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step5==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep5}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={descriptionIconWhite}
                  alt="description icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step6==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep6}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={videoIconWhite}
                  alt="video icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step7==== */}
            <Link
              href={FluentDoorRoutes.tutorAuthenticationStep7}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={priceIconWhite}
                  alt="price icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
          </div>
        </div>
        {/* ======================================================================== */}
        <div className="w-full flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">Pricing</h1>
          <p className="text-sm sm:text-base">
            Add your available lesson types, durations, and prices. You can also
            offer trial lessons and discounts for lesson packages. This helps
            students choose the best option for their goals and budget.
          </p>

          {/* ================================= */}
          <div className="relative w-full border-b-3 border-[#D2D2D2] pb-4 flex flex-col gap-2">
            <Inputs
              placeholder="Course Title"
              type="text"
              label="Course Title"
              inputIcon={courseTitleIcon}
              width="100%"
              value={course.courseTitle}
              onchange={(e) => {
                setCourse({
                  ...course,
                  courseTitle: e.target.value,
                });
              }}
            />
            <Inputs
              placeholder="Duration in Minute"
              type="text"
              label="Duration in Minute"
              inputIcon={durationTime}
              width="100%"
              value={course.duration}
              onchange={(e) => {
                setCourse({
                  ...course,
                  duration: e.target.value,
                });
              }}
            />
            <Inputs
              placeholder="Price per Hour"
              type="text"
              label="Price per Hour"
              inputIcon={priceIcon}
              width="100%"
              value={course.price}
              onchange={(e) => {
                setCourse({
                  ...course,
                  price: e.target.value,
                });
              }}
            />
            <Inputs
              placeholder="Lesson package"
              type="text"
              label="Lesson package"
              inputIcon={lesson}
              width="100%"
              value={course.lessonPackage}
              onchange={(e) => {
                setCourse({
                  ...course,
                  lessonPackage: e.target.value,
                });
              }}
            />

            {/* =============== */}
            <div className="w-full">
              <label className="text-xs mx-2 mt-2 text-[#45444A]">
                Course Type
              </label>
              <div className="relative">
                <select
                  value={course.courseType}
                  onChange={(e) => {
                    setCourse({
                      ...course,
                      courseType: e.target.value,
                    });
                  }}
                  className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                >
                  <option disabled value="">
                    Course Type
                  </option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>

                <Image
                  src={courseTypeIcon}
                  alt="courseType icon"
                  width={20}
                  height={20}
                  className="absolute top-[12px] left-4 cursor-pointer"
                />
              </div>
            </div>

            {/* =============== */}
            <div className="w-full">
              <label className="text-xs mx-2 mt-2 text-[#45444A]">
                Language
              </label>
              <div className="relative">
                <select
                  value={course.languagePart}
                  onChange={(e) => {
                    setCourse({
                      ...course,
                      languagePart: e.target.value,
                    });
                  }}
                  className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                >
                  <option disabled value="">
                    languages
                  </option>
                  <option value="Arabic">Arabic</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Dutch">Dutch</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Persian">Persian</option>
                  <option value="Russian">Russian</option>
                  <option value="Spanish">Spanish</option>
                </select>

                <Image
                  src={languageIcon}
                  alt="language icon"
                  width={20}
                  height={20}
                  className="absolute top-[12px] left-4 cursor-pointer"
                />
              </div>
            </div>

            <div className=" mt-1 w-full ">
              <label className="pl-2 text-xs">Description</label>
              <textarea
                value={course.description}
                onChange={(e) => {
                  setCourse({
                    ...course,
                    description: e.target.value,
                  });
                }}
                rows={5}
                placeholder="Description"
                className="w-full text-sm border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl p-2 focus:outline-0 bg-white/80"
              ></textarea>
            </div>
          </div>

          {/* زمان‌بندی‌های دوره */}
          <div className="w-full mt-4">
            <h2 className="text-[#45444A] font-bold text-lg mb-2">
              Time Slots
            </h2>

            {course.timeSlots.map((timeSlotItem, index) => (
              <div
                key={index}
                className="relative border border-[#D2D2D2] p-4 rounded-2xl mb-4"
              >
                {course.timeSlots.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveTimeSlot(index)}
                    className="absolute -top-1 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                  >
                    Delete Time Slot
                  </button>
                )}

                {/* ====================== */}
                <div className="w-full mt-3">
                  <label>Days Available</label>
                  <div className="w-full flex flex-wrap gap-x-4 gap-y-0 ">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <CheckBox
                        key={day}
                        label={day}
                        checked={timeSlotItem.daysAvailable.includes(day)}
                        onChange={(e) => {
                          const updatedTimeSlots = [...course.timeSlots];
                          if (e.target.checked) {
                            updatedTimeSlots[index].daysAvailable = [
                              ...updatedTimeSlots[index].daysAvailable,
                              day,
                            ];
                          } else {
                            updatedTimeSlots[index].daysAvailable =
                              updatedTimeSlots[index].daysAvailable.filter(
                                (d) => d !== day
                              );
                          }
                          setCourse({
                            ...course,
                            timeSlots: updatedTimeSlots,
                          });
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* ============== */}

                <div className="w-full mt-4">
                  <label className="text-xs mx-2 mt-2 text-[#45444A]">
                    Time Slots
                  </label>
                  <div className="relative">
                    <select
                      value={timeSlotItem.timeSlotPart}
                      onChange={(e) => {
                        const updatedTimeSlots = [...course.timeSlots];
                        updatedTimeSlots[index].timeSlotPart = e.target.value;
                        setCourse({
                          ...course,
                          timeSlots: updatedTimeSlots,
                        });
                      }}
                      className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option disabled value="">
                        Time Slot
                      </option>
                      <option value="00:00 - 02:00">00:00 - 02:00</option>
                      <option value="02:00 - 04:00">02:00 - 04:00</option>
                      <option value="04:00 - 06:00">04:00 - 06:00</option>
                      <option value="06:00 - 08:00">06:00 - 08:00</option>
                      <option value="08:00 - 10:00">08:00 - 10:00</option>
                      <option value="10:00 - 12:00">10:00 - 12:00</option>
                      <option value="12:00 - 14:00">12:00 - 14:00</option>
                      <option value="14:00 - 16:00">14:00 - 16:00</option>
                      <option value="16:00 - 18:00">16:00 - 18:00</option>
                      <option value="18:00 - 20:00">18:00 - 20:00</option>
                      <option value="20:00 - 22:00">20:00 - 22:00</option>
                      <option value="22:00 - 24:00">22:00 - 24:00</option>
                    </select>

                    <Image
                      src={timeSlot}
                      alt="language icon"
                      width={20}
                      height={20}
                      className="absolute top-[12px] left-4 cursor-pointer"
                    />
                  </div>
                </div>
                {/* ============== */}
                <Inputs
                  placeholder="Start Date"
                  type="Date"
                  label="Start Date"
                  inputIcon={calender}
                  width="100%"
                  value={timeSlotItem.startDate}
                  onchange={(e) => {
                    const updatedTimeSlots = [...course.timeSlots];
                    updatedTimeSlots[index].startDate = e.target.value;
                    setCourse({
                      ...course,
                      timeSlots: updatedTimeSlots,
                    });
                  }}
                />
              </div>
            ))}

            <p
              onClick={handleAddTimeSlot}
              className="text-[#5F33E1] cursor-pointer font-medium mt-2"
            >
              + Add Time Slot
            </p>
          </div>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="button"
              label={"Back"}
              btnIcon={null}
              onclick={() => {
                router.push(FluentDoorRoutes.tutorAuthenticationStep6);
              }}
            />

            <Button
              type="button"
              label={"Submit"}
              disabled={!btnTrigger}
              // onclick={() => {
              //   alert(
              //     "Thank you for your submission! We will review your information and get back to you shortly."
              //   );
              // }}
              onclick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      {isOpen && <SubmitForm onclick={() => setIsOpen(false)} />}
    </div>
  );
};

export default AuthorizationPage7;
