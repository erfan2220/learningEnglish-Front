"use client";
import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Layout from "../../Layout/Layout";
import Inputs from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage1Components/stepper";
import SelectWithIcon from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage1Components/SelectWithIcon";
import LanguageList from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage1Components/LanguageList";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

// icons
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";
const countryIcon = "/icons/locationGray.svg";
const phoneIcon = "/icons/phoneGray.svg";
const subjectIcon = "/icons/educationGray.svg";
const userIcon = "/icons/userIconGray.svg";

import { countryList } from "../../../mock/countryList";

/** tiny in-file hook so you don't need a separate hooks file */
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue as T);

  // read on mount (SSR-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return;
    try {
      setValue(JSON.parse(raw));
    } catch {
      setValue(raw as unknown as T);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // persist on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const toStore =
        typeof value === "string" ? (value as string) : JSON.stringify(value);
      window.localStorage.setItem(key, toStore);
    } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}

export default function AuthorizationPage1() {
  const router = useRouter();

  // Local storage-backed state
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [phoneNumber, setPhoneNumber] = useLocalStorage("phoneNumber", "");
  const [selectedCountry, setSelectedCountry] = useLocalStorage("country", "");
  const [selectedSubject, setSelectedSubject] = useLocalStorage<string[]>(
    "subjectTeach",
    []
  );
  const [languages, setLanguages] = useLocalStorage<string[]>("languages", [
    "",
  ]);

  const canContinue = useMemo(
    () =>
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      selectedCountry.trim() !== "" &&
      selectedSubject.length > 0 && // Ensure selectedSubject is not an empty array
      selectedSubject.every((subject) => subject.trim() !== "") && // Ensure each subject is non-empty
      languages.every((l) => l.trim() !== ""),
    [
      firstName,
      lastName,
      phoneNumber,
      selectedCountry,
      selectedSubject,
      languages,
    ]
  );

  const steps = [
    {
      href: FluentDoorRoutes.tutorAuthenticationStep1,
      icon: aboutIconWhite,
      alt: "about",
    },
    { icon: photoIconWhite, alt: "photo" },
    { icon: certificateIconWhite, alt: "certificate" },
    { icon: educationWhite, alt: "education" },
    { icon: descriptionIconWhite, alt: "description" },
    { icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  console.log({
    selectedCountry,
    selectedSubject,
    languages,
    canContinue,
  });

  return (
    <div className="py-2 pt-6 md:py-12">
      <div className="mt-[60px]">
        {/* Stepper */}
        <Stepper steps={steps} activeIndex={0} />

        {/* Card */}
        <div className="flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">About</h1>
          <p>
            Tell learners about yourself and start building your public tutor
            profile. Your progress is saved as you go, so feel free to return
            anytime to continue.
          </p>

          <form className="w-full flex flex-col">
            <div className="w-full flex flex-col text-[#45444A] gap-1">
              <Inputs
                type="text"
                placeholder="First Name"
                label="First Name"
                width="100%"
                inputIcon={userIcon}
                value={firstName}
                onchange={(e) => setFirstName(e.target.value)}
              />

              <Inputs
                type="text"
                placeholder="Last Name"
                label="Last Name"
                width="100%"
                inputIcon={userIcon}
                value={lastName}
                onchange={(e) => setLastName(e.target.value)}
              />

              <Inputs
                type="text"
                placeholder="Phone Number"
                label="Phone Number"
                width="100%"
                inputIcon={phoneIcon}
                value={phoneNumber}
                onchange={(e) => setPhoneNumber(e.target.value)}
              />

              <SelectWithIcon
                label="Country"
                value={selectedCountry}
                onChange={setSelectedCountry}
                icon={countryIcon}
                options={countryList.map((c) => ({ value: c, label: c }))}
                placeholder="Country"
              />

              <SelectWithIcon
                label="Subject you teach"
                value={selectedSubject[0]} // Displaying the first subject in the array
                onChange={(value) => setSelectedSubject([`${value}`])}
                icon={subjectIcon}
                options={["Chinese", "English", "French", "Persian"].map(
                  (s) => ({ value: s, label: s })
                )}
                placeholder="subject"
              />

              <LanguageList value={languages} onChange={setLanguages} />
            </div>
          </form>

          <div className="flex items-center justify-end w-full mt-8">
            <Button
              type="button"
              label={"Next Step"}
              disabled={!canContinue}
              onclick={() =>
                router.push(FluentDoorRoutes.tutorAuthenticationStep2)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
