"use client";
import React, { useState } from "react";
import Image from "next/image";
import clockIcon from "../../assets/icons/clockGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

const SelectTime = () => {
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <div className="relative my-1 w-[180px]">
      <select
        name="selectTime"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="w-full appearance-none text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Time
        </option>
        <option value="0-4">12 am - 4 am</option>
        <option value="4-8">4 am - 8 am</option>
        <option value="8-12">8 am - 12 pm</option>
        <option value="12-16">12 pm - 4 pm</option>
        <option value="16-20">4 pm - 8 pm</option>
        <option value="20-24">8 pm - 12 am</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={clockIcon} alt="language icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default SelectTime;
