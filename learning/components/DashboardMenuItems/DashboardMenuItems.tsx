"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DashboardMenuItems = ({ icon, title, role, topic, width }) => {
  const pathname = usePathname();
  const href = `/dashboard/${role}/detail/${topic}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`py-2 text-sm flex flex-row justify-center items-center md:gap-1 lg:gap-2 font-semibold rounded-2xl shadow-md border-2 w-full transition-all duration-300
        ${
          isActive
            ? "bg-[#9571FF] text-white"
            : "bg-white/80 text-[#45444A] hover:bg-[#f0e9ff]"
        }
        hover:cursor-pointer hover:scale-105 border-[#D2D2D2]`}
      style={{ width: `${width}` }}
    >
      <div>
        <Image
          src={icon}
          alt={"menu-icon"}
          width={24}
          height={24}
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <p className="hidden md:block">{title}</p>
    </Link>
  );
};

export default DashboardMenuItems;
