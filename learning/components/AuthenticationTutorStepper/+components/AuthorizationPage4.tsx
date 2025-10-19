"use client";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage4Components/stepper";
import EducationsList from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage4Components/EducationsList";
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

export default function AuthorizationPage4() {
  const router = useRouter();
  const [formValid, setFormValid] = useState(false);

  const steps = [
    { href: FluentDoorRoutes.tutorAuthenticationStep1, icon: aboutIconWhite, alt: "about" },
    { href: FluentDoorRoutes.tutorAuthenticationStep2, icon: photoIconWhite, alt: "photo" },
    { href: FluentDoorRoutes.tutorAuthenticationStep3, icon: certificateIconWhite, alt: "certificate" },
    { href: FluentDoorRoutes.tutorAuthenticationStep4, icon: educationWhite, alt: "education" },
    { icon: descriptionIconWhite, alt: "description" },
    { icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  return (
      <div className="py-2 pt-6 md:py-12">
        <div className="mt-[60px]">
          {/* Stepper */}
          <Stepper steps={steps} activeIndex={3} />

          {/* Card */}
          <div className="flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
            <h1 className="text-[#45444A] font-bold text-xl">Education</h1>
            <p>Mention your academic degrees to show students your expertise and qualifications.</p>

            <form className="w-full">
              <EducationsList
                  countryOptions={countryList}
                  onValidityChange={setFormValid}
              />
            </form>

            <div className="flex items-center justify-between mt-6 w-full">
              <Button
                  type="button"
                  label={"Back"}
                  btnIcon={null}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep3)}
              />

              <Button
                  type="button"
                  label={"Next Step"}
                  disabled={!formValid}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep5)}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
