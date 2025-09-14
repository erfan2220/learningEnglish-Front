"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { articles } from '@/constant/articles';


const Articles = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[60px] py-8">
   
      <div className="mb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={article.id} className="relative">
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              <img 
                src={article.banner} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h2>
                <div 
                  className="text-sm md:text-base line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: article.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' }}
                />
                <button 
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => setActiveSlide(index)}
                >
                 read more
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div 
            key={article.id} 
            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
              index === activeSlide ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img 
              src={article.banner} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <div 
                className="text-gray-600 text-sm mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: article.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...' }}
              />
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;