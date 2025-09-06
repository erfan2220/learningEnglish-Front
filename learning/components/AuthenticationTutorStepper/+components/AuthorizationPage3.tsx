"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Inputs from "@/components/Input/Input";
import { useRouter } from "next/navigation";

// ✅ icons served from /public/icons
const aboutIconWhite = "/icons/aboutIconWhite.svg";
const photoIconWhite = "/icons/photoIconWhite.svg";
const certificateIconWhite = "/icons/certificateIconWhite.svg";
const educationWhite = "/icons/educationWhite.svg";
const descriptionIconWhite = "/icons/descriptionIconWhite.svg";
const videoIconWhite = "/icons/videoIconWhite.svg";
const priceIconWhite = "/icons/priceIconWhite.svg";
const certFile = "/icons/certFile.svg";
const certIcon = "/icons/certificateGray.svg";
const issueByIcon = "/icons/issueBy.svg";
const dateIcon = "/icons/dayIcon.svg";

interface Certification {
  certTitle: string;
  issueBy: string;
  issueDate: string;
  imagePreview: string;
}

const AuthorizationPage3 = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      certTitle: "",
      issueBy: "",
      issueDate: "",
      imagePreview: certFile,
    },
  ]);

  // بارگذاری داده‌ها از localStorage پس از mount
  useEffect(() => {
    const loadFromLocalStorage = () => {
      const savedCertifications = localStorage.getItem("certifications");
      if (savedCertifications) {
        try {
          const parsedCertifications = JSON.parse(savedCertifications);
          // اطمینان از اینکه imagePreviewهای null یا undefined به certFile تبدیل شوند
          const certificationsWithDefaults = parsedCertifications.map(
            (cert: Certification) => ({
              ...cert,
              imagePreview: cert.imagePreview || certFile,
            })
          );
          setCertifications(certificationsWithDefaults);
        } catch (error) {
          console.error("Error parsing certifications from localStorage:", error);
        }
      }
      setIsLoaded(true);
    };

    loadFromLocalStorage();
  }, []);

  // ذخیره داده‌ها در localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("certifications", JSON.stringify(certifications));
    }
  }, [certifications, isLoaded]);

  const btnTrigger = certifications.every(
    (certification) =>
      certification.certTitle !== "" &&
      certification.issueBy !== "" &&
      certification.issueDate !== "" &&
      certification.imagePreview !== certFile
  );

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      {
        certTitle: "",
        issueBy: "",
        issueDate: "",
        imagePreview: certFile,
      },
    ]);
  };

  const handleRemoveCertification = (index: number) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
  };

  const handleChange = (
    index: number,
    field: "certTitle" | "issueBy" | "issueDate",
    value: string
  ) => {
    const updatedCerts = [...certifications];
    updatedCerts[index][field] = value;
    setCertifications(updatedCerts);
  };

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const imageURL = event.target.result as string;
        const updatedCerts = [...certifications];
        updatedCerts[index].imagePreview = imageURL;
        setCertifications(updatedCerts);
      }
    };
    reader.readAsDataURL(file);
  };

  // اگر هنوز داده‌ها لود نشده، loading نمایش دهید
  if (!isLoaded) {
    return (
      <div className="py-2 pt-6 md:py-12 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="py-2 pt-6 md:py-12">
      {/* ====================header section==================== */}
      <div className="mt-[60px]">
        {/* =====start stepper===== */}
        <div className="w-full bg-white/70 shadow-md h-28 flex flex-col gap-0.5 sm:gap-1 justify-center items-center">
          <div className="flex gap-0.5 sm:gap-1 px-2 sm:px-4 justify-center items-center max-w-[1320px] mx-auto w-full">
            {/* ===step1==== */}
            <Link
              href={"/tutorAuthentication/step1"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b flex items-center justify-center from-[#B49AFF] to-[#FF9AAB] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={aboutIconWhite}
                  alt="about icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step2==== */}
            <Link
              href={"/tutorAuthentication/step2"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={photoIconWhite}
                  alt="photo icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step3==== */}
            <Link
              href={"/tutorAuthentication/step3"}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={certificateIconWhite}
                  alt="certificate icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </Link>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step4==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={educationWhite}
                  alt="education icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step5==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={descriptionIconWhite}
                  alt="description icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step6==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={videoIconWhite}
                  alt="video icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step7==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src={priceIconWhite}
                  alt="price icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
          </div>
        </div>
        {/* ======================================================================== */}
        <div className="text-sm sm:text-base flex flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">Certification</h1>
          <p>
            Tell learners about yourself and start building your public tutor
            profile. Your progress is saved as you go, so feel free to return
            anytime to continue.
          </p>

          {/* ================================= */}
          <form className="w-full flex flex-col">
            <div className="w-full flex flex-col text-[#45444A]">
              <div className="w-full flex flex-col gap-1 ">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
                  >
                    {/* delete certification  */}
                    {certifications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveCertification(index)}
                        className="absolute top-0 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                      >
                        Delete Certification
                      </button>
                    )}

                    <div className="w-full">
                      <Inputs
                        placeholder="Certification Title"
                        type="text"
                        inputIcon={certIcon}
                        label="Certification Title"
                        value={cert.certTitle}
                        onchange={(e) =>
                          handleChange(index, "certTitle", e.target.value)
                        }
                        width="100%"
                      />
                    </div>
                    <div className="w-full">
                      <Inputs
                        placeholder="Issue By"
                        type="text"
                        inputIcon={issueByIcon}
                        label="Issue By"
                        value={cert.issueBy}
                        onchange={(e) =>
                          handleChange(index, "issueBy", e.target.value)
                        }
                        width="100%"
                      />
                    </div>
                    <div className="w-full">
                      <Inputs
                        placeholder="Issue Date"
                        type="date"
                        inputIcon={dateIcon}
                        label="Issue Date"
                        value={cert.issueDate}
                        onchange={(e) =>
                          handleChange(index, "issueDate", e.target.value)
                        }
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center my-4">
                      <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
                        <Image
                          src={cert.imagePreview}
                          alt="cert"
                          width={120}
                          height={120}
                          className="object-cover"
                        />
                      </div>
                      <label className="cursor-pointer text-blue-600 underline mt-2">
                        Upload photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(index, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ))}

                <p
                  className="text-[#45444A] font-bold underline hover:cursor-pointer flex items-center justify-center mt-4"
                  onClick={handleAddCertification}
                >
                  + Add Certification
                </p>
              </div>
            </div>
          </form>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="button"
              label={"Back"}
              btnIcon={null}
              onclick={() => router.push("/tutorAuthentication/step2")}
            />

            <Button
              type="button"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={() => router.push("/tutorAuthentication/step4")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage3;