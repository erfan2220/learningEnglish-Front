"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";
import arrowForward from "../../assets/icons/arrowForwardBtnPink.svg.svg";
import arrowBack from "../../assets/icons/arrowBackBtnPink.svg";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex absolute w-full justify-between top-2/5 transform -translate-y-1/2 z-10">
      <button
        onClick={() => swiper.slideNext()}
        aria-label="arrow back"
        className="hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        <Image src={arrowBack} alt="arrow back" width={32} height={32} />
      </button>

      <button
        onClick={() => swiper.slidePrev()}
        aria-label="arrow forward"
        className="hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        <Image src={arrowForward} alt="arrow forward" width={32} height={32} />
      </button>
    </div>
  );
};

export default SwiperButton;
