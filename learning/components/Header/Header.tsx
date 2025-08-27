"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logoIcon from "../../assets/images/logo.png";
import NavList from "./NavList";
import { List } from "lucide-react";
import { X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [typeof window !== "undefined" ? window.location.pathname : ""]);

  return (
    <div className="bg-white/70 shadow-lg flex justify-between px-8 z-50 items-center font-bold text-sm text-[#45444A] fixed top-0 right-0 left-0 backdrop-blur-md">
      <Link href={"/"}>
        <div className="h-[60px] w-32 flex items-center justify-center">
          <Image
            src={logoIcon}
            alt="logo"
            width={100}
            height={25}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Link>

      <div className="hidden lg:block">
        <NavList flexDir="row" />
      </div>

      {/* Mobile nav */}
      <div className="lg:hidden" ref={menuRef}>
        <div
          className="space-y-2 cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <List size={32} />}
        </div>

        <div
          className={`absolute top-full right-0 w-1/2 bg-white/90 shadow-lg z-50 font-bold text-sm text-[#45444A] rounded-xl backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            <NavList flexDir="column" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
