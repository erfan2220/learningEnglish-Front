"use client";
import React, { useState } from "react";
import levelIcon from "./../../assets/icons/levelIconGray.svg";
import arrowIcon from "./../../assets/icons/arrowDown.svg";
import Image from "next/image";

const SelectLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  return (
    <div className="relative min-w-[160px]">
      <select
        name="selectLevel"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="w-full appearance-none text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Level
        </option>
        <option value="A1">A1 - Elementary</option>
        <option value="A2">A2 - Elementary</option>
        <option value="B1">B1 - Intermediate</option>
        <option value="B2">B2 - Intermediate</option>
        <option value="C1">C1 - Advance</option>
        <option value="C2">C2 - Advance</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* <img
          src={"/icons/levelIconGray.svg"}
          alt="level icon"
          className="w-6 h-6"
        /> */}

        <Image src={levelIcon} alt="level icon" width={24} height={24} />
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

export default SelectLevel;
