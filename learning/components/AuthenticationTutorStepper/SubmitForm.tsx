"use client";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { useTutorAuthStore } from "@/model/useTutorAuthStore";
import { useRouter } from "next/navigation";

const cancelIcon = "/icons/cancel.svg";

// Define interfaces for your data structures
interface LanguageEntry {
  language: string;
  level: string;
}

interface Certification {
  certTitle: string;
  issueBy: string;
  issueDate: string;
  imagePreview?: string;
}

interface Education {
  degree: string;
  institution: string;
  country: string;
  city: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  experience: string;
  organization?: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  describe: string;
}

interface TimeSlot {
  daysAvailable: string[];
  timeSlotPart: string;
  startDate: string;
}

interface CourseData {
  courseTitle: string;
  duration: string;
  price: string;
  lessonPackage: string;
  courseType: string;
  languagePart: string;
  timeSlots?: TimeSlot[];
  description: string;
}

interface TutorAuthStep5 {
  bio: string;
  teachingStyle: string;
  goalsTeach: string;
  expect: string;
  experience?: Experience[];
}

interface SubmitFormProps {
  onclick: () => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onclick }) => {
  const { step6 } = useTutorAuthStore();
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes("/tutorAuthentication")) {
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("country");
        localStorage.removeItem("subjectTeach");
        localStorage.removeItem("languages");
        localStorage.removeItem("certifications");
        localStorage.removeItem("educations");
        localStorage.removeItem("tutorAuthStep5");
        localStorage.removeItem("courseData");
      }
    };
  }, []);

  const handleClick = async () => {
    try {
      // Gather data from localStorage with proper typing
      const firstName = localStorage.getItem("firstName") || "";
      const lastName = localStorage.getItem("lastName") || "";
      const phoneNumber = localStorage.getItem("phoneNumber") || "";
      const country = localStorage.getItem("country") || "";
      const subjectTeach = localStorage.getItem("subjectTeach") || "";

      const languageEntries: LanguageEntry[] = JSON.parse(
        localStorage.getItem("languages") || "[]"
      );

      const tutorProfilePhoto = localStorage.getItem("tutorProfilePhoto") || "";

      const certifications: Certification[] = JSON.parse(
        localStorage.getItem("certifications") || "[]"
      );

      const educations: Education[] = JSON.parse(
        localStorage.getItem("educations") || "[]"
      );

      const tutorAuthStep5: TutorAuthStep5 = JSON.parse(
        localStorage.getItem("tutorAuthStep5") || "{}"
      );

      const courseData: CourseData = JSON.parse(
        localStorage.getItem("courseData") || "{}"
      );

      // Map data to API format
      const tutorData = {
        user: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          country: country,
          subjects: [subjectTeach],
          languages_spoken: languageEntries,
        },
        profile_picture: tutorProfilePhoto,
        certificates: certifications.map((c) => ({
          title: c.certTitle,
          issued_by: c.issueBy,
          issue_date: c.issueDate,
          certificate_image: c.imagePreview || "",
        })),
        educations: educations.map((e) => ({
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
          tutorAuthStep5.experience?.map((ex) => ({
            title: ex.experience,
            organization: ex.organization || "",
            city: ex.city,
            country: ex.country,
            start_date: ex.startDate,
            end_date: ex.endDate,
            description: ex.describe,
          })) || [],
        intro_video_url: step6.videoData || "",
        courses: [
          {
            course_title: courseData.courseTitle,
            duration_minutes: parseInt(courseData.duration || "0"),
            course_type: courseData.courseType,
            price_per_hour: parseFloat(courseData.price || "0"),
            lesson_package: courseData.lessonPackage,
            language: courseData.languagePart,
            days_available:
              courseData.timeSlots?.flatMap((t) => t.daysAvailable) || [],
            time_slots: courseData.timeSlots?.map((t) => t.timeSlotPart) || [],
            start_date: courseData.timeSlots?.[0]?.startDate || "",
            description: courseData.description,
          },
        ],
      };

      // console.log(courseData.courseType);

      // Send to API
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/create-tutor-profile/`,
        tutorData
      );
      console.log("Tutor profile created:", response.data);
      alert("✅ Tutor profile created successfully");
      router.push("/dashboard/tutor");
    } catch (error) {
      console.error("Error creating tutor profile:", error);
      alert("❌ Error creating tutor profile");
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
