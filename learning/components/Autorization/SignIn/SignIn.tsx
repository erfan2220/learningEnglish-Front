"use client";
import { api } from "@/lib/APIs/axiosInstance";
import { useAuth } from "@/context/AuthContext";

import React, { useState } from "react";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";
import Inputs from "../../Input/Input";
import Link from "next/link";
import eyeIconClose from "./../../../assets/icons/eyeCloseIcon.svg";
import eyeIcon from "./../../../assets/icons/eyeIcon.svg";
import signInIcon from "./../../../assets/icons/loginIcon.svg";
import googleIcon from "./../../../assets/icons/google.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import userIcon from "./../../../assets/icons/userIconGray.svg";
import passwordIcon from "./../../../assets/icons/passwordIconGray.svg";
import Image from "next/image";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const { refresh } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/api/login/", { email, password }); // cookies set by server
      await refresh();                                     // call /api/me, set user
      router.push("/");                                    // header will flip to Profile
    } catch (err) {
      setError("Failed to authenticate");
      console.error(err);
    }
  };

  return (
    <div className="p-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <div className="flex flex-col gap-3 items-center justify-center px-8  pt-10 w-full">
            <h1 className="font-bold text-3xl text-[#45444A] ">Sign In</h1>
            <p className="text-[#45444A] text-sm ">
              <u className="font-semibold">
                <Link href={"/signupStudent"}>Sign up as a student</Link>
              </u>{" "}
              or{" "}
              <u className="font-semibold">
                <Link href={"/signupTutor"}>Sign up as a tutor</Link>
              </u>
            </p>

            <Link
              href={"/signinGoogle"}
              className="flex gap-2 w-full border-2 my-5 border-[#D2D2D2] rounded-2xl hover:bg-[#D2C3FE] shadow-md bg-white/70 items-center justify-center py-2"
            >
              {/* <img
                src={"/icons/google.svg"}
                alt="google icon"
                className="w-6 h-6"
              /> */}
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

          <div className="flex items-center justify-center gap-2 mb-4 mx-8">
            <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
            <p className="text-[#45444A]">or</p>
            <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
          </div>
          <form onSubmit={handleSubmit} className="p-8 pt-0 w-full">
            <Inputs
              type="email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              label="Email"
              width="100%"
              inputIcon={userIcon}
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
            <div className=" text-[#45444A] text-sm mx-2 my-2">
              <u>
                <Link href={"/forgotPassword"}>Forgot Your Password?</Link>
              </u>
            </div>
            <div className="flex gap-2 mx-2 mt-6 mb-8">
              <input type="checkbox" className="w-5 h-5 rounded-2xl" />
              <p className="text-[#45444A] text-sm">Remember Me</p>
            </div>

            <Button
              type="submit"
              label={"Sign In"}
              widthBtn="100%"
              btnIcon={signInIcon}
            />

            {error && (
              <div className="text-red-500 text-sm mt-4 text-center">
                {error}
              </div>
            )}

            <div className="text-sm text-[#45444A] mt-4 px-10 text-center">
              By clicking Log in or Continue with, you agree to{" "}
              <u>
                <Link href={"/terms"}>Our Terms</Link>
              </u>{" "}
              of Use and{" "}
              <u>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </u>
              .
            </div>
          </form>
        </Layout>
      </div>
    </div>
  );
};

export default SignIn;
