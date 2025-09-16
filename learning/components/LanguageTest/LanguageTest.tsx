import React from "react";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";

const LanguageTest = () => {
  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      {/* ====================header section==================== */}

      <div className="mt-[60px]">
        <Layout>
          <div>
            <h1>🌍 English Placement Test – Discover Your True Level</h1>
            <p>
              Welcome to our English Placement Test – the smartest way to find
              out exactly where you stand on your language learning journey.
              Whether you are a complete beginner, an intermediate learner, or
              an advanced speaker, this test will give you a clear picture of
              your skills and help you plan your next steps with confidence.
            </p>
            <p>
              Learning a language is like building a house: without knowing your
              foundation, you can’t build the right structure on top. That’s why
              a placement test is essential — it shows you your strengths,
              weaknesses, and the best path forward.
            </p>
            <h4>✨ Why Take This Test?</h4>
            <ul>
              <li>
                <h5>Accurate Assessment</h5>
                <p>
                  Get a reliable evaluation of your current English level, based
                  on internationally recognized standards (CEFR: A0 to C2).
                </p>
              </li>
              <li>
                <h5>Save Time and Energy</h5>
                <p>
                  No more wasting time on lessons that are too easy or too hard.
                  With your real level defined, your learning becomes faster and
                  more effective.
                </p>
              </li>
              <li>
                <h5>Personalized Learning Roadmap</h5>
                <p>
                  After finishing the test, you’ll receive tailored
                  recommendations to help you focus on the areas you need the
                  most.
                </p>
              </li>
              <li>
                <h5>Confidence in Your Progress</h5>
                <p>
                  Whether you want to study abroad, apply for a job, or simply
                  communicate better, knowing your level gives you the
                  confidence to move forward.
                </p>
              </li>
            </ul>
            <h4>🕒 What to Expect?</h4>
            <ol>
              <li>
                <h5>Test Duration</h5>
                <p>
                  Around 15–20 minutes. Short enough to stay focused, long
                  enough to measure your skills effectively.
                </p>
              </li>
              <li>
                <h5>Question Types</h5>
                <p>
                  Multiple-choice questions covering grammar, vocabulary, and
                  reading comprehension.
                </p>
              </li>
              <li>
                <h5>Immediate Results</h5>
                <p>
                  Get your score instantly, along with your CEFR level (A0–C2).
                </p>
              </li>
              <li>
                <h5>Next Steps</h5>
                <p>
                  Receive recommendations on which courses, exercises, or
                  lessons fit your level best.
                </p>
              </li>
            </ol>
            <h4>📊 CEFR Levels Explained</h4>
            <div className="flex flex-wrap">
              <div>
                <h5>A0 – Absolute Beginner</h5>
                <p>
                  You are just starting out. Don’t worry — everyone begins here.
                </p>
              </div>
              <div>
                <h5>A1 – Beginner</h5>
                <p>
                  You can use simple phrases and understand very basic
                  expressions.
                </p>
              </div>
              <div>
                <h5>A2 – Elementary</h5>
                <p>You can handle everyday conversations on familiar topics.</p>
              </div>
              <div>
                <h5>B1 – Intermediate</h5>
                <p>
                  You can communicate about common subjects and understand
                  longer texts.
                </p>
              </div>
              <div>
                <h5>B2 – Upper-Intermediate</h5>
                <p>
                  You can communicate about common subjects and understand
                  longer texts.
                </p>
              </div>
              <div>
                <h5>C1 – Advanced</h5>
                <p>
                  You are confident and fluent in most academic, social, or
                  professional situations.
                </p>
              </div>
              <div>
                <h5>C2 – Proficient</h5>
                <p>
                  You understand nearly everything with ease and express
                  yourself naturally.
                </p>
              </div>
            </div>

            <h4>✅ Tips for Best Results</h4>
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

            <h4>🚀 Ready to Begin?</h4>
            <p>
              Your English learning journey starts here. In just a few minutes,
              you’ll know your exact level and how to improve step by step.
            </p>
            <p>👉 Click the button below and start your test now!</p>
            <Button label="Start Now" type="button" />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default LanguageTest;
