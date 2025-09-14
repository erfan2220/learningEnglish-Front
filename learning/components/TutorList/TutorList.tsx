"use client";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import TutorShowCart from "../TutorShowCart/TutorShowCart";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SelectLanguage from "../Courses/SelectLanguage";
import SelectLevel from "../Courses/SelectLevel";
import SelectTime from "../Courses/SelectTime";
import SelectDate from "../Courses/SelectDate";
import SelectPrice from "../Courses/SelectPrice";
import Inputs from "../Input/Input";
import searchIcon from "./../../assets/icons/searchIconGray.svg";
import { Tutor } from "@/model/tutorType";
import { api } from "@/lib/APIs/axiosInstance";
import { BeatLoader } from "react-spinners";

const TutorList = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const totalTutor = tutors.length;
  const searchParam = useSearchParams();
  const ppg = 3;
  const CurrentPage = parseInt(searchParam.get("page") || "1");
  const firstIndex = (CurrentPage - 1) * ppg;
  //   const lengthData = tutorMockDetail.length;
  const endIndex = firstIndex + 3;
  const showTutors = tutors.slice(firstIndex, endIndex);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await api.get(`/api/tutors`);
        setTutors(res.data);
      } catch (error) {
        console.error("Fetching error", error);
        setError("Failed to load courses details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  if (loading) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[100px] flex items-center justify-center">
        <BeatLoader color="#5F33E1" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <div className=" py-[60px] sm:py-20 sm:p-[60px] max-w-[1320px] mx-auto">
      <Layout>
        <div className="p-10">
          <h1 className="text-2xl font-bold text-[#45444A]">
            Learn English with the Right Teacher for You
          </h1>
          <p className="text-[#737177] mt-4">
            {`Our platform connects you with skilled tutors who match your
            learning style and goals. Whether you're aiming to boost your
            speaking skills, prepare for a test, or simply build confidence —
            you can choose from a variety of lessons that fit your schedule.`}
          </p>
        </div>
      </Layout>
      {/* ////////////////////////////////////// */}
      <div className="mt-6 flex flex-wrap justify-between gap-1 items-center">
        <div className="min-w-[320px] w-2/6">
          <Inputs
            type="text"
            placeholder={"search tutor"}
            inputIcon={searchIcon}
            width="100%"
          />
        </div>

        <SelectLanguage />
        <SelectLevel />
        <SelectTime />
        <SelectDate />
        <SelectPrice />
      </div>
      {/* ////////////////////////////////////// */}
      <hr className="flex-1 my-4 border-1 border-[#45444A]" />
      {/* ////////////////////////////////////// */}
      <div className="text-[#5C5A60] ">
        <p>
          English teachers found: <b>{totalTutor}</b>
        </p>
        <p className="font-bold mt-2 mb-8">
          Best matches based on your filters
        </p>
      </div>
      {/* ////////////////////////////////////// */}

      {showTutors.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-lg">No courses found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
          {showTutors.map((data) => (
            <div key={data.id}>
              <TutorShowCart tutorId={data.id} />
            </div>
          ))}
        </div>
      )}

      {/* /////////////////////////////////////////////// */}
      <div className="flex justify-center items-center mt-10 text-lg font-semibold text-[#5B5A60]">
        {CurrentPage > 1 && (
          <Link href={`?page=${CurrentPage - 1}`}>
            <div className="bg-[#5F33E1] text-white text-lg font-bold rounded-full px-2 pb-1 mx-3">
              {"<"}
            </div>
          </Link>
        )}
        <span className="flex gap-2">
          <p className="text-[#45444A] rounded-full px-2 bg-[#FF9AAB]">
            {CurrentPage}
          </p>
          <p className="font-medium"> of </p>
          {Math.ceil(tutors.length / ppg)}
        </span>

        {CurrentPage < Math.ceil(tutors.length / ppg) && (
          <Link
            href={`?page=${CurrentPage + 1}`}
            className="flex justify-center items-center"
          >
            <div className="bg-[#5F33E1] text-white text-lg font-bold rounded-full px-2 pb-1 mx-3">
              {">"}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TutorList;
