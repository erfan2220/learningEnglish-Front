"use client";
import Country from "@/components/Country/Country";
import Layout from "@/components/Layout/Layout";
import { FluentDoorRoutes } from "@/routes/routes";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LanguageSection = () => {
  return (
    <div>
      <Layout>
        <div className="w-full flex items-center justify-center py-4">
          <div className="w-full max-w-[1320px] mx-auto px-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                390: { slidesPerView: 1 },
                470: { slidesPerView: 2 },
                570: { slidesPerView: 3 },
                800: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              navigation
              className="h-[40px] rounded-xl overflow-visible"
            >
              <SwiperSlide className="flex items-center justify-center">
                <Link
                  href={`${FluentDoorRoutes.courses}`}
                  onClick={() =>
                    localStorage.setItem("languageFilterCourse", "English")
                  }
                  className="flex items-center justify-center w-full h-full hover:bg-white/60 hover:rounded-2xl hover:shadow-md transition-shadow duration-300 p-2"
                >
                  <Country
                    flag={"icons/ukFlag.svg"}
                    countryName={"English"}
                    width={"32px"}
                    textSize={"18px"}
                    fontWeight={"bold"}
                  />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="flex items-center justify-center">
                <Link
                  href={`${FluentDoorRoutes.courses}`}
                  className="flex items-center justify-center w-full h-full hover:bg-white/60 hover:rounded-2xl hover:shadow-md transition-shadow duration-300 p-2"
                  onClick={() =>
                    localStorage.setItem("languageFilterCourse", "French")
                  }
                >
                  <Country
                    flag={"icons/frenchFlag.svg"}
                    countryName={"French"}
                    width={"32px"}
                    textSize={"18px"}
                    fontWeight={"16px"}
                  />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="flex items-center justify-center">
                <Link
                  href={`${FluentDoorRoutes.courses}`}
                  onClick={() =>
                    localStorage.setItem("languageFilterCourse", "Persian")
                  }
                  className="flex items-center justify-center w-full h-full hover:bg-white/60 hover:rounded-2xl hover:shadow-md transition-shadow duration-300 p-2"
                >
                  <Country
                    flag={"icons/irFlag.svg"}
                    countryName={"Persian"}
                    width={"32px"}
                    textSize={"18px"}
                    fontWeight={"bold"}
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LanguageSection;
