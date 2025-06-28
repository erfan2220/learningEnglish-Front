import React from "react";
import Button from "../Button/Button";

import Layout from "../Layout/Layout";
import Inputs from "../Input/Input";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="p-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <form className="p-8 w-full">
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
            />
            <div>Forgot Password?</div>
            <div></div>

            <Button type="button" label={"start now"} widthBtn="100%" />

            <div className="text-sm text-[#45444A] mt-4">
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
