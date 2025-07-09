import React from "react";
import Image from "next/image";
import buttonIcon from "../../assets/icons/arrowWhite.svg";
import { ButtonProps } from "@/model/types";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  widthBtn,
  colorBtn = "bg-[#5F33E1]",
  colorBtnText = "text-white",
  colorBtnBorder = "border-[#5F33E1]",
  colorBtnHover = "hover:bg-[#35129D]",
  colorBtnActive = "active:bg-[#9571FF]",
  btnIcon = buttonIcon,
  marginTop = "16px",
  onclick,
}) => {
  return (
    <div>
      <button
        className={`rounded-2xl flex gap-4 items-center justify-center  px-8 py-2 shadow-lg shadow-black/30 hover:cursor-pointer font-medium ${colorBtn} ${colorBtnText} ${colorBtnHover} ${colorBtnActive}`}
        type={type}
        style={{
          width: widthBtn,
          backgroundColor: colorBtn,
          color: colorBtnText,
          border: colorBtnBorder,
          marginTop: marginTop,
        }}
        onClick={onclick}
      >
        <p>{label}</p>
        {btnIcon && (
          <Image src={btnIcon} alt="button icon" width={24} height={24} />
        )}
      </button>
    </div>
  );
};

export default Button;
