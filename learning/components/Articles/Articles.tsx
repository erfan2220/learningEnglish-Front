"use client";

import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { articles } from "@/constant/articles";
import Image from "next/image";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

const readMoreIcon = "/icons/readMoreIcon.svg";

const Articles = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  const recentArticles = useMemo(() => {
    const sortedArticles = [...articles];

    sortedArticles.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return sortedArticles.slice(0, 5);
  }, [articles]);

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-[60px] py-8">
      <div className="mb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          {recentArticles.map((article, index) => (
            <SwiperSlide key={article.id} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-black/40 bg-opacity-40 z-10 p-2">
                <Image
                  src={article.banner}
                  alt={article.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg filter brightness-85"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-b from-transparent to-black">
                <h2 className="text-xl sm:text-3xl font-bold mb-2">
                  {article.title}
                </h2>
                <div
                  className="text-sm md:text-base line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.content
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 150) + "...",
                  }}
                />
                <Button
                  label="read more"
                  type="button"
                  btnIcon={readMoreIcon}
                  colorBtn="#737177"
                  colorBtnHover="#45444A"
                  colorBtnActive="#BBBBBB"
                  onclick={() => {
                    setActiveSlide(index);
                    router.push(
                      `${FluentDoorRoutes.ArticlesDetail}/${article.id}`
                    );
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
              index === activeSlide ? "ring-2 ring-[#4921BF]" : ""
            }`}
          >
            <Image
              src={article.banner}
              alt={article.title}
              width={100}
              height={100}
              className="w-full h-48 object-cover border-4 border-white rounded-lg"
            />

            <div className="p-4 relative h-[220px]">
              <h3 className="text-lg sm:text-xl text-[#45444A] font-semibold mb-2">
                {article.title}
              </h3>
              <div className="flex justify-between text-[#8B8A8E] text-xs mb-2">
                <p>{article.author}</p>
                <p>{article.date}</p>
              </div>

              <div
                className="text-[#5C5A60] text-sm mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html:
                    article.content.replace(/<[^>]*>/g, "").substring(0, 120) +
                    "...",
                }}
              />
              <button
                className="text-[#4921BF] hover:text-[#25087B] font-medium text-sm absolute bottom-4 right-4 cursor-pointer"
                onClick={() =>
                  router.push(
                    `${FluentDoorRoutes.ArticlesDetail}/${article.id}`
                  )
                }
              >
                <u> read more →</u>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
