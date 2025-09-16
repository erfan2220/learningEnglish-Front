"use client";
import Link from "next/link";
import React from "react";
// import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
// import { socialMediaIcons } from "@/constant/socialMediaIcons";
import { FluentDoorRoutes } from "@/routes/routes";

const Footer = () => {
  return (
    <div className="bg-white/70 backdrop-blur-md px-8 sm:px-[80px] py-8 pb-[70px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8 text-[#737177] text-sm">
        {/* ///////////////////////////// */}
        <div>
          <ul>
            <li className="font-bold mb-2 text-[#45444A]">Languages</li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterCourse", "English")
              }
            >
              <Link href={`${FluentDoorRoutes.courses}`}>Learn English</Link>
            </li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterCourse", "French")
              }
            >
              <Link href={`${FluentDoorRoutes.courses}`}>Learn French</Link>
            </li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterCourse", "Persian")
              }
            >
              <Link href={`${FluentDoorRoutes.courses}`}>Learn Persian</Link>
            </li>
          </ul>
        </div>

        {/* ///////////////////////////// */}

        <div>
          <ul>
            <li className="font-bold mb-3 text-[#45444A]">Teacher & Tutor</li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterTutor", "English")
              }
            >
              <Link href={`${FluentDoorRoutes.tutor}`}>English Tutor</Link>
            </li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterTutor", "French")
              }
            >
              <Link href={`${FluentDoorRoutes.tutor}`}>French Tutor</Link>
            </li>
            <li
              onClick={() =>
                localStorage.setItem("languageFilterTutor", "Persian")
              }
            >
              <Link href={`${FluentDoorRoutes.tutor}`}>Persian Tutor</Link>
            </li>
            <li>
              <Link href={`${FluentDoorRoutes.signUpTutor}`}>
                Become a Tutor
              </Link>
            </li>
          </ul>
        </div>
        {/* ///////////////////////////// */}

        <div>
          <ul>
            <li className="font-bold mb-3 text-[#45444A]">
              Learning Resources
            </li>
            <li>
              <Link href={`${FluentDoorRoutes.Articles}`}>Articles</Link>
            </li>
            <li>
              <Link href={`${FluentDoorRoutes.languageTest}`}>
                Language Test
              </Link>
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
              <li className="font-bold mb-3 text-[#45444A]">More</li>
              <li>
                <Link href={`${FluentDoorRoutes.FAQ}`}>FAQ</Link>
              </li>
              <li>
                <Link href={`${FluentDoorRoutes.policy}`}>
                  Policies & Regulations
                </Link>
              </li>
              <li>
                <Link href={`${FluentDoorRoutes.terms}`}>Service Terms</Link>
              </li>
              <li>
                <Link href={`${FluentDoorRoutes.contactUs}`}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      {/* <div className="flex gap-4 mt-6">
        {socialMediaIcons.map((icon) => (
          <div key={icon.id}>
            <SocialMediaIcon socialIcon={icon.icon} address={icon.address} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Footer;
