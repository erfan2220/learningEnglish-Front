"use client";
import React from "react";
import Layout from "../Layout/Layout";
import Button from "../Common/Button/Button";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
import Image from "next/image";

const onlineTest = "/images/onlineTest.svg";

const LanguageTest = () => {
  const router = useRouter();
  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <Layout>
          <div className=" px-4 sm:px-10 text-sm mb-8 sm:text-base text-[#5C5A60]">
            <h1 className="text-2xl font-bold my-6">
              English Placement Test – Discover Your True Level
            </h1>
            <div className="w-full flex items-center justify-center">
              <div className="w-full md:w-1/2">
                <p>
                  Welcome to our English Placement Test – the smartest way to
                  find out exactly where you stand on your language learning
                  journey. Whether you are a complete beginner, an intermediate
                  learner, or an advanced speaker, this test will give you a
                  clear picture of your skills and help you plan your next steps
                  with confidence.
                </p>
                <p className="mt-2">
                  Learning a language is like building a house: without knowing
                  your foundation, you can’t build the right structure on top.
                  That’s why a placement test is essential — it shows you your
                  strengths, weaknesses, and the best path forward.
                </p>
              </div>
              <div className="hidden md:w-1/2 md:flex items-center justify-center">
                <Image
                  src={onlineTest}
                  alt="onlineTest"
                  width={350}
                  height={350}
                />
              </div>
            </div>
            <h4 className="text-xl font-bold my-4 mt-10">
              ✨ Why Take This Test?
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <h5 className="text-base sm:text-lg font-bold mt-3">
                  Accurate Assessment
                </h5>
                <p>
                  Get a reliable evaluation of your current English level, based
                  on internationally recognized standards (CEFR: A0 to C2).
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-bold mt-3">
                  Save Time and Energy
                </h5>
                <p>
                  No more wasting time on lessons that are too easy or too hard.
                  With your real level defined, your learning becomes faster and
                  more effective.
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-bold mt-3">
                  Personalized Learning Roadmap
                </h5>
                <p>
                  After finishing the test, you’ll receive tailored
                  recommendations to help you focus on the areas you need the
                  most.
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-bold mt-3">
                  Confidence in Your Progress
                </h5>
                <p>
                  Whether you want to study abroad, apply for a job, or simply
                  communicate better, knowing your level gives you the
                  confidence to move forward.
                </p>
              </li>
            </ul>
            <h4 className="text-xl font-bold my-4 mt-10">🕒 What to Expect?</h4>
            <ol className="list-decimal pl-8 ">
              <li>
                <h5 className="text-base sm:text-lg font-semibold mt-3">
                  Test Duration
                </h5>
                <p>
                  Around 15–20 minutes. Short enough to stay focused, long
                  enough to measure your skills effectively.
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-semibold mt-3">
                  Question Types
                </h5>
                <p>
                  Multiple-choice questions covering grammar, vocabulary, and
                  reading comprehension.
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-semibold mt-3">
                  Immediate Results
                </h5>
                <p>
                  Get your score instantly, along with your CEFR level (A0–C2).
                </p>
              </li>
              <li>
                <h5 className="text-base sm:text-lg font-semibold mt-3">
                  Next Steps
                </h5>
                <p>
                  Receive recommendations on which courses, exercises, or
                  lessons fit your level best.
                </p>
              </li>
            </ol>
            <h4 className="text-xl font-bold my-4 mt-10">
              📊 CEFR Levels Explained
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  A0 – Absolute Beginner
                </h5>
                <p>
                  You are just starting out. Don’t worry — everyone begins here.
                </p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  A1 – Beginner
                </h5>
                <p>
                  You can use simple phrases and understand very basic
                  expressions.
                </p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  A2 – Elementary
                </h5>
                <p>You can handle everyday conversations on familiar topics.</p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  B1 – Intermediate
                </h5>
                <p>
                  You can communicate about common subjects and understand
                  longer texts.
                </p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  B2 – Upper-Intermediate
                </h5>
                <p>
                  You can communicate about common subjects and understand
                  longer texts.
                </p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  C1 – Advanced
                </h5>
                <p>
                  You are confident and fluent in most academic, social, or
                  professional situations.
                </p>
              </div>
              <div className="border-2 border-[#E8E8E8] shadow-md bg-[#E5FF99] rounded-2xl p-4 flex flex-col items-center justify-center">
                <h5 className="text-base md:text-lg font-bold">
                  C2 – Proficient
                </h5>
                <p>
                  You understand nearly everything with ease and express
                  yourself naturally.
                </p>
              </div>
            </div>

            <h4 className="text-xl font-bold my-4 mt-10">
              ✅ Tips for Best Results
            </h4>
            <ul>
              <li>Take the test in a quiet place without distractions.</li>
              <li>
                Don’t guess — if you don’t know the answer, select “I don’t
                know”. This makes your result more accurate.
              </li>
              <li>
                Be honest — the goal is not a perfect score, but a true
                reflection of your level.
              </li>
              <li>
                Relax and enjoy the process. Think of it as the first step
                toward your success in learning English.
              </li>
            </ul>

            <h4 className="text-xl font-bold my-4 mt-10">🚀 Ready to Begin?</h4>
            <p>
              Your English learning journey starts here. In just a few minutes,
              you’ll know your exact level and how to improve step by step.
            </p>
            <p>👉 Click the button below and start your test now!</p>
            <div className="flex justify-end mb-8">
              <Button
                label="Start Now"
                type="button"
                onclick={() =>
                  router.push(FluentDoorRoutes.languageTestEnglishQuestion)
                }
              />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default LanguageTest;
