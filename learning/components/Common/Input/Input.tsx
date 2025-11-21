"use client";
import React, { useState } from "react";
import { InputsProps } from "@/model/types";
import Image from "next/image";

const Inputs: React.FC<InputsProps> = ({
  type,
  value,
  label,
  placeholder,
  onchange,
  width = "300px",
  icon1,
  icon2,
  inputIcon,
  required = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && <label className="text-xs mx-2 text-[#45444A]">{label}</label>}
      <div className="flex relative items-center ">
        <input
          className={`border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-xs sm:text-sm h-11 focus:outline-0`}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          style={{
            width: width,
          }}
          onChange={onchange}
        />
        {inputIcon && (
          <div className="absolute top-[12px] left-3 cursor-pointer">
            <Image src={inputIcon} alt="input icon" width={22} height={22} />
          </div>
        )}
        {icon1 && icon2 && (
          <div
            className="absolute right-4 cursor-pointer"
            onClick={() => {
              if (type === "password") setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? (
              <Image src={icon2} alt="icon pic" width={24} height={24} />
            ) : (
              <Image src={icon1} alt="icon pic" width={24} height={24} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputs;
