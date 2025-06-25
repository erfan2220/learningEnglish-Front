import Link from "next/link";
import React from "react";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import { socialMediaIcons } from "@/constant/socialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-white/80 px-[60px] py-8">
      <div className="flex items-center justify-evenly mb-8">
        {/* ///////////////////////////// */}
        <div>
          <ul>
            <li className="font-bold mb-3">Languages</li>
            <li>
              <Link href={"/corses/english"}>Learn English</Link>
            </li>
            <li>
              <Link href={"/corses/french"}>Learn French</Link>
            </li>
          </ul>
        </div>

        {/* ///////////////////////////// */}

        <div>
          <ul>
            <li className="font-bold mb-3">Teacher & Tutor</li>
            <li>
              <Link href={"/corses/english"}>English Tutor</Link>
            </li>
            <li>
              <Link href={"/corses/french"}>French Tutor</Link>
            </li>
            <li>
              <Link href={"/signupTutor"}>Become a Tutor</Link>
            </li>
          </ul>
        </div>
        {/* ///////////////////////////// */}

        <div>
          <ul>
            <li className="font-bold mb-3">Learning Resources</li>
            <li>
              <Link href={"/"}>Podcast</Link>
            </li>
            <li>
              <Link href={"/"}>Community</Link>
            </li>
            <li>
              <Link href={"/"}>Language Challenge</Link>
            </li>
          </ul>
        </div>

        {/* ///////////////////////////// */}

        <div>
          <div>
            <ul>
              <li className="font-bold mb-3">More</li>
              <li>
                <Link href={"/"}>FAQ</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy & Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex gap-4 mt-6">
        {socialMediaIcons.map((icon) => (
          <div key={icon.id}>
            <SocialMediaIcon socialIcon={icon.icon} address={"/"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
