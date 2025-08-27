import Link from "next/link";
import React from "react";
import { SocialMediaIconType } from "@/model/types";
import Image from "next/image";

const SocialMediaIcon = ({ socialIcon, address }: SocialMediaIconType) => {
  return (
    <Link href={address}>
      {/* <img src={socialIcon} alt="" className="w-8 h-8" /> */}
      <Image src={socialIcon} alt="" width={32} height={32} />
    </Link>
  );
};

export default SocialMediaIcon;
