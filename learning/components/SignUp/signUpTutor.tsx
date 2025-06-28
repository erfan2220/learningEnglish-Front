import React from "react";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import Inputs from "../Input/Input";
import Link from "next/link";
import eyeIconClose from "../../assets/icons/eyeCloseIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import signUpIcon from "../../assets/icons/signupIconWhite.svg";
import Image from "next/image";
import googleIcon from "../../assets/icons/google.svg";

const SignUpTutor = () => {
  return (
    <div className="p-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <div className="flex flex-col gap-3 items-center justify-center px-8  pt-10 w-full">
            <h1 className="font-bold text-3xl text-[#45444A] ">
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
              className="flex gap-2 w-full border-2 my-5 border-[#D2D2D2] rounded-2xl hover:bg-[#D2C3FE] shadow-md bg-white/70 items-center justify-center py-2"
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
          <form className="p-8 pt-0 w-full">
            <Inputs
              type="email"
              placeholder="Enter your Email"
              label="Email"
              width="100%"
            />
            <Inputs
              type="password"
              placeholder="Enter your Password"
              label="Password"
              width="100%"
              icon1={eyeIconClose}
              icon2={eyeIcon}
            />
            <div className=" text-[#45444A] text-sm mx-2">
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
              btnIcon={signUpIcon}
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

export default SignUpTutor;
