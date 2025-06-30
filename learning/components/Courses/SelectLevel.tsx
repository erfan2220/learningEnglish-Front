"use client";
import React, { useState } from "react";
import Image from "next/image";
import levelIcon from "../../assets/icons/levelIconGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

const SelectLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  return (
    <div className="relative my-1 flex-shrink-0">
      <select
        name="selectLevel"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="w-full appearance-none text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
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
        <Image src={levelIcon} alt="language icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default SelectLevel;
