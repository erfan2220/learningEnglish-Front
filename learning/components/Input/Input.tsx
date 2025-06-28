import React from "react";

interface InputsProps {
  type: string;
  label: string;
  value?: string | number;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  focusBorderColor?: string;
  width?: string;
}

const Inputs: React.FC<InputsProps> = ({
  type,
  value,
  label,
  placeholder,
  onchange,
  width = "300px",
}) => {
  return (
    <div>
      <label className="text-xs mx-2 text-[#45444A]">{label}</label>
      <input
        className={`border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-2 py-3 mb-2 mx-2 bg-white/80 text-sm h-11 focus:outline-0`}
        type={type}
        placeholder={placeholder}
        value={value}
        style={{
          width: width,
        }}
        onChange={onchange}
      />
    </div>
  );
};

export default Inputs;
