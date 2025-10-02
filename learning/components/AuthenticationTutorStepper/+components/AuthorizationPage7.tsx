"use client";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage7Components/stepper";
import CourseBasicsForm, { CourseBasics } from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage7Components/CourseBasicsForm";
import TimeSlotsList from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage7Components/TimeSlotsList";
import SubmitForm from "../SubmitForm";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

// Stepper icons as modules (StaticImageData)
import aboutIconWhite from "@/assets/icons/aboutIconWhite.svg";
import photoIconWhite from "@/assets/icons/photoIconWhite.svg";
import certificateIconWhite from "@/assets/icons/certificateIconWhite.svg";
import educationWhite from "@/assets/icons/educationWhite.svg";
import descriptionIconWhite from "@/assets/icons/descriptionIconWhite.svg";
import videoIconWhite from "@/assets/icons/videoIconWhite.svg";
import priceIconWhite from "@/assets/icons/priceIconWhite.svg";

type TimeSlotData = {
  daysAvailable: string[];
  timeSlotPart: string;
  startDate: string;
};

type CourseData = CourseBasics & { timeSlots: TimeSlotData[] };

const STORAGE_KEY = "courseData";

const INITIAL_COURSE: CourseData = {
  courseTitle: "",
  duration: "",
  price: "",
  lessonPackage: "",
  courseType: "",
  languagePart: "",
  description: "",
  timeSlots: [{ daysAvailable: [], timeSlotPart: "", startDate: "" }],
};

export default function AuthorizationPage7() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [course, setCourse] = useState<CourseData>(INITIAL_COURSE);
  const [timeSlotsValid, setTimeSlotsValid] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed: CourseData = JSON.parse(raw);
      // ensure at least one slot
      if (!parsed.timeSlots || !parsed.timeSlots.length) {
        parsed.timeSlots = [{ daysAvailable: [], timeSlotPart: "", startDate: "" }];
      }
      setCourse(parsed);
    } catch {
      // ignore parse errors
    }
  }, []);

  // persist to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(course));
    } catch {}
  }, [course]);

  // validity for basics
  const basicsValid = useMemo(() => {
    const v = course;
    return (
        v.courseTitle.trim() &&
        v.duration.trim() &&
        v.price.trim() &&
        v.lessonPackage.trim() &&
        v.courseType.trim() &&
        v.languagePart.trim() &&
        v.description.trim()
    );
  }, [course]);

  const canSubmit = Boolean(basicsValid && timeSlotsValid);

  const steps = [
    { href: FluentDoorRoutes.tutorAuthenticationStep1, icon: aboutIconWhite, alt: "about" },
    { href: FluentDoorRoutes.tutorAuthenticationStep2, icon: photoIconWhite, alt: "photo" },
    { href: FluentDoorRoutes.tutorAuthenticationStep3, icon: certificateIconWhite, alt: "certificate" },
    { href: FluentDoorRoutes.tutorAuthenticationStep4, icon: educationWhite, alt: "education" },
    { href: FluentDoorRoutes.tutorAuthenticationStep5, icon: descriptionIconWhite, alt: "description" },
    { href: FluentDoorRoutes.tutorAuthenticationStep6, icon: videoIconWhite, alt: "video" },
    { href: FluentDoorRoutes.tutorAuthenticationStep7, icon: priceIconWhite, alt: "price" },
  ];

  return (
      <div className="py-2 pt-6 md:py-12">
        <div className="mt-[60px]">
          {/* Stepper */}
          <Stepper steps={steps} activeIndex={6} />

          {/* Card */}
          <div className="w-full flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
            <h1 className="text-[#45444A] font-bold text-xl">Pricing</h1>
            <p className="text-sm sm:text-base">
              Add your available lesson types, durations, and prices. You can also offer trial lessons and discounts for
              lesson packages. This helps students choose the best option for their goals and budget.
            </p>

            {/* Basics */}
            <CourseBasicsForm
                value={course}
                onChange={(k, v) => setCourse((prev) => ({ ...prev, [k]: v }))}
            />

            {/* Time slots */}
            <div className="w-full mt-4">
              <h2 className="text-[#45444A] font-bold text-lg mb-2">Time Slots</h2>
              <TimeSlotsList
                  items={course.timeSlots}
                  onItemsChange={(items) => setCourse((prev) => ({ ...prev, timeSlots: items }))}
                  onValidityChange={setTimeSlotsValid}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6 w-full">
              <Button
                  type="button"
                  label={"Back"}
                  btnIcon={null}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep6)}
              />
              <Button
                  type="button"
                  label={"Submit"}
                  disabled={!canSubmit}
                  onclick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>

        {isOpen && <SubmitForm onclick={() => setIsOpen(false)} />}
      </div>
  );
}
