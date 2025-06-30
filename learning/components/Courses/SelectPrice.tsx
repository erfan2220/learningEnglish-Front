"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import levelIcon from "../../assets/icons/levelIconGray.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";
import Inputs from "../Input/Input";

const SelectPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPriceType, setSelectedPriceType] = useState<
    "free" | "range" | ""
  >("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative my-1 w-[200px]" ref={dropdownRef}>
      <button
        className="w-full text-left text-[#5C5A60] border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPriceType === "free"
          ? "Free"
          : selectedPriceType === "range"
          ? `From ${minPrice || "-"} to ${maxPrice || "-"}`
          : "Price"}
      </button>

      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={levelIcon} alt="icon" width={24} height={24} />
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={arrowIcon} alt="arrow icon" width={24} height={24} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 rounded-xl p-3 z-10 shadow">
          <div
            className="cursor-pointer py-1 hover:text-purple-600"
            onClick={() => {
              setSelectedPriceType("free");
              setIsOpen(false);
              setMinPrice("");
              setMaxPrice("");
            }}
          >
            Free
          </div>

          <div className="my-2 border-t border-gray-200"></div>

          <div className="space-y-2">
            <Inputs
              type="number"
              value={minPrice}
              placeholder="Minimum"
              onchange={(e) => {
                setMinPrice(e.target.value);
                setSelectedPriceType("range");
              }}
              width="160px"
            />
            <Inputs
              type="number"
              value={maxPrice}
              placeholder="Maximum"
              onchange={(e) => {
                setMaxPrice(e.target.value);
                setSelectedPriceType("range");
              }}
              width="160px"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sm text-center py-2 bg-purple-600 text-white rounded-xl mt-2"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPrice;
