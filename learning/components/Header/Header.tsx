import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white/70 flex justify-between px-8 z-50 items-center font-bold text-sm text-[#45444A] fixed top-0 right-0 left-0 backdrop-blur-md">
      <Link href={"/"}>
        <div className="h-[60px] w-11 border-2 border-black my-1.5">logo</div>
      </Link>

      <div>
        <ul className="flex gap-6">
          <li>Language</li>
          <li>
            <Link href={"/"}>Home Page</Link>
          </li>
          <li>
            <Link href={"/courses"}>Corses</Link>
          </li>
          <li>
            <Link href={"/tutor"}>Find Tutor</Link>
          </li>
          <li>
            <Link href={"/signupTutor"}>Become a Tutor</Link>{" "}
          </li>
          <li>
            <Link href={"/signin"}>Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
