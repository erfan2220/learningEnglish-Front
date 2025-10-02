"use client";
import Layout from "@/components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { EnglishQuestions } from "@/constant/EnglishQuestions";

const EnglishTestResult = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("");

  useEffect(() => {
    const savedScore = localStorage.getItem("scoreEnglishTest");
    const numericScore = savedScore ? parseInt(savedScore, 10) : 0;
    setScore(numericScore);

    const totalQuestions = EnglishQuestions.length;
    const percentage = (numericScore / totalQuestions) * 100;

    if (percentage < 25) setLevel("A0");
    else if (percentage < 50) setLevel("A");
    else if (percentage < 75) setLevel("B");
    else setLevel("C");
  }, []);

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <Layout>
          <div className=" px-4 sm:px-10 text-sm mb-8 sm:text-base text-[#5C5A60]">
            <h1 className="text-2xl font-bold my-6">English Test Result</h1>
            <p className="mb-2 text-lg">
              Your Score: {score} / {EnglishQuestions.length}
            </p>
            <p className="mb-2 text-lg">
              Percentage: {((score / EnglishQuestions.length) * 100).toFixed(0)}
              %
            </p>
            <p className="text-xl font-semibold mt-4">
              Your Level: <span className="text-lime-600">{level}</span>
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default EnglishTestResult;
