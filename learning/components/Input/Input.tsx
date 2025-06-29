"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InputsProps } from "@/model/types";

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
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && <label className="text-xs mx-2 text-[#45444A]">{label}</label>}
      <div className="flex relative items-center ">
        <input
          className={`border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-8 px-4 py-2  mx-2 bg-white/80 text-sm h-11 focus:outline-0`}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          style={{
            width: width,
          }}
          onChange={onchange}
        />
        {inputIcon && (
          <div className="absolute top-1/3 left-4 cursor-pointer">
            <Image src={inputIcon} alt="input icon" width={20} height={20} />
          </div>
        )}
        {icon1 && icon2 && (
          <div
            className="absolute right-8 cursor-pointer"
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
