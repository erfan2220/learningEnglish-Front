import React from "react";
import Layout from "../Layout/Layout";
import Image from "next/image";
import startPic from "../../assets/images/pana.svg";

const LandingPage = () => {
  return (
    <div className="p-6 md:p-12">
      <Layout>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-[#5C5A60] text-3xl font-bold mb-4">
              Speak Confidently, Learn Naturally
            </h1>
            <p className="text-gray-600">
              Your journey to fluent English starts here.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={startPic}
              alt="start pic"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LandingPage;
