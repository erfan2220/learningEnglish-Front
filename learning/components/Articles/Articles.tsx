"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
import Pagination2 from "../Common/Pagination/Pagination";
import { api } from "@/lib/APIs/axiosInstance";
import { ArticlesType } from "@/model/articles";
import { BeatLoader } from "react-spinners";
import {  MoveRight } from "lucide-react";


export default function Articles({
  currentPage = 1,
}: {
  currentPage?: number;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const [articles, setArticles] = useState<ArticlesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ppg = 3;
  const firstIndex = (currentPage - 1) * ppg;
  const endIndex = firstIndex + ppg;
  const showArticles = articles.slice(firstIndex, endIndex);
  const totalPages = Math.ceil(articles.length / ppg);

  const recentArticles = useMemo(() => {
    const sortedArticles = [...articles];
    sortedArticles.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return sortedArticles.slice(0, 5);
  }, [articles]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get(`/api/blogs`);
        setArticles(res.data);
      } catch (error) {
        console.error("Fetching blogs failed:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-[60px] py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64 text-red-600 font-semibold">
          {error}
        </div>
      ) : (
        <div>
          <div className="mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              className="lg:h-[500px] md:h-[450px] sm:h-[400px] h-[350px] rounded-xl overflow-hidden shadow-lg"
            >
              {recentArticles.map((article, index) => (
                <SwiperSlide key={article.id} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-black/40 bg-opacity-40 z-10 p-2">
                    <Image
                      src={article.picture}
                      alt={article.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-fit rounded-lg filter brightness-85"
                    />
                  </div>
                  <div className="absolute mx-2 mb-2 bottom-0 left-0 right-0 px-6 py-2 text-white z-20 backdrop-blur-md">
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
                    <div className="flex items-end justify-end">
                      <button
                        onClick={() => {
                          setActiveSlide(index);
                          router.push(
                            `${FluentDoorRoutes.ArticlesDetail}/${article.id}`
                          );
                        }}
                        className="
                        relative
                        group
                        bg-white/20 border-2 border-gray-200 text-white
                        rounded-full
                        w-10 h-10
                        overflow-hidden
                        transition-all duration-500
                        hover:w-32
                        px-2
                      "
                      >
                        <span
                          className="
                          absolute left-4 top-[17px] -translate-y-1/2
                          opacity-0
                          transition-all duration-500
                          group-hover:opacity-100
                          whitespace-nowrap
                          text-sm font-semibold
                        "
                        >
                          Read more
                        </span>

                        <div
                          className="
                          absolute inset-0 flex items-center justify-center
                          transition-all duration-300
                          group-hover:justify-end pr-0 group-hover:pr-3 pt-0.5
                        "
                        >
                          <MoveRight className="text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showArticles.map((article, index) => (
              <div
                key={article.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  index === activeSlide ? "ring-2 ring-[#4921BF]" : ""
                }`}
              >
                <Image
                  src={article.picture}
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
                    <p>
                      {new Date(
                        article.created_at.slice(0, 10)
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div
                    className="text-[#5C5A60] text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        article.content
                          .replace(/<[^>]*>/g, "")
                          .substring(0, 120) + "...",
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
      )}

      <div className="flex justify-center items-center text-center">
        {totalPages > 1 && (
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="?page="
          />
        )}
      </div>
    </div>
  );
}
