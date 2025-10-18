"use client";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage3Components/stepper";
import CertificationsList from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage3Components/CertificationsList";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

// import icons as modules so Stepper works with StaticImageData
import aboutIconWhite from "../../../assets/icons/aboutIconWhite.svg";
import photoIconWhite from "../../../assets/icons/photoIconWhite.svg";
import certificateIconWhite from "../../../assets/icons/certificateIconWhite.svg";
import educationWhite from "../../../assets/icons/educationWhite.svg";
import descriptionIconWhite from "../../../assets/icons/descriptionIconWhite.svg";
import videoIconWhite from "../../../assets/icons/videoIconWhite.svg";
import priceIconWhite from "../../../assets/icons/priceIconWhite.svg";

const STORAGE_KEY = "certifications";
const CERT_PLACEHOLDER = "/icons/certFile.svg";

export default function AuthorizationPage3() {
  const router = useRouter();
  const [formValid, setFormValid] = useState(false);

  const steps = [
    { href: FluentDoorRoutes.tutorAuthenticationStep1, icon: aboutIconWhite, alt: "about" },
    { href: FluentDoorRoutes.tutorAuthenticationStep2, icon: photoIconWhite, alt: "photo" },
    { href: FluentDoorRoutes.tutorAuthenticationStep3, icon: certificateIconWhite, alt: "certificate" },
    { icon: educationWhite, alt: "education" },
    { icon: descriptionIconWhite, alt: "description" },
    { icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  return (
      <div className="py-2 pt-6 md:py-12">
        <div className="mt-[60px]">
          {/* Stepper */}
          <Stepper steps={steps} activeIndex={2} />

          {/* Card */}
          <div className="text-sm sm:text-base flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
            <h1 className="text-[#45444A] font-bold text-xl">Certification</h1>
            <p>
              Tell learners about your credentials. Your progress is saved as you go, so feel free to return anytime to continue.
            </p>

            <form className="w-full flex flex-col">
              <div className="w-full flex flex-col text-[#45444A] gap-1">
                <CertificationsList
                    storageKey={STORAGE_KEY}
                    placeholderImg={CERT_PLACEHOLDER}
                    onValidityChange={setFormValid}
                />
              </div>
            </form>

            <div className="flex items-center justify-between mt-6 w-full">
              <Button
                  type="button"
                  label={"Back"}
                  btnIcon={null}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep2)}
              />
              <Button
                  type="button"
                  label={"Next Step"}
                  disabled={!formValid}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep4)}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
