"use client";
import React from "react";
import Button from "../Button/Button";
import axios from "axios";
import { useTutorAuthStore } from "@/model/useTutorAuthStore"; // ✅ اضافه کن

const cancelIcon = "/icons/cancel.svg";

const SubmitForm = ({ onclick }: { onclick: () => void }) => {
  // ✅ گرفتن ویدیو از Zustand
  const { step6 } = useTutorAuthStore();

  const handleClick = async () => {
    try {
      // گرفتن دیتا از localStorage
      const firstName = localStorage.getItem("firstName");
      const lastName = localStorage.getItem("lastName");
      const phoneNumber = localStorage.getItem("phoneNumber");
      const country = localStorage.getItem("country");
      const subjectTeach = localStorage.getItem("subjectTeach");
      const languageEntries = JSON.parse(localStorage.getItem("languageEntries") || "[]");
      const tutorProfilePhoto = localStorage.getItem("tutorProfilePhoto");
      const certifications = JSON.parse(localStorage.getItem("certifications") || "[]");
      const educations = JSON.parse(localStorage.getItem("educations") || "[]");
      const tutorAuthStep5 = JSON.parse(localStorage.getItem("tutorAuthStep5") || "{}");
      const courseData = JSON.parse(localStorage.getItem("courseData") || "{}");

      // مپ کردن به فرمت API
      const tutorData = {
        user: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          country: country,
          subjects: [subjectTeach],
          languages_spoken: languageEntries.map((l: any) => l.language),
          level: languageEntries[0]?.level || "Beginner",
        },
        profile_picture: tutorProfilePhoto, // احتمالا بیس۶۴ هست
        certificates: certifications.map((c: any) => ({
          title: c.certTitle,
          issued_by: c.issueBy,
          issue_date: c.issueDate,
          certificate_image: c.imagePreview || "",
        })),
        educations: educations.map((e: any) => ({
          degree: e.degree,
          institution_name: e.institution,
          country: e.country,
          city: e.city,
          field: e.field,
          start_date: e.startDate,
          end_date: e.endDate,
        })),
        bio: tutorAuthStep5.bio,
        teaching_style: tutorAuthStep5.teachingStyle,
        description: tutorAuthStep5.goalsTeach,
        expectation: tutorAuthStep5.expect,
        experiences:
          tutorAuthStep5.experience?.map((ex: any) => ({
            title: ex.experience,
            organization: ex.organization || "",
            city: ex.city,
            country: ex.country,
            start_date: ex.startDate,
            end_date: ex.endDate,
            description: ex.describe,
          })) || [],
        // ✅ ویدیو از Zustand
        intro_video_url: step6.videoData || "",
        courses: [
          {
            course_title: courseData.courseTitle,
            duration_minutes: parseInt(courseData.duration || "0"),
            course_type: "online",
            price_per_hour: parseFloat(courseData.price || "0"),
            lesson_package: courseData.lessonPackage,
            language: courseData.languagePart,
            days_available: courseData.timeSlots?.flatMap((t: any) => t.daysAvailable) || [],
            time_slots: courseData.timeSlots?.map((t: any) => t.timeSlotPart) || [],
            start_date: courseData.timeSlots?.[0]?.startDate || "",
            description: courseData.description,
          },
        ],
      };

      // ارسال به API
      const response = await axios.post(
        "http://localhost:8000/api/create-tutor-profile/",
        tutorData
      );
      console.log("Tutor profile created:", response.data);
      alert("✅ اطلاعات شما با موفقیت ثبت شد!");
    } catch (error) {
      console.error("Error creating tutor profile:", error);
      alert("❌ خطا در ارسال اطلاعات");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative max-w-3xl bg-white p-6 rounded-lg shadow-lg w-full">
        <div>
          <p>Are You Sure You Want to Submit Your Information?</p>

          <div className="flex items-center justify-center w-full gap-4 mt-4">
            <Button
              label="Cancel"
              btnIcon={cancelIcon}
              type="button"
              widthBtn="100%"
              colorBtn="#FF3164"
              colorBtnHover="#a50034"
              colorBtnActive="#ff6f61"
              onclick={() => {
                onclick();
              }}
            />
            <Button
              label="Submit"
              type="button"
              widthBtn="100%"
              onclick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
