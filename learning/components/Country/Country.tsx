import React from "react";
import Image from "next/image";

const Country = ({ flag, countryName, width, textSize, fontWeight }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={flag} alt="french flag" width={width} height={width} />
      <p
        className="text-[#5C5A60] font-bold "
        style={{ fontSize: `${textSize}`, fontWeight: `${fontWeight}` }}
      >
        {countryName}
      </p>
    </div>
  );
};

export default Country;
