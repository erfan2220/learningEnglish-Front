"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
// import Image from "next/image";
// import logoIcon from "@/assets/images/logo.png";

const items = [
  { name: "Home Page", link: `${FluentDoorRoutes.homePage}` },
  { name: "Courses", link: `${FluentDoorRoutes.courses}` },
  { name: "Find Tutor", link: `${FluentDoorRoutes.tutor}` },
];

const NavList: React.FC = () => {
  const pathName = usePathname();

  return (
    <section>
      <ul
        className="
        flex flex-row gap-[16px]"
      >
        {items.map((item) => (
          <li
            key={item.link}
            className={`hover:bg-gray-100 rounded-md transition-colors duration-200 ${
              pathName === item.link ? "border-b-4 border-[#5F33E1]" : ""
            }`}
          >
            <Link href={item.link} className="block py-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/*<li className="hover:bg-gray-100 rounded-md transition-colors duration-200">*/}
      {/*  <Link href="/dashboard/tutor" className="block py-2">*/}
      {/*    Tutor Dashboard*/}
      {/*  </Link>*/}
      {/*</li>*/}
      {/*<li className="hover:bg-gray-100 rounded-md transition-colors duration-200">*/}
      {/*  <Link href="/dashboard/student" className="block py-2">*/}
      {/*    Student Dashboard*/}
      {/*  </Link>*/}
      {/*</li>*/}
      {/*<li className="hover:bg-gray-100 rounded-md transition-colors duration-200">*/}
      {/*  <Link href="/tutorAuthentication" className="block py-2">*/}
      {/*    Stepper*/}
      {/*  </Link>*/}
      {/*</li>*/}
    </section>
  );
};

export default NavList;
