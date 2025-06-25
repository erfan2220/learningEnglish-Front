import React from "react";
import Layout from "../Layout/Layout";
import Image from "next/image";
import startPic from "../../assets/images/pana.svg";
import noticeIcon from "../../assets/icons/noticeIcon.svg";
import ukFlag from "../../assets/icons/ukFlag.svg";
import frenchFlag from "../../assets/icons/frenchFlag.svg";
import Link from "next/link";
import Country from "../Country/Country";

const LandingPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-[1600px] mx-auto">
      <Layout>
        <div className="flex flex-col md:flex-row items-center justify-between mx-[60px] my-2.5">
          <div className="w-full md:w-1/2">
            <h1 className="text-[#5C5A60] text-2xl md:text-4xl font-bold mb-4">
              Speak Confidently, Learn Naturally
            </h1>
            <div className="flex items-start gap-2 mb-2">
              <Image
                src={noticeIcon}
                alt="start pic"
                width={24}
                height={24}
                className="mt-2"
              />
              <p className="text-[#5C5A60] md:text-xl ">
                Practice every day with fun and simple exercises
              </p>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <Image
                src={noticeIcon}
                alt="start pic"
                width={24}
                height={24}
                className="mt-2"
              />
              <p className="text-[#5C5A60] md:text-xl ">
                Test yourself with interactive quizzes and track your progress
              </p>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <Image
                src={noticeIcon}
                alt="start pic"
                width={24}
                height={24}
                className="mt-2"
              />
              <p className="text-[#5C5A60] md:text-xl ">
                Test yourself with interactive quizzes and track your progress
              </p>
            </div>
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

      {/* ////////////////////////language section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div className="flex items-center justify-evenly p-1">
            <Link href={"/courses/english"}>
              <Country
                flag={ukFlag}
                countryName={"English"}
                width={48}
                textSize={"20px"}
              />
            </Link>

            <Link href={"/courses/french"} className="flex gap-2 items-center">
              <Country
                flag={frenchFlag}
                countryName={"French"}
                width={48}
                textSize={"20px"}
              />
            </Link>
          </div>
        </Layout>
      </div>

      {/* ////////////////////////tutor section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div>tutor</div>
        </Layout>
      </div>

      {/* ////////////////////////"how it works" section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div>how</div>
        </Layout>
      </div>

      {/* ////////////////////////"become a tutor" section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div>become tutor</div>
        </Layout>
      </div>
    </div>
  );
};

export default LandingPage;
