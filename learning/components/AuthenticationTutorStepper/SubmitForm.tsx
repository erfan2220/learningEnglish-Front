"use client";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import { api } from "@/lib/APIs/axiosInstance";
import { useTutorAuthStore } from "@/model/useTutorAuthStore";
import { useRouter } from "next/navigation";

const cancelIcon = "/icons/cancel.svg";

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

function dataUrlToFile(dataUrl: string, filename: string): File | null {
  try {
    if (!dataUrl.startsWith("data:")) return null;
    const [meta, b64] = dataUrl.split(",");
    const mime =
      meta.match(/data:(.*?);base64/)?.[1] || "application/octet-stream";
    const bin = atob(b64);
    const len = bin.length;
    const u8 = new Uint8Array(len);
    for (let i = 0; i < len; i++) u8[i] = bin.charCodeAt(i);
    return new File([u8], filename, { type: mime });
  } catch {
    return null;
  }
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onclick }) => {
  const router = useRouter();
  const { step6 } = useTutorAuthStore(); // expect: { videoFile?: File | null }

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes("/tutorAuthentication")) {
        [
          "firstName",
          "lastName",
          "phoneNumber",
          "country",
          "subjectTeach",
          "languages",
          "tutorProfilePhoto",
          "certifications",
          "educations",
          "tutorAuthStep5",
          "courseData",
        ].forEach(localStorage.removeItem);
      }
    };
  }, []);

  const handleClick = async () => {
    try {
      // --- read localStorage ---
      const firstName = localStorage.getItem("firstName") || "";
      const lastName = localStorage.getItem("lastName") || "";
      const phoneNumber = localStorage.getItem("phoneNumber") || "";
      const country = localStorage.getItem("country") || "";
      const subject = localStorage.getItem("subjectTeach") || '[""]'; // Ensure it is parsed as a
      const photoB64 = localStorage.getItem("tutorProfilePhoto") || "";

      const languagesRaw = localStorage.getItem("languages") || "[]";
      const certsRaw = localStorage.getItem("certifications") || "[]";
      const edusRaw = localStorage.getItem("educations") || "[]";
      const step5Raw = localStorage.getItem("tutorAuthStep5") || "{}";
      const courseRaw = localStorage.getItem("courseData") || "{}";

      // --- parse & normalize ---
      const languagesAny = JSON.parse(languagesRaw);
      const languages_spoken: LanguageEntry[] = Array.isArray(languagesAny)
        ? languagesAny.map((l: any) =>
            typeof l === "string"
              ? { language: l, level: "B1" }
              : {
                  language: l.language ?? "",
                  level: l.level ?? "B1",
                }
          )
        : [];

      const certifications: Certification[] = JSON.parse(certsRaw);
      const educations: Education[] = JSON.parse(edusRaw);
      const step5: TutorAuthStep5 = JSON.parse(step5Raw);
      const course: CourseData = JSON.parse(courseRaw);

      function toISODate(d?: string) {
        if (!d) return "";
        if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
        const dt = new Date(d);
        return Number.isNaN(dt.getTime()) ? "" : dt.toISOString().slice(0, 10);
      }
      // --- build FormData ---
      const fd = new FormData();

      // top-level fields (NO "user" wrapper)
      fd.append("first_name", firstName);
      fd.append("last_name", lastName);
      if (phoneNumber) fd.append("phone_number", phoneNumber);
      if (country) fd.append("country", country);

      const subjectArray = Array.isArray(subject) ? subject : [subject]; // In case it's stored incorrectly
      fd.append("subjects", `"${subject}"`);
      console.log(JSON.stringify(subjectArray));
      fd.append("languages_spoken", JSON.stringify(languages_spoken));

      // profile picture as file
      if (photoB64.startsWith("data:")) {
        const pf = dataUrlToFile(photoB64, "profile.jpg");
        if (pf) fd.append("profile_picture", pf);
      }

      // step 3: certificates (omit nested file unless your backend supports it)
      fd.append(
        "certificates",
        JSON.stringify(
          certifications.map((c) => ({
            title: c.certTitle,
            issued_by: c.issueBy,
            issue_date: toISODate(c.issueDate) || null,
            // certificate_image: (handled by separate endpoint if needed)
          }))
        )
      );

      // step 4: educations
      fd.append(
        "educations",
        JSON.stringify(
          educations.map((e) => ({
            degree: e.degree,
            institution_name: e.institution,
            country: e.country,
            city: e.city,
            field: e.field,
            start_date: toISODate(e.startDate) || null,
            end_date: toISODate(e.endDate) || null,
          }))
        )
      );

      // step 5: texts
      if (step5.bio) fd.append("bio", step5.bio);
      if (step5.teachingStyle) fd.append("teaching_style", step5.teachingStyle);
      if (step5.expect) fd.append("expectation", step5.expect);
      if (step5.goalsTeach) fd.append("description", step5.goalsTeach);

      // step 5: experiences
      fd.append(
        "experiences",
        JSON.stringify(
          (step5.experience || []).map((ex) => ({
            title: ex.experience,
            organization: ex.organization || "",
            country: ex.country,
            city: ex.city,
            start_date: toISODate(ex.startDate) || null,
            end_date: toISODate(ex.endDate) || null,
            description: ex.describe,
          }))
        )
      );

      // step 6: video as file (do NOT send blob: URL)
      if (step6?.videoFile) {
        fd.append("intro_video_file", step6.videoFile);
      }
      // If your backend also accepts a public URL:
      // fd.append("intro_video_url", "https://cdn.example.com/your-video.mp4");

      // step 7: course(s)
      const flatDays = course.timeSlots?.flatMap((t) => t.daysAvailable) ?? [];
      const times = course.timeSlots?.map((t) => t.timeSlotPart) ?? [];
      // courses
      const start = toISODate(course.timeSlots?.[0]?.startDate) || null;

      fd.append(
        "courses",
        JSON.stringify([
          {
            course_title: course.courseTitle || "",
            duration_minutes: Number.parseInt(course.duration || "0", 10) || 0,
            course_type:
              (course.courseType || "").toLowerCase() === "offline"
                ? "offline"
                : "online",
            price_per_hour: Number.parseFloat(course.price || "0") || 0,
            lesson_package: course.lessonPackage || "",
            language: course.languagePart || "",
            days_available: flatDays,
            time_slots: times,
            start_date: start,
            description: course.description || "",
          },
        ])
      );

      // --- POST (let axios set multipart boundary) ---
      const res = await api.post("/api/create-tutor-profile/", fd);
      console.log("Tutor profile created:", res.data);
      alert("✅ Tutor profile created successfully");
      router.push("/dashboard/tutor");
    } catch (err: any) {
      const msg = err?.response?.data
        ? JSON.stringify(err.response.data, null, 2)
        : err?.message || "Unknown error";
      console.error("Error creating tutor profile:", err);
      alert(`❌ Error creating tutor profile\n\n${msg}`);
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
              onclick={onclick}
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
