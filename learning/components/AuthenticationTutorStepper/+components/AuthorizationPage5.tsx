"use client";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/Common/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage5Components/stepper";
import DescriptionFields from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage5Components/DescriptionFields";
import ExperiencesList from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage5Components/ExperiencesList";
import { countryList } from "@/mock/countryList";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

// Stepper icons as modules (StaticImageData)
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";

type Experience = {
  experience: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  describe: string;
};

const STORAGE_KEY = "tutorAuthStep5";

export default function AuthorizationPage5() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  // text fields
  const [bio, setBio] = useState("");
  const [teachingStyle, setTeachingStyle] = useState("");
  const [goalsTeach, setGoalsTeach] = useState("");
  const [expect, setExpect] = useState("");

  // experiences
  const [experience, setExperience] = useState<Experience[]>([
    {
      experience: "",
      country: "",
      city: "",
      startDate: "",
      endDate: "",
      describe: "",
    },
  ]);
  const [experiencesValid, setExperiencesValid] = useState(false);

  // hydrate from localStorage (with normalization if older shape exists)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);

        const normalize = (arr: any[]): Experience[] =>
          (Array.isArray(arr) ? arr : []).map((it) => ({
            experience: (it.experience ?? it.title ?? "") as string,
            country: (it.country ?? "") as string,
            city: (it.city ?? "") as string,
            startDate: (it.startDate ?? "") as string,
            endDate: (it.endDate ?? "") as string,
            describe: (it.describe ?? it.description ?? "") as string,
          }));

        setBio(data.bio ?? "");
        setTeachingStyle(data.teachingStyle ?? "");
        setGoalsTeach(data.goalsTeach ?? "");
        setExpect(data.expect ?? "");
        setExperience(
          data.experience && data.experience.length
            ? normalize(data.experience)
            : [
                {
                  experience: "",
                  country: "",
                  city: "",
                  startDate: "",
                  endDate: "",
                  describe: "",
                },
              ]
        );
      }
    } catch {
      // ignore parse errors; keep defaults
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // persist to localStorage
  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ bio, teachingStyle, goalsTeach, expect, experience })
      );
    } catch {}
  }, [bio, teachingStyle, goalsTeach, expect, experience, isLoaded]);

  // overall validity
  const safe = (v?: string) => (v ?? "").trim();
  const textValid = useMemo(
    () =>
      !!(safe(bio) && safe(teachingStyle) && safe(goalsTeach) && safe(expect)),
    [bio, teachingStyle, goalsTeach, expect]
  );

  const canContinue = Boolean(textValid && experiencesValid);

  console.log("canContinue", canContinue);
  console.log("textValid", textValid);
  console.log("experiencesValid", experiencesValid);

  const steps = [
    {
      href: FluentDoorRoutes.tutorAuthenticationStep1,
      icon: aboutIconWhite,
      alt: "about",
    },
    {
      href: FluentDoorRoutes.tutorAuthenticationStep2,
      icon: photoIconWhite,
      alt: "photo",
    },
    {
      href: FluentDoorRoutes.tutorAuthenticationStep3,
      icon: certificateIconWhite,
      alt: "certificate",
    },
    {
      href: FluentDoorRoutes.tutorAuthenticationStep4,
      icon: educationWhite,
      alt: "education",
    },
    {
      href: FluentDoorRoutes.tutorAuthenticationStep5,
      icon: descriptionIconWhite,
      alt: "description",
    },
    { icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  if (!isLoaded) {
    return (
      <div className="py-2 pt-6 md:py-12 flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="py-2 pt-6 md:py-12">
      <div className="mt-[60px]">
        {/* Stepper */}
        <Stepper steps={steps} activeIndex={4} />

        {/* Card */}
        <div className="flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">Description</h1>
          <p>
            Please write 3–5 short paragraphs to describe yourself, your
            teaching style, and what students can expect from your lessons. This
            helps learners decide if you’re the right fit for them.
          </p>

          <form className="w-full">
            <DescriptionFields
              bio={bio}
              teachingStyle={teachingStyle}
              goalsTeach={goalsTeach}
              expect={expect}
              onChange={(field, val) => {
                if (field === "bio") setBio(val);
                if (field === "teachingStyle") setTeachingStyle(val);
                if (field === "goalsTeach") setGoalsTeach(val);
                if (field === "expect") setExpect(val);
              }}
            />

            <ExperiencesList
              items={experience}
              countryOptions={countryList}
              onItemsChange={setExperience}
              onValidityChange={setExperiencesValid}
            />
          </form>

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="button"
              label={"Back"}
              btnIcon={null}
              onclick={() =>
                router.push(FluentDoorRoutes.tutorAuthenticationStep4)
              }
            />

            <Button
              type="button"
              label={"Next Step"}
              disabled={!canContinue}
              onclick={() =>
                router.push(FluentDoorRoutes.tutorAuthenticationStep6)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
