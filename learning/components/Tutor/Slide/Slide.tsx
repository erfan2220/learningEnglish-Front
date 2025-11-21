// components/Slide/Slide.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { fetchTutors } from "@/services/tutors";
import type { Tutor } from "@/model/tutorType";
import { FluentDoorRoutes } from "@/routes/routes";
import TutorCart from "../TutorCart/TutorCart";

const Slide = () => {
  const [tutors, setTutors] = useState<Tutor[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    let alive = true;
    fetchTutors()
      .then((res) => {
        if (alive) setTutors(res);
      })
      .catch((e) => {
        if (alive) setError(e?.message ?? "Failed to load tutors");
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between m-4 md:mt-[60px] md:mx-[60px] mb-2">
        <div className="text-3xl font-bold text-[#45444A]">Tutors</div>
        <Link
          href={FluentDoorRoutes.tutor}
          className="text-[#FF4866] flex items-center justify-center"
        >
          <div>more</div>
          <Image
            src="/icons/arrowPink.svg"
            alt="arrow icon"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <hr className="flex-1 mx-4 md:mx-[60px] h-px my-4 border-0 bg-[#45444A]" />

      <div className="relative mt-4 p-5 md:px-20">
        {error && <div className="text-red-600 text-sm">{error}</div>}

        {!tutors && !error && (
          <div className="text-sm text-[#8B8A8E]">Loading tutors…</div>
        )}

        {tutors && tutors.length === 0 && (
          <div className="text-sm text-[#8B8A8E]">No tutors found.</div>
        )}

        {tutors && tutors.length > 0 && (
          <>
            <Swiper
              spaceBetween={24}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                400: { slidesPerView: 1 },
                750: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {tutors.map((tutor) => (
                <SwiperSlide key={tutor.id}>
                  <TutorCart tutorData={tutor} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* دکمه‌ها Swiper */}
            <div className="flex justify-between w-full absolute top-1/2 left-0 right-0 transform -translate-y-1/2 !z-50 px-5">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="arrow back"
                className="hover:scale-105 transition-all duration-200 hidden sm:flex items-center justify-center rounded-full shadow-lg"
              >
                <Image
                  src="/icons/arrowBackBtnPink.svg"
                  alt="arrow back"
                  width={32}
                  height={32}
                />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="arrow forward"
                className="hover:scale-105 transition-all duration-200 hidden sm:flex items-center justify-center rounded-full shadow-lg"
              >
                <Image
                  src="/icons/arrowForwardBtnPink.svg"
                  alt="arrow forward"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slide;