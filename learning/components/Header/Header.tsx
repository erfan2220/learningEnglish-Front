import Link from "next/link";
import React from "react";
import Image from "next/image";
import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  return (
    <div className="bg-white/70 shadow-lg flex justify-between px-8 z-50 items-center font-bold text-sm text-[#45444A] fixed top-0 right-0 left-0 backdrop-blur-md">
      <Link href={"/"}>
        <div className="h-[60px] w-32 border-2 border-black my-1.5">logo</div>
      </Link>

      <div>
        <ul className="flex gap-6">
          <li>Language</li>
          <li>
            <Link href={"/"}>Home Page</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link href={"/tutor"}>Find Tutor</Link>
          </li>
          <li>
            <Link href={"/dashboard/tutor"}>tutor dashboard</Link>
          </li>
          <li>
            <Link href={"/dashboard/student"}>student dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        {/* <Link href={"/cart"}>
          <div className="relative ">
            <Image src={cartIcon} alt="cart icon" width={32} height={32} />
            <div className="bg-[#5F33E1] rounded-full px-1 absolute top-0 right-0 text-white text-xs font-semibold">
              2
            </div>
          </div>
        </Link> */}
        <Link href={"/signin"}>
          <div className="px-8 py-3 rounded-2xl border-2 border-[#D2D2D2] hover:bg-[#5F33E1] hover:text-white shadow-md hover:scale-[1.02] transition-all duration-200">
            Sign In
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
