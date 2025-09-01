"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import arrowIcon from "./../../assets/icons/arrowPink.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import TutorCart from "../TutorCart/TutorCart";
import SwiperButton from "../SwiperButton/SwiperButton";
import { api } from "@/lib/APIs/axiosInstance";
import { Tutor } from "@/model/tutorType";

const Slide = () => {
  const [tutor, setTutor] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter();

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await api.get(`/api/tutors`);
        setTutor(res.data);
      } catch (error) {
        console.error("Fetching error", error);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTutor();
  }, []);

  if (loading) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!tutor) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p>Tutor not found</p>
      </div>
    );
  }
  console.log(tutor);

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
            {/* <img
              src={"/icons/arrowPink.svg"}
              alt="arrow icon"
              className="w-5 h-5"
            /> */}
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

          {tutor.map((tutor: Tutor) => (
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
