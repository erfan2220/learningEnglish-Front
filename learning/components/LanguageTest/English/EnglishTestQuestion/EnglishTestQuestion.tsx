"use client";
import Layout from "@/components/Layout/Layout";
import React, { useEffect, useState } from "react";
import CheckBox from "@/components/Common/CheckBox.tsx/CheckBox";
import { EnglishQuestions } from "@/constant/EnglishQuestions";
import Button from "@/components/Common/Button/Button";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";

interface Question {
  id: number;
  level: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

const EnglishTestQuestion = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleChange = (questionId: number, selectedOption: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));

    const question = EnglishQuestions.find((q) => q.id === questionId);
    if (question) {
      if (selectedOption === question.answer) {
        setScore((prev) => prev + 1);
      } else {
        if (answers[questionId] === question.answer) {
          setScore((prev) => prev - 1);
        }
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("scoreEnglishTest", score.toString());
  }, [score]);

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <Layout>
          <div className=" px-4 sm:px-10 text-sm mb-8 sm:text-base text-[#5C5A60]">
            <h1 className="text-xl sm:text-3xl font-bold my-6">
              English Level Test
            </h1>

            {EnglishQuestions.map((q) => (
              <div
                key={q.id}
                className="mb-6 p-4 border-2 border-[#E8E8E8] rounded-md shadow-md hover:bg-[#F1ECFF] transition"
              >
                <p className="mb-3 font-medium">
                  {q.id}. {q.question}
                </p>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      "option1",
                      "option2",
                      "option3",
                      "option4",
                    ] as (keyof Question)[]
                  ).map((optKey) => {
                    const option = String(q[optKey]);
                    return (
                      <CheckBox
                        key={optKey}
                        label={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleChange(q.id, option)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Button
                type="button"
                label="Submit Answer"
                onclick={() =>
                  router.push(FluentDoorRoutes.languageTestEnglishResult)
                }
              />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default EnglishTestQuestion;
