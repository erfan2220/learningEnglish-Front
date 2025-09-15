"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface SelectDateProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({ value, onChange }) => {
  const [selectDate, setSelectDate] = useState("");
  useEffect(() => {
    localStorage.setItem("dateFilterCourse", selectDate);
  }, [selectDate]);
  return (
    <div className="relative min-w-[120px] ">
      <select
        name="selectDate"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setSelectDate(e.target.value);
        }}
        className="w-full appearance-none text-xs text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] top-1/2 rounded-2xl px-10 py-2 bg-white/80 h-11 focus:outline-0"
      >
        <option value="" disabled hidden>
          Day
        </option>
        <option value="">All</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/icons/dayIcon.svg"
          alt="language icon"
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

export default SelectDate;
