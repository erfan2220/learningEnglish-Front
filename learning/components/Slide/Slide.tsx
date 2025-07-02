"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrowIcon from "../../assets/icons/arrowPink.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { tutorDetail } from "@/mock/tutorDetail";
import TutorCart from "../TutorCart/TutorCart";
import SwiperButton from "../SwiperButton/SwiperButton";
import { tutorMockDetail } from "@/mock/tutorMockData";

const Slide = () => {
  return (
    <div className="">
      <div className="flex justify-between m-4 md:mt-[60px] md:mx-[60px] mb-2">
        <div className="text-3xl font-bold text-[#45444A] ">Tutors</div>
        <Link
          href={"/tutor"}
          className=" text-[#FF4866] flex items-center justify-center"
        >
          <div>more</div>
          <div>
            <Image src={arrowIcon} alt="arrow icon" width={20} height={20} />
          </div>
        </Link>
      </div>

      <hr className="flex-1 mx-4 md:mx-[60px] h-px my-4 border-0 bg-[#45444A]" />

      <div className="relative mt-4 p-5 md:px-20">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            400: { slidesPerView: 1 },
            750: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperButton />

          {tutorMockDetail.map((tutor) => (
            <SwiperSlide key={tutor.id}>
              <TutorCart tutorData={tutor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
