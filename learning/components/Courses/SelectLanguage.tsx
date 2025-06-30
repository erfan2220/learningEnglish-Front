"use client";
import React, { useState } from "react";
import Image from "next/image";
import languageIcon from "../../assets/icons/languageGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

const SelectLanguage = () => {
  const [selectLanguage, setSelectLanguage] = useState("");
  return (
    <div className="relative my-1 w-[180px]">
      <select
        name="selectLanguage"
        value={selectLanguage}
        onChange={(e) => setSelectLanguage(e.target.value)}
        className="w-full appearance-none border-2 text-[#5C5A60] border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl pl-10 pr-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Language
        </option>
        <option value="english">English</option>
        <option value="farsi">Farsi</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={languageIcon} alt="language icon" width={24} height={24} />
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default SelectLanguage;
