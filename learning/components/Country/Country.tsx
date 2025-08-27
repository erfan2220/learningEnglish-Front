import React from "react";
import { CountryComponent } from "@/model/types";
import Image from "next/image";

const Country = ({
  flag,
  countryName,
  width,
  textSize,
  fontWeight,
}: CountryComponent) => {
  return (
    <div className="flex gap-2 items-center">
      {flag && (
        // <img
        //   src={flag}
        //   alt="flag"
        //   style={{ width: `${width}`, height: `${width}` }}
        // />
        <Image src={flag} alt="french flag" width={25} height={25} style={{ width: `${width}`, height: `${width}` }} />
      )}
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
