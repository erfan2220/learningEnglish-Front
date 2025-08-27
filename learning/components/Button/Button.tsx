import React from "react";
// import buttonIcon from "@/assets/icons/arrowWhite.svg";
// import buttonIcon from "./../../assets/icons/arrowWhite.svg";
import { ButtonProps } from "@/model/types";
import Image from "next/image";



const Button: React.FC<ButtonProps> = ({
  type,
  label,
  widthBtn,
  colorBtn = "bg-[#5F33E1]",
  colorBtnText = "text-white",
  colorBtnBorder = "border-[#D2D2D2]",
  colorBtnHover = "hover:bg-[#35129D]",
  colorBtnActive = "active:bg-[#9571FF]",
  btnIcon = "/icons/arrowWhite.svg",
  marginTop = "16px",
  fontWeight = "regular",
  style = {},
  onclick,
  disabled = false,
}) => {
  return (
    <button
      className={`rounded-2xl flex gap-4 items-center justify-center border-2 px-6 py-2 shadow-lg shadow-black/30 font-medium ${
        disabled 
          ? "bg-[#BBBBBB] text-white border-[#D2D2D2] cursor-not-allowed" 
          : `${colorBtn} ${colorBtnBorder} ${colorBtnText} ${colorBtnHover} ${colorBtnActive} cursor-pointer`
      }`}
      type={type}
      disabled={disabled}
      style={{
          width: widthBtn,
          backgroundColor: colorBtn,
          color: colorBtnText,
          borderColor: colorBtnBorder,
          marginTop: marginTop,
          fontWeight: fontWeight,
          ...style,
        }}
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




// const Button: React.FC<ButtonProps> = ({
//   type,
//   label,
//   widthBtn,
//   colorBtn = "bg-[#5F33E1]",
//   colorBtnText = "text-white",
//   colorBtnBorder = "border-[#D2D2D2]",
//   colorBtnHover = "hover:bg-[#35129D]",
//   colorBtnActive = "active:bg-[#9571FF]",
//   btnIcon = "/icons/arrowWhite.svg",
//   marginTop = "16px",
//   fontWeight = "regular",
//   style = {},
//   onclick,
//   disabled = false,
// }) => {
//   return (
//     <div>
//       {disabled?(
//         <button
//         className={`rounded-2xl flex gap-4 items-center justify-center border-2 px-6 py-2 shadow-lg shadow-black/30 hover:cursor-pointer font-medium ${colorBtn} ${colorBtnBorder} ${colorBtnText} ${colorBtnHover} ${colorBtnActive}`}
//         type={type}
//         disabled={disabled}
        // style={{
        //   width: widthBtn,
        //   backgroundColor: "#BBBBBB",
        //   color: colorBtnText,
        //   borderColor: colorBtnBorder,
        //   marginTop: marginTop,
        //   fontWeight: fontWeight,
        //   ...style,
        // }}
//         onClick={onclick}
//       >
//         <p>{label}</p>
//         {btnIcon && (
//           // <img src={btnIcon} alt="button icon" className="w-6 h-6" />
//           <Image src={btnIcon} alt="button icon" width={24} height={24} />
//         )}
//       </button>
//       ):(
//         <button
//         className={`rounded-2xl flex gap-4 items-center justify-center border-2 px-6 py-2 shadow-lg shadow-black/30 hover:cursor-pointer font-medium ${colorBtn} ${colorBtnBorder} ${colorBtnText} ${colorBtnHover} ${colorBtnActive}`}
//         type={type}
//         style={{
//           width: widthBtn,
//           backgroundColor: colorBtn,
//           color: colorBtnText,
//           borderColor: colorBtnBorder,
//           marginTop: marginTop,
//           fontWeight: fontWeight,
//           ...style,
//         }}
//         onClick={onclick}
//       >
//         <p>{label}</p>
//         {btnIcon && (
//           // <img src={btnIcon} alt="button icon" className="w-6 h-6" />
//           <Image src={btnIcon} alt="button icon" width={24} height={24} />
//         )}
//       </button>
//       )}
//     </div>
//   );
// };

// export default Button;

