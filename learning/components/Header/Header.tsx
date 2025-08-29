"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logoIcon from "../../assets/images/logo.png";
import NavList from "./NavList";
import { List, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
      <div className="bg-white/70 shadow-lg flex justify-between px-8 z-50 items-center font-bold text-sm text-[#45444A] fixed top-0 right-0 left-0 backdrop-blur-md">
        <Link href="/">
          <div className="h-[60px] w-32 flex items-center justify-center">
            <Image
                src={logoIcon}
                alt="logo"
                width={100}
                height={25}
                style={{ width: "100%", height: "auto" }}
                priority
            />
          </div>
        </Link>


        <NavList />


        <section>
              <Link href="/signin" className="block py-2">
                  Sign In
              </Link>
        </section>
      </div>
  );
};

export default Header;
