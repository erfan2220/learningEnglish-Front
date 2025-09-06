"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const AuthorizationPage2 = () => {
  const router = useRouter();
  
  // کلید localStorage
  const STORAGE_KEY = "tutorProfilePhoto";

  // تابع برای دریافت داده اولیه از localStorage
  const getInitialImagePreview = () => {
    if (typeof window !== "undefined") {
      const storedImage = localStorage.getItem(STORAGE_KEY);
      return storedImage || "/icons/profilePhoto.svg";
    }
    return "/icons/profilePhoto.svg";
  };

  const [imagePreview, setImagePreview] = useState(getInitialImagePreview);

  // همگام‌سازی state با localStorage هر زمان که imagePreview تغییر کند
  useEffect(() => {
    if (typeof window !== "undefined" && imagePreview !== "/icons/profilePhoto.svg") {
      localStorage.setItem(STORAGE_KEY, imagePreview);
    }
  }, [imagePreview]);

  const btnTrigger = imagePreview !== "/icons/profilePhoto.svg" && imagePreview !== "";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // بررسی نوع فایل
    if (!file.type.startsWith('image/')) {
      alert("لطفاً یک فایل تصویری انتخاب کنید");
      return;
    }

    // بررسی حجم فایل (حداکثر 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("حجم فایل باید کمتر از 2MB باشد");
      return;
    }

    const reader = new FileReader();
    
    reader.onloadend = () => {
      // تبدیل تصویر به Base64 و ذخیره در state
      const base64String = reader.result as string;
      setImagePreview(base64String);
    };
    
    reader.onerror = () => {
      alert("خطا در خواندن فایل");
    };
    
    reader.readAsDataURL(file);
  };

  // تابع برای حذف عکس
  const handleRemovePhoto = () => {
    setImagePreview("/icons/profilePhoto.svg");
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

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
                  src="/icons/aboutIconWhite.svg"
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
                  src="/icons/photoIconWhite.svg"
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
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src="/icons/certificateIconWhite.svg"
                  alt="certificate icon"
                  width={28}
                  height={28}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
            {/* ============= */}
            <hr className="border-2 border-[#737177] w-full" />
            {/* ===step4==== */}
            <div>
              <div className="bg-[#BBBBBB] flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-1 border-[#BBBBBB]">
                <Image
                  src="/icons/educationWhite.svg"
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
                  src="/icons/descriptionIconWhite.svg"
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
                  src="/icons/videoIconWhite.svg"
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
                  src="/icons/priceIconWhite.svg"
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
        <div className="flex text-sm sm:text-base flex-col justify-start text-[#737177] items-start gap-4 mt-10 bg-white/70 max-w-xl mx-auto w-full p-6 rounded-2xl">
          <h1 className="text-[#45444A] font-bold text-xl">About</h1>
          <p>
            To help students recognize and connect with you, upload a clear and
            friendly photo.
          </p>
          <div>
            <p>Your photo should:</p>
            <ul className="list-disc pl-7">
              <li>Show only you (no other people)</li>
              <li>
                Be taken from a proper distance (not too close or too far)
              </li>
              <li>Clearly show your eyes and full face</li>
              <li>Be well-lit and high quality</li>
              <li>Look warm, friendly, and professional</li>
            </ul>
          </div>

          {/* ================================= */}
          <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={imagePreview}
                alt="profile photo"
                width={180}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center mt-4">
              <label className="cursor-pointer text-blue-600 underline mb-2">
                Upload photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              
              {imagePreview !== "/icons/profilePhoto.svg" && (
                <button 
                  onClick={handleRemovePhoto}
                  className="text-red-600 text-sm underline"
                >
                  Remove photo
                </button>
              )}
            </div>
          </div>
          {/* ========================================= */}

          <div className="flex items-center justify-between mt-6 w-full">
            <Button
              type="submit"
              label={"Back"}
              btnIcon={null}
              onclick={() => router.push("/tutorAuthentication/step1")}
            />

            <Button
              type="submit"
              label={"Next Step"}
              disabled={!btnTrigger}
              onclick={() => router.push("/tutorAuthentication/step3")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage2;