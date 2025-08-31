// src/components/Header/Header.tsx
"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logoIcon from "../../assets/images/logo.png";
import NavList from "./NavList";
// import { List, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { user, loading, logout } = useAuth();
  const pathName = usePathname();
  const router = useRouter();
  const [isCartFull, setIsCartFull] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      const cart = localStorage.getItem("selectedCourseId");
      setIsCartFull(!!cart);
    };
    checkCart();
    window.addEventListener("storage", checkCart);
    return () => {
      window.removeEventListener("storage", checkCart);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      {/* Right section: Sign In or Profile */}

      <section className="relative" ref={menuRef}>
        {loading ? (
          <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
        ) : user ? (
          <>
            <Image src={cartIcon} alt="cart" width={32} height={32} />
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="flex items-center gap-2 px-3 py-1 rounded-lg border hover:bg-gray-50"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                {(user.first_name?.[0] || user.email?.[0] || "U").toUpperCase()}
              </div>
              <span className="hidden sm:block">
                {user.first_name || user.email}
              </span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border p-2">
                <div className="px-3 py-2">
                  <div className="font-semibold">
                    {user.first_name} {user.last_name}
                  </div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                  <div className="text-xs mt-1">
                    Role: {user.is_teacher ? "Tutor" : "Student"}
                  </div>
                </div>
                <hr />
                {/* <Link href="/profile" className="block px-3 py-2 hover:bg-gray-50 rounded-lg">
                                    Profile
                                </Link> */}
                {user.is_teacher ? (
                  <Link
                    href="/dashboard/tutor"
                    className="block px-3 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Teacher Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/dashboard/student"
                    className="block px-3 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Student Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Image
                src={cartIcon}
                alt="cart"
                width={28}
                height={28}
                onClick={() => router.push("/cart")}
                className="cursor-pointer"
              />
              {isCartFull && (
                <div className="w-[13px] h-[13px] absolute -top-1.5 -right-2 bg-[#5F33E1] text-center rounded-full" />
              )}
            </div>

            <Link
              href="/signin"
              className={`hover:bg-gray-100 block py-2 rounded-md transition-colors duration-200 ${
                pathName === "/signin" ? "border-b-4 border-[#5F33E1]" : ""
              }`}
            >
              Sign In
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Header;
