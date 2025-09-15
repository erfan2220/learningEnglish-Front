"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SelectPriceProps {
  free: boolean;
  price: number;
  onChangeFree: (value: boolean) => void;
  onChangePrice: (value: number) => void;
}

const SelectPrice: React.FC<SelectPriceProps> = ({
  free,
  price,
  onChangeFree,
  onChangePrice,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full min-w-[120px]">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between h-11 border-2 border-[#D2D2D2] rounded-2xl cursor-pointer bg-white/80"
      >
        <div className="absolute left-3 top-3 pointer-events-none">
          <Image
            src="/icons/levelIconGray.svg"
            alt="price icon"
            width={24}
            height={24}
          />
        </div>
        <span className="px-10 text-xs">Price</span>
        <Image src="/icons/arrowDown.svg" alt="arrow" width={20} height={20} />
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white/90 border-2 border-[#D2D2D2] rounded-2xl py-4 shadow-lg">
          {/* Free checkbox */}
          <label className="flex items-center gap-2 mb-4 cursor-pointer px-4">
            <input
              type="checkbox"
              checked={free}
              onChange={(e) => onChangeFree(e.target.checked)}
              className="w-4 h-4 accent-[#5F33E1]"
            />
            <span className="text-xs text-[#5C5A60]">Only Free Courses</span>
          </label>

          {/* Range input */}
          <div className="px-4">
            <input
              type="range"
              min={0}
              max={5000000}
              step={50000}
              value={price}
              onChange={(e) => onChangePrice(Number(e.target.value))}
              className="w-full accent-[#5F33E1]"
            />
            <p className="text-xs mt-1 text-[#5C5A60]">
              Up to:{" "}
              <span className="font-semibold">
                {price.toLocaleString()} Toman
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPrice;
