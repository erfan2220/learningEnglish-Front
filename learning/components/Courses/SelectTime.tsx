"use client";
import React, { useState } from "react";
import Image from "next/image";
import clockIcon from "../../assets/icons/clockGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

const SelectTime = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  return (
    <div className="relative min-w-[200px] mx-2 my-1 flex-shrink-0">
      <select
        name="selectLevel"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="w-full appearance-none border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Time of the day
        </option>
        <option value="0-4">12 am - 4 am</option>
        <option value="4-10">4 am - 10 am</option>
        <option value="10-12">10 am - 12 pm</option>
        <option value="12-19">12 pm - 7 pm</option>
        <option value="19-24">7 pm - 12 am</option>
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
