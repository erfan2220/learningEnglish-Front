"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { DashboardMenuTypes } from "@/model/dashboardTypes";
import Image from "next/image";

const DashboardMenuItems = ({
  icon,
  title,
  role,
  topic,
  width,
}: DashboardMenuTypes) => {
  const pathname = usePathname();
  const href = `/dashboard/${role}/detail/${topic}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`py-2 text-sm flex flex-row justify-center items-center md:gap-1 lg:gap-1 font-semibold rounded-2xl shadow-md border-2 w-full transition-all duration-300
        ${
          isActive
            ? "bg-[#9571FF] text-white"
            : "bg-white/80 text-[#45444A] hover:bg-[#f0e9ff]"
        }
        hover:cursor-pointer hover:scale-[1.02] border-[#D2D2D2]`}
      style={{ width: `${width}` }}
    >
      <div className="lg:w-[49%] md:w-[100px] md:ml-1 flex items-center">
        <div>
          {/* <img
            src={icon}
            alt="menu-icon"
            style={{ width: "80%", height: "80%" }}
          /> */}
          <Image
            src={icon}
            alt={"menu-icon"}
            width={24}
            height={24}
            style={{ width: "80%", height: "80%" }}
          />
        </div>
        <p className="hidden md:block">{title}</p>
      </div>
    </Link>
  );
};

export default DashboardMenuItems;
