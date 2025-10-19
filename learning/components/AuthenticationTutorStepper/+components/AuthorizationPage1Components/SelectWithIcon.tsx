"use client";
import Image from "next/image";

type Option = { value: string; label: string };

export default function SelectWithIcon({
  label,
  value,
  onChange,
  options,
  icon,
  placeholder = "Select",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  // icon: StaticImageData;
  icon: string;
  placeholder?: string;
}) {
  return (
    <div className="w-full">
      <label className="text-xs mx-2 mt-2 text-[#45444A]">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <Image
          src={icon}
          alt={`${label} icon`}
          width={20}
          height={20}
          className="absolute top-[12px] left-4"
        />
      </div>
    </div>
  );
}
