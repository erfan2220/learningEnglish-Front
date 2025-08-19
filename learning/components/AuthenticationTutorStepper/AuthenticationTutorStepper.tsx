'use client'
import React from "react"; 
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const AuthenticationTutorStepper = () => {
  const router = useRouter();

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      {/* ====================header section==================== */}
      <div className="mt-[60px]">
        <Layout>
          <div className="mx-4 my-8 md:mx-[60px] text-[#737177] font-semibold flex flex-col gap-3 ">
            <h2 className="text-[#45444A] text-lg sm:text-3xl font-bold">Tutor Registration</h2>

            <p className="mt-5">Welcome to the teacher registration process!</p>
            <p>
              To complete your profile, you will be asked to provide some
              personal information, upload documents, and share details about
              your background and courses.
            </p>
            <p>
              Please fill in the forms step by step and make sure your
              information is accurate. Once finished, your profile will be ready
              to be reviewed and published.
            </p>
            <p>Are you ready?</p>
          </div>
          <div className="flex justify-end px-4 md:px-12 mb-8">
            <Button 
            label="Start" 
            type="button"
            widthBtn="200px" 
            onclick={() =>router.push('tutorAuthentication/step1') } 
          />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AuthenticationTutorStepper;
