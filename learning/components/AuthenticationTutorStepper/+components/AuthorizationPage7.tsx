"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Inputs from "@/components/Input/Input";

import SubmitForm from "../SubmitForm";
import { FluentDoorRoutes } from "@/routes/routes";
import CheckBox from "@/components/CheckBox.tsx/CheckBox";

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

// تعریف نوع داده برای Time Slot
interface TimeSlot {
  days_available: string[];
  time_slots: string[];
  start_date: string;
}

const AuthorizationPage7 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // مقدار اولیه course منطبق با ساختار backend
  const initialCourse = {
    course_title: "",
    duration_minutes: 0,
    price_per_hour: "",
    lesson_package: "",
    course_type: "",
    language: "",
    description: "",
    start_date: "",
    time_slots: [] as TimeSlot[],
  };

  const [course, setCourse] = useState(initialCourse);

  // ✅ وقتی صفحه لود میشه، course رو از localStorage بخون
  useEffect(() => {
    const storedCourse = localStorage.getItem("courseData");
    if (storedCourse) {
      const parsedCourse = JSON.parse(storedCourse);
      
      // اطمینان از اینکه time_slots ساختار درستی دارند
      const validatedTimeSlots = parsedCourse.time_slots.map((slot: any) => ({
        days_available: slot.days_available || [],
        time_slots: slot.time_slots || [],
        start_date: slot.start_date || parsedCourse.start_date || "",
      }));
      
      setCourse({
        ...parsedCourse,
        time_slots: validatedTimeSlots,
      });
    }
  }, []);

  // ✅ هر بار که course تغییر کرد، توی localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem("courseData", JSON.stringify(course));
  }, [course]);

  const btnTrigger =
    course.course_title !== "" &&
    course.duration_minutes > 0 &&
    course.price_per_hour !== "" &&
    course.lesson_package !== "" &&
    course.language !== "" &&
    course.course_type !== "" &&
    course.description !== "" &&
    course.start_date !== "" &&
    course.time_slots.length > 0 &&
    course.time_slots.every(
      (slot) => slot.days_available.length > 0 && slot.time_slots.length > 0
    );

  const handleAddTimeSlot = () => {
    setCourse({
      ...course,
      time_slots: [
        ...course.time_slots,
        {
          days_available: [],
          time_slots: [],
          start_date: course.start_date,
        },
      ],
    });
  };

  const handleRemoveTimeSlot = (index: number) => {
    const updatedTimeSlots = course.time_slots.filter((_, i) => i !== index);
    setCourse({
      ...course,
      time_slots: updatedTimeSlots,
    });
  };

  const handleDayToggle = (index: number, day: string) => {
    const updatedTimeSlots = [...course.time_slots];
    if (updatedTimeSlots[index].days_available.includes(day)) {
      updatedTimeSlots[index].days_available = updatedTimeSlots[
        index
      ].days_available.filter((d) => d !== day);
    } else {
      updatedTimeSlots[index].days_available = [
        ...updatedTimeSlots[index].days_available,
        day,
      ];
    }
    setCourse({
      ...course,
      time_slots: updatedTimeSlots,
    });
  };

  const handleTimeSlotAdd = (index: number, timeSlot: string) => {
    const updatedTimeSlots = [...course.time_slots];
    if (!updatedTimeSlots[index].time_slots.includes(timeSlot)) {
      updatedTimeSlots[index].time_slots = [
        ...updatedTimeSlots[index].time_slots,
        timeSlot,
      ];
      setCourse({
        ...course,
        time_slots: updatedTimeSlots,
      });
    }
  };

  const handleTimeSlotRemove = (index: number, timeSlot: string) => {
    const updatedTimeSlots = [...course.time_slots];
    updatedTimeSlots[index].time_slots = updatedTimeSlots[
      index
    ].time_slots.filter((slot) => slot !== timeSlot);
    setCourse({
      ...course,
      time_slots: updatedTimeSlots,
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
            <hr className="border-2 border[#737177] w-full" />
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
              value={course.course_title}
              onchange={(e) => {
                setCourse({
                  ...course,
                  course_title: e.target.value,
                });
              }}
            />
            <Inputs
              placeholder="Duration in Minute"
              type="number"
              label="Duration in Minute"
              inputIcon={durationTime}
              width="100%"
              value={course.duration_minutes}
              onchange={(e) => {
                setCourse({
                  ...course,
                  duration_minutes: parseInt(e.target.value) || 0,
                });
              }}
            />
            <Inputs
              placeholder="Price per Hour"
              type="text"
              label="Price per Hour"
              inputIcon={priceIcon}
              width="100%"
              value={course.price_per_hour}
              onchange={(e) => {
                setCourse({
                  ...course,
                  price_per_hour: e.target.value,
                });
              }}
            />
            <Inputs
              placeholder="Lesson package"
              type="text"
              label="Lesson package"
              inputIcon={lesson}
              width="100%"
              value={course.lesson_package}
              onchange={(e) => {
                setCourse({
                  ...course,
                  lesson_package: e.target.value,
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
                  value={course.course_type}
                  onChange={(e) => {
                    setCourse({
                      ...course,
                      course_type: e.target.value,
                    });
                  }}
                  className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                >
                  <option disabled value="">
                    Course Type
                  </option>
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
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
                  value={course.language}
                  onChange={(e) => {
                    setCourse({
                      ...course,
                      language: e.target.value,
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

            <div className="mt-1 w-full">
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
            <Inputs
              placeholder="Start Date"
              type="Date"
              label="Start Date"
              inputIcon={calender}
              width="100%"
              value={course.start_date}
              onchange={(e) => {
                const newStartDate = e.target.value;
                setCourse({
                  ...course,
                  start_date: newStartDate,
                  // به روز رسانی start_date برای تمام time slots
                  time_slots: course.time_slots.map(slot => ({
                    ...slot,
                    start_date: newStartDate
                  }))
                });
              }}
            />
          </div>

          {/* زمان‌بندی‌های دوره */}
          <div className="w-full mt-4">
            <h2 className="text-[#45444A] font-bold text-lg mb-2">
              Time Slots
            </h2>

            {course.time_slots.map((timeSlotItem, index) => (
              <div
                key={index}
                className="relative border border-[#D2D2D2] p-4 rounded-2xl mb-4"
              >
                {course.time_slots.length > 1 && (
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
                  <label className="text-xs mx-2 text-[#45444A]">Days Available</label>
                  <div className="w-full flex flex-wrap gap-x-4 gap-y-2 mt-2">
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
                        checked={timeSlotItem.days_available.includes(day)}
                        onChange={() => handleDayToggle(index, day)}
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
                      onChange={(e) => {
                        if (e.target.value) {
                          handleTimeSlotAdd(index, e.target.value);
                          e.target.value = ""; // Reset selection
                        }
                      }}
                      className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                      <option value="">Select Time Slot</option>
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

                {/* نمایش time slots انتخاب شده */}
                <div className="mt-4">
                  {timeSlotItem.time_slots.length > 0 ? (
                    timeSlotItem.time_slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2"
                      >
                        <span>{slot}</span>
                        <button
                          type="button"
                          onClick={() => handleTimeSlotRemove(index, slot)}
                          className="text-red-500 font-bold text-lg"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No time slots selected</p>
                  )}
                </div>
                {/* ============== */}
              </div>
            ))}

            <button
              onClick={handleAddTimeSlot}
              className="text-[#5F33E1] cursor-pointer font-medium mt-2 flex items-center"
            >
              <span className="text-lg mr-1">+</span> Add Time Slot
            </button>
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