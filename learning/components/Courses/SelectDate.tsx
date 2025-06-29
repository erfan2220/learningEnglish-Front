"use client";
import React, { useState } from "react";
import Image from "next/image";
import dayIcon from "../../assets/icons/dayIcon.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

const SelectDate = () => {
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
          Days of the week
        </option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={dayIcon} alt="language icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default SelectDate;
