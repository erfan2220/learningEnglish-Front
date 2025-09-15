"use client";
import React from "react";
import Image from "next/image";

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ value, onChange }) => {
  return (
    <div className="relative min-w-[120px]">
      <select
        name="selectLanguage"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border-2 text-xs text-[#5C5A60] border-[#D2D2D2] 
                   focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 
                   bg-white/80 h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Language
        </option>
        <option value="">All</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Persian">Persian</option>
      </select>

      {/* آیکون سمت چپ */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/icons/languageGray.svg"
          alt="language icon"
          width={24}
          height={24}
        />
      </div>

      {/* آیکون فلش */}
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

export default SelectLanguage;
