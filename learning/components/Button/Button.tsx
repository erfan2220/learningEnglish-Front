import React, { useState } from "react";
import { ButtonProps } from "@/model/types";
import Image from "next/image";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  widthBtn,
  colorBtn = "#5F33E1",
  colorBtnText = "#FFFFFF",
  colorBtnTextHover = "#FFFFFF",
  colorBtnBorder = "#D2D2D2",
  colorBtnHover = "#35129D",
  colorBtnActive = "#9571FF",
  btnIcon = "/icons/arrowWhite.svg",
  marginTop = "16px",
  fontWeight = "regular",
  style = {},
  onclick,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getBackgroundColor = () => {
    if (disabled) return "#BBBBBB";
    if (isActive) return colorBtnActive;
    if (isHovered) return colorBtnHover;
    return colorBtn;
  };

  const getTextColor = () => {
    if (disabled) return "#FFFFFF";
    if (isHovered) return colorBtnTextHover;
    return colorBtnText;
  };

  return (
    <button
      className="rounded-2xl flex gap-4 items-center justify-center border-2 px-6 py-2 shadow-lg shadow-black/30 font-medium cursor-pointer"
      type={type}
      disabled={disabled}
      style={{
        width: widthBtn,
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        borderColor: disabled ? "#D2D2D2" : colorBtnBorder,
        marginTop: marginTop,
        fontWeight: fontWeight,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => !disabled && setIsActive(false)}
      onClick={onclick}
    >
      <p>{label}</p>
      {btnIcon && (
        <Image src={btnIcon} alt="button icon" width={24} height={24} />
      )}
    </button>
  );
};

export default Button;
