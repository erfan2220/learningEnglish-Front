import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavListProps {
  flexDir: "row" | "column";
}

const NavList: React.FC<NavListProps> = ({ flexDir }) => {
  const pathName = usePathname();
  
  return (
    <div>
      <ul
        className={`${flexDir === "column" ? "space-y-" : "gap-6"} text-sm `}
        style={{ display: "flex", flexDirection: flexDir }}
      >
        <li className="hover:bg-gray-100 rounded-md transition-colors duration-200">
          <div className="py-2">Language</div>
        </li>
        <li className={`hover:bg-gray-100 rounded-md transition-colors duration-200 ${
            pathName === "/" ? "border-b-4 border-[#5F33E1] -[#5F33E1]" : ""
          }`}>
          <Link href={"/"} className="block py-2">Home Page</Link>
        </li>
        <li className={`hover:bg-gray-100 rounded-md transition-colors duration-200 ${
            pathName === "/courses"
              ? "border-b-4 border-[#5F33E1] -[#5F33E1]"
              : ""
          }`}>
          <Link href={"/courses"} className="block py-2">Courses</Link>
        </li>
        <li className={`hover:bg-gray-100 rounded-md transition-colors duration-200 ${
            pathName === "/tutor"
              ? "border-b-4 border-[#5F33E1] -[#5F33E1]"
              : ""
          }`}>
          <Link href={"/tutor"} className="block  py-2">Find Tutor</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors duration-200">
          <Link href={"/dashboard/tutor"} className="block  py-2">tutor dashboard</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors duration-200">
          <Link href={"/dashboard/student"} className="block py-2">student dashboard</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors duration-200">
          <Link href={"/tutorAuthentication"} className="block py-2">stepper</Link>
        </li>
        <li className={`hover:bg-gray-100 rounded-md transition-colors duration-200 ${
            pathName === "/signin"
              ? "border-b-4 border-[#5F33E1] -[#5F33E1]"
              : ""
          }`}>
          <Link href={"/signin"} className="block py-2">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;