"use client";
import React from "react";
import Image from "next/image";

interface SelectTimeProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectTime: React.FC<SelectTimeProps> = ({ value, onChange }) => {
  return (
    <div className="relative min-w-[120px]">
      <select
        name="selectTime"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 bg-white/80 text-xs h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Time
        </option>
        <option value="">All</option>
        <option value="00:00 - 04:00">00:00 - 04:00</option>
        <option value="04:00 - 08:00">04:00 - 08:00</option>
        <option value="08:00 - 12:00">08:00 - 12:00</option>
        <option value="12:00 - 16:00">12:00 - 16:00</option>
        <option value="16:00 - 20:00">16:00 - 20:00</option>
        <option value="20:00 - 24:00">20:00 - 24:00</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/icons/clockGray.svg"
          alt="clock icon"
          width={24}
          height={24}
        />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/icons/arrowDown.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default SelectTime;
