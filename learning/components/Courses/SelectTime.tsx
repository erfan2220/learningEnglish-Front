"use client";
import React, { useState } from "react";
import clockIcon from "./../../assets/icons/clockGray.svg";
import arrowIcon from "./../../assets/icons/arrowDown.svg";
import Image from "next/image";

const SelectTime = () => {
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <div className="relative min-w-[160px]">
      <select
        name="selectTime"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="w-full appearance-none text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Time
        </option>
        <option value="0-4">00:00 - 0:00</option>
        <option value="4-8">04:00 - 08:00</option>
        <option value="8-12">08:00 - 12:00</option>
        <option value="12-16">12:00 - 16:00</option>
        <option value="16-20">16:00 - 20:00</option>
        <option value="20-24">20:00 - 24:00</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* <img
          src={"/icons/clockGray.svg"}
          alt="clock icon"
          className="w-6 h-6"
        /> */}

        <Image src={clockIcon} alt="clock icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* <img
          src={"/icons/arrowDown.svg"}
          alt="arrow icon"
          className="w-6 h-6"
        /> */}

        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default SelectTime;
