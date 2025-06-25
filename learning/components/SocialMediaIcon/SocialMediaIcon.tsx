import Link from "next/link";
import React from "react";
import Image from "next/image";

const SocialMediaIcon = ({ socialIcon, address }) => {
  return (
    <Link href={address}>
      <Image src={socialIcon} alt="" width={32} height={32} />
    </Link>
  );
};

export default SocialMediaIcon;
