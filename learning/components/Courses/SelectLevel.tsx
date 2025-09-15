"use client";
import React from "react";
import Image from "next/image";

interface SelectLevelProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectLevel: React.FC<SelectLevelProps> = ({ value, onChange }) => {
  return (
    <div className="relative min-w-[120px]">
      <select
        name="selectLevel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none text-xs text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-4 py-2 bg-white/80 h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Level
        </option>
        <option value="">All</option>
        <option value="A1">A1 - Elementary</option>
        <option value="A2">A2 - Elementary</option>
        <option value="B1">B1 - Intermediate</option>
        <option value="B2">B2 - Intermediate</option>
        <option value="C1">C1 - Advance</option>
        <option value="C2">C2 - Advance</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/icons/levelIconGray.svg"
          alt="level icon"
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

export default SelectLevel;