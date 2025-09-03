"use client";
import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import Inputs from "../../Input/Input";
import Link from "next/link";
// import eyeIconClose = "/icons/eyeCloseIcon.svg";
// import eyeIcon = "/icons/eyeIcon.svg";
// import signUpIcon = "/icons/signupIconWhite.svg";
// import googleIcon = "/icons/google.svg";
import { useRouter } from "next/navigation";
import axios from "axios";
// import userIcon = "/icons/userIconGray.svg";
// import passwordIcon = "/icons/passwordIconGray.svg";
// import emailIcon = "/icons/emailGray.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";

const SignUpStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isTeacher = false;

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password) {
      setError("please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

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

      router.push("/signin");
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

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/register/`;

  //     const response = await axios.post(url, {
  //       email,
  //       password,
  //       first_name: firstName,
  //       last_name: lastName,
  //       is_teacher: isTeacher,
  //     });

  //     const { access, refresh } = response.data;

  //     localStorage.setItem("access_token", access);
  //     localStorage.setItem("refresh_token", refresh);
  //     router.push("/signin");
  //   } catch (error) {
  //     setError("Failed to authenticate");
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="p-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <div className="flex flex-col gap-3 items-center justify-center px-8  pt-10 w-full">
            <h1 className="font-bold text-3xl text-[#45444A] ">
              Sign Up as a Student
            </h1>
            <p className="text-[#45444A] text-sm ">
              Already have an account?{" "}
              <u className="font-semibold">
                <Link href={"/signin"}>Sign In</Link>
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
                src="/icons/google.svg"
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
          <form onSubmit={handleSubmit} className="p-8 pt-0 w-full">
            <Inputs
              type="text"
              value={firstName}
              onchange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First Name"
              label="First Name"
              width="100%"
              inputIcon="/icons/userIconGray.svg"
            />
            <Inputs
              type="text"
              value={lastName}
              onchange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              label="Last Name"
              width="100%"
              inputIcon="/icons/userIconGray.svg"
            />
            <Inputs
              type="email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              label="Email"
              width="100%"
              inputIcon="/icons/emailGray.svg"
            />
            <Inputs
              type="password"
              value={password}
              onchange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              label="Password"
              width="100%"
              icon1="/icons/eyeCloseIcon.svg"
              icon2="/icons/eyeIcon.svg"
              inputIcon="/icons/passwordIconGray.svg"
            />

            <div className="flex gap-2 mx-2 mt-2 mb-8">
              <input type="checkbox" className="w-5 h-5 rounded-2xl" />
              <p className="text-[#45444A] text-sm">Remember Me</p>
            </div>

            {error && <p>{error}</p>}

            <Button
              type="submit"
              label={"Sign Up"}
              widthBtn="100%"
              btnIcon="/icons/signupIconWhite.svg"
            />

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

export default SignUpStudent;
