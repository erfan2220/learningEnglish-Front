"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { List, X } from "lucide-react";
import NavList from "./NavList";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FluentDoorRoutes } from "@/routes/routes";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // profile dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile nav
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  // close profile menu on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const onDashboard = () => {
    router.push(
      user?.is_teacher
        ? `${FluentDoorRoutes.tutorDashboard}`
        : `${FluentDoorRoutes.studentDashboard}`
    );
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md shadow">
      <div className="sm:mx-[16px] flex items-center justify-between h-[72px] px-1 sm:px-4">
        <Link
          href={FluentDoorRoutes.homePage}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={28}
            priority
          />
        </Link>

        {/* desktop nav */}
        <div className="hidden md:block">
          <NavList />
        </div>

        {/* right section */}
        <div className="flex items-center gap-3" ref={menuRef}>
          {loading ? (
            <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
          ) : user ? (
            <div className="relative">
              {/* avatar button */}
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-[#D2D2D2] shadow-md hover:bg-gray-50"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-200 grid place-items-center">
                  {(
                    user.first_name?.[0] ||
                    user.email?.[0] ||
                    "U"
                  ).toUpperCase()}
                </div>
                <span className="hidden sm:block">
                  {user.first_name || user.email}
                </span>
              </button>

              {/* dropdown */}
              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-64 text-[#5C5A60] bg-white/80 rounded-xl border-2 border-[#D2D2D2] shadow-md  p-2"
                >
                  <div className="px-3 py-2">
                    <div className="font-semibold truncate">
                      {user.first_name} {user.last_name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {user.email}
                    </div>
                    <div className="text-xs mt-1">
                      Role:{" "}
                      <b className="text-[#4921BF] font-semibold">
                        {user.is_teacher ? "Tutor" : "Student"}
                      </b>
                    </div>
                  </div>
                  <hr />
                  <button
                    onClick={onDashboard}
                    className="w-full text-left text-sm sm:text-base flex items-center px-3 py-2 hover:bg-[#e8e1fc] cursor-pointer rounded-lg mt-2"
                    role="menuitem"
                  >
                    Dashboard
                  </button>
                  <Link
                    href="/"
                    className="px-3 text-sm sm:text-base flex items-center py-2 hover:bg-[#e8e1fc] cursor-pointer rounded-lg"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={async () => {
                      await logout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-sm sm:text-base flex items-center text-left px-3 py-2 hover:bg-[#e8e1fc] cursor-pointer rounded-lg text-red-600"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // not logged in → show Sign In / Sign Up
            <div className="flex items-center gap-3">
              <Link
                href={FluentDoorRoutes.signIn}
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                href={FluentDoorRoutes.signUpStudent}
                className="hidden sm:inline-block px-3 py-2 rounded-lg bg-[#5F33E1] text-white hover:opacity-90"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Menu"
          >
            {mobileOpen ? <X /> : <List />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`md:hidden ${
          mobileOpen ? "block" : "hidden"
        } bg-[#F1ECFF] text-sm border-t`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link
            href={FluentDoorRoutes.homePage}
            className="block px-2 py-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            Home Page
          </Link>
          <Link
            href={FluentDoorRoutes.courses}
            className="block px-2 py-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            Courses
          </Link>
          <Link
            href={FluentDoorRoutes.tutor}
            className="block px-2 py-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            Find Tutor
          </Link>

          {!loading && !user && (
            <>
              <Link
                href={FluentDoorRoutes.signIn}
                className="block px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={FluentDoorRoutes.signUpStudent}
                className="block px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}

          {!loading && user && (
            <>
              <button
                onClick={onDashboard}
                className="w-full text-left px-2 py-2 rounded hover:bg-gray-100"
              >
                Dashboard
              </button>
              {/* <Link
                href="/profile"
                className="block px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Profile
              </Link> */}
              <button
                onClick={async () => {
                  await logout();
                  setMobileOpen(false);
                }}
                className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
