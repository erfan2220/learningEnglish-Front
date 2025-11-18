"use client";
import React, { useState } from "react";
import Button from "../../Common/Button/Button";
import Layout from "../../Layout/Layout";
import Inputs from "../../Common/Input/Input";
import Link from "next/link";

import { useRouter } from "next/navigation";
import axios from "axios";

import Image from "next/image";
import { FluentDoorRoutes } from "@/routes/routes";

// ✅ icons served from /public/icons (no import statements)
const eyeIconClose = "/icons/eyeCloseIcon.svg";
const eyeIcon = "/icons/eyeIcon.svg";
const signUpIcon = "/icons/signupIconWhite.svg";
const googleIcon = "/icons/google.svg";
const userIcon = "/icons/userIconGray.svg";
const passwordIcon = "/icons/passwordIconGray.svg";
const emailIcon = "/icons/emailGray.svg";
const signUpPic = "/images/signUpPic.svg";
const logo = "/images/logo2.png";

const SignUpTutor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isTeacher = true;

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/register/`;

      const response = await axios.post(url, {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        is_teacher: isTeacher,
      });

      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("is_teacher", isTeacher.toString());

      router.push(`${FluentDoorRoutes.tutorAuthentication}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          const data = error.response.data;
          if (typeof data === "string") {
            setError(data);
          } else if (data?.message) {
            setError(data.message);
          } else {
            setError("Registration failed");
          }
        } else {
          setError("Network error - please check your connection");
        }
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error details:", error);
    }
  };

  return (
    <div className="w-full relative h-screen overflow-x-hidden pt-16 pb-4 sm:py-0 sm:overflow-y-hidden flex items-center justify-center px-2 gap-8 max-w-[1320px] mx-auto">
      <div className="w-1/2 hidden sm:flex items-center justify-center ">
        <Image
          src={signUpPic}
          alt="Picture of the author"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="w-[95%] mx-auto sm:w-1/2  flex items-center justify-start">
        <div className="w-full max-w-md mx-auto">
          <Layout marginTop="">
            <div className="flex flex-col gap-2 items-center justify-center px-3 sm:px-8  pt-4 w-full">
              <div
                onClick={() => router.push(FluentDoorRoutes.homePage)}
                className="flex items-center justify-center gap-2 text-[#5C5A60] font-semibold hover:cursor-pointer"
              >
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <span>Fluentdoor</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center flex flex-col items-center gap-2">
                Sign Up as a Tutor
              </h1>
              <p className="text-[#45444A] text-sm ">
                Already have an account?{" "}
                <u className="font-semibold">
                  <Link href={"/signin"}>Sign In</Link>
                </u>
              </p>

              <Link
                href={"/signinGoogle"}
                className="flex gap-2 w-full border-2 my-2 border-[#D2D2D2] rounded-2xl hover:bg-[#D2C3FE] shadow-md bg-white/70 items-center justify-center py-2"
              >
                <Image
                  src={googleIcon}
                  alt="google icon"
                  width={24}
                  height={24}
                />
                <p className="text-[#727177] text-sm font-semibold">
                  Continue with Google
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 mb-2 mx-8">
              <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
              <p className="text-[#45444A]">or</p>
              <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
            </div>
            <form
              onSubmit={handleSubmit}
              className="px-3 flex flex-col gap-2 sm:px-8 sm:pt-0 w-full -mt-4"
            >
              <div className="flex flex-col gap-1">
                <Inputs
                  type="text"
                  value={firstName}
                  onchange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your First Name"
                  label="First Name"
                  width="100%"
                  inputIcon={userIcon}
                />

                <Inputs
                  type="text"
                  value={lastName}
                  onchange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your Last Name"
                  label="Last Name"
                  width="100%"
                  inputIcon={userIcon}
                />
                <Inputs
                  type="email"
                  value={email}
                  onchange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  label="Email"
                  width="100%"
                  inputIcon={emailIcon}
                />
                <Inputs
                  type="password"
                  value={password}
                  onchange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  label="Password"
                  width="100%"
                  icon1={eyeIconClose}
                  icon2={eyeIcon}
                  inputIcon={passwordIcon}
                />
              </div>
              <div className="flex gap-2 mx-2 mt-2 ">
                <input type="checkbox" className="w-5 h-5 rounded-2xl" />
                <p className="text-[#45444A] text-sm">I agree to the terms</p>
              </div>
              {error && <p className="text-red-600">{error}</p>}

              <Button
                type="submit"
                label={"Sign Up"}
                widthBtn="100%"
                btnIcon={signUpIcon}
              />

              <div className="text-xs text-center text-gray-500 pb-4 pt-1 px-0 sm:px-10">
                By clicking Log in or Continue with, you agree to{" "}
                <u>
                  <Link href={FluentDoorRoutes.terms}>Our Terms</Link>
                </u>{" "}
                of Use and{" "}
                <u>
                  <Link href={FluentDoorRoutes.policy}>Privacy Policy</Link>
                </u>
                .
              </div>
            </form>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default SignUpTutor;
