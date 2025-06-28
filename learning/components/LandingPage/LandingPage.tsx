import React from "react";
import Layout from "../Layout/Layout";
import Image from "next/image";
import startPic from "../../assets/images/pana.svg";
import tutorPic from "../../assets/images/tutorPic.svg";
import ukFlag from "../../assets/icons/ukFlag.svg";
import frenchFlag from "../../assets/icons/frenchFlag.svg";
import Link from "next/link";
import Country from "../Country/Country";
import TutorialStep from "../TutorialStep/TutorialStep";
import { stepsData } from "@/constant/stepsData";
import FeatureItemLandingPage from "../FeatureItemLandingPage/FeatureItemLandingPage";
import { featuresData } from "@/constant/features";
import { becomeTutorData, becomeTutorListData } from "@/constant/becomeTutor";

const LandingPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-[1320px] mx-auto">
      {/* ////////////////////////header section////////////////////// */}

      <div className="mt-[60px]">
        <Layout>
          <div className="flex flex-col md:flex-row items-center justify-between mx-[60px] my-2.5">
            <div className="w-full md:w-1/2">
              <h1 className="text-[#5C5A60] text-2xl md:text-4xl font-bold mb-4">
                Speak Confidently, Learn Naturally
              </h1>
              {featuresData.map((feature) => (
                <FeatureItemLandingPage
                  key={feature.id}
                  detail={feature.text}
                />
              ))}
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

      {/* ////////////////////////language section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div className="flex items-center justify-evenly p-1">
            <Link href={"/courses/english"}>
              <Country
                flag={ukFlag}
                countryName={"English"}
                width={32}
                textSize={"18px"}
              />
            </Link>

            <Link href={"/courses/french"} className="flex gap-2 items-center">
              <Country
                flag={frenchFlag}
                countryName={"French"}
                width={32}
                textSize={"18px"}
              />
            </Link>
          </div>
        </Layout>
      </div>

      {/* ////////////////////////tutor cart section////////////////////// */}

      <div className="mt-10">
        <Layout>
          <div>tutor</div>
        </Layout>
      </div>

      {/* ////////////////////////"how it works" section////////////////////// */}

      <div className="mt-10 px-4 md:px-0">
        <Layout>
          <div className="mt-[60px] ml-[60px] text-4xl font-bold text-[#5C5A60]">
            How it works:
          </div>
          <hr className="flex-1 mx-[60px] h-px my-4 border-0 bg-[#45444A]" />
          <TutorialStep
            stepNumber={stepsData[0].number}
            title={stepsData[0].title}
            detail={stepsData[0].detail}
            picture={stepsData[0].image}
            flexRow={"row"}
          />
          <TutorialStep
            stepNumber={stepsData[1].number}
            title={stepsData[1].title}
            detail={stepsData[1].detail}
            picture={stepsData[1].image}
            flexRow={"row-reverse"}
          />
          <TutorialStep
            stepNumber={stepsData[2].number}
            title={stepsData[2].title}
            detail={stepsData[2].detail}
            picture={stepsData[2].image}
            flexRow={"row"}
          />

          {/* {stepsData.map((step) => (
            <TutorialStep
              key={step.id}
              stepNumber={step.number}
              title={step.title}
              detail={step.detail}
              picture={step.image}
              flexRow={"row"}
            />
          ))} */}
        </Layout>
      </div>

      {/* ////////////////////////"become a tutor" section////////////////////// */}

      <div className="mt-10 ">
        <Layout>
          <div className="flex flex-col md:flex-row w-full px-[10%] py-6 items-center">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl md:text-4xl font-bold text-[#5C5A60]">
                {becomeTutorData.title}
              </h4>
              <p className="text-[#5C5A60] text-sm md:text-base font-semibold mt-4">
                {becomeTutorData.text}
              </p>
              <ul className="text-[#5C5A60] text-sm md:text-base mt-4">
                {becomeTutorListData.map((data) => (
                  <li key={data.id} className="list-disc ml-4 md:ml-8">
                    {data.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block md:w-1/2">
              <Image
                src={tutorPic}
                alt="become tutor pic"
                width={100}
                height={100}
                className="object-contain"
                style={{ width: "90%", height: "90%" }}
                priority
              />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default LandingPage;
