"use client";
import React from "react";
import Button from "@/components/Common/Button/Button";
import Stepper from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage6Components/stepper";
import VideoUploader from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage6Components/VideoUploader";
import VideoGuidelines from "@/components/AuthenticationTutorStepper/+components/AuthorizationPage6Components/VideoGuidelines";
import { useRouter } from "next/navigation";
import { useTutorAuthStore } from "@/model/useTutorAuthStore";
import { FluentDoorRoutes } from "@/routes/routes";

// Stepper icons as modules (StaticImageData)
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";

export default function AuthorizationPage6() {
  const router = useRouter();
  const { step6, setStep6Data, clearStep6Data } = useTutorAuthStore();

  const steps = [
    { href: FluentDoorRoutes.tutorAuthenticationStep1, icon: aboutIconWhite, alt: "about" },
    { href: FluentDoorRoutes.tutorAuthenticationStep2, icon: photoIconWhite, alt: "photo" },
    { href: FluentDoorRoutes.tutorAuthenticationStep3, icon: certificateIconWhite, alt: "certificate" },
    { href: FluentDoorRoutes.tutorAuthenticationStep4, icon: educationWhite, alt: "education" },
    { href: FluentDoorRoutes.tutorAuthenticationStep5, icon: descriptionIconWhite, alt: "description" },
    { href: FluentDoorRoutes.tutorAuthenticationStep6, icon: videoIconWhite, alt: "video" },
    { icon: priceIconWhite, alt: "price" },
  ];

  const canContinue = Boolean(step6.videoFile);

  return (
      <div className="py-2 pt-6 md:py-12">
        <div className="mt-[60px]">
          {/* Stepper */}
          <Stepper steps={steps} activeIndex={5} />

          {/* Card */}
          <div className="flex flex-col justify-start text-sm sm:text-base text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
            <VideoGuidelines />

            <VideoUploader
                initialPreviewUrl={step6.videoData}              // uses your persisted preview string
                file={step6.videoFile}
                onChange={(file, previewUrl) => setStep6Data(previewUrl, file)} // store both
                onClear={clearStep6Data}
                maxSizeMB={20}
            />

            <div className="flex items-center justify-between mt-6 w-full">
              <Button
                  type="button"
                  label={"Back"}
                  btnIcon={null}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep5)}
              />
              <Button
                  type="button"
                  label={"Next Step"}
                  disabled={!canContinue}
                  onclick={() => router.push(FluentDoorRoutes.tutorAuthenticationStep7)}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
