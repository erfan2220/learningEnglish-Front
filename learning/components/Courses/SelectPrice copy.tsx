"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import priceIcon from "../../assets/icons/priceGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";
import PriceSlider from "../PriceSlider/PriceSlider";

const SelectPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  //close by clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  /////////////////////////////////////////////

  return (
    <div ref={ref} className="relative my-1 w-[180px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full appearance-none text-left border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 pr-10 py-3 bg-white/80 text-sm h-11 focus:outline-0"
      >
        Price Range
      </button>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={priceIcon} alt="price icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border-2 border-[#D2D2D2] rounded-2xl p-4 shadow-lg">
          <PriceSlider />
        </div>
      )}
    </div>
  );
};

export default SelectPrice;
