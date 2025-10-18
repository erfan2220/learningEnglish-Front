"use client";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage2Components/stepper";
import PhotoUploader from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage2Components/PhotoUploader";
import PhotoGuidelines from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage2Components/PhotoGuidelines";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

// stepper icons (module imports so Stepper works with StaticImageData)
import aboutIconWhite from "../../../assets/icons/aboutIconWhite.svg";
import photoIconWhite from "../../../assets/icons/photoIconWhite.svg";
import certificateIconWhite from "../../../assets/icons/certificateIconWhite.svg";
import educationWhite from "../../../assets/icons/educationWhite.svg";
import descriptionIconWhite from "../../../assets/icons/descriptionIconWhite.svg";
import videoIconWhite from "../../../assets/icons/videoIconWhite.svg";
import priceIconWhite from "../../../assets/icons/priceIconWhite.svg";

const PLACEHOLDER = "/icons/profilePhoto.svg";
const STORAGE_KEY = "tutorProfilePhoto";

export default function AuthorizationPage2() {
  const router = useRouter();
  const [hasPhoto, setHasPhoto] = useState(false);

  const steps = [
    { href: FluentDoorRoutes.tutorAuthenticationStep1, icon: aboutIconWhite, alt: "about" },
    { href: FluentDoorRoutes.tutorAuthenticationStep2, icon: photoIconWhite, alt: "photo" },
    { icon: certificateIconWhite, alt: "certificate" },
    { icon: educationWhite, alt: "education" },
    { icon: descriptionIconWhite, alt: "description" },
    { icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  return (
      <div className="py-2 pt-6 md:py-12">
        <div className="mt-[60px]">
          {/* Stepper */}
          <Stepper steps={steps} activeIndex={1} />

          {/* Card */}
          <div className="flex text-sm sm:text-base flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
            <PhotoGuidelines />

            <PhotoUploader
                storageKey={STORAGE_KEY}
                placeholderSrc={PLACEHOLDER}
                maxSizeMB={2}
                onChange={(dataUrl) => setHasPhoto(Boolean(dataUrl))}
            />

            <div className="flex items-center justify-between mt-6 w-full">
              <Button
                  type="button"
                  label={"Back"}
                  btnIcon={null}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep1)}
              />
              <Button
                  type="button"
                  label={"Next Step"}
                  disabled={!hasPhoto}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep3)}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
