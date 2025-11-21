"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import TutorShowCart from "../TutorShowCart/TutorShowCart";
import { useSearchParams, useRouter } from "next/navigation";
import SelectLanguage from "../../Course/Courses/SelectLanguage";
import Inputs from "../../Common/Input/Input";
import { Tutor } from "@/model/tutorType";
import { api } from "@/lib/APIs/axiosInstance";
import { BeatLoader } from "react-spinners";
import Pagination from "../../Common/Pagination/Pagination";
import SelectDegree from "@/components/Course/Courses/SelectDegree";
import SelectCountry from "@/components/Course/Courses/SelectCountry";

const searchIcon = "/icons/searchIconGray.svg";

const TutorList = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const ppg = 3;
  const CurrentPage = parseInt(searchParam.get("page") || "1");

  // tutors state
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // filters - بدون localStorage
  const [filters, setFilters] = useState({
    language: "",
    search: "",
    degree: "",
    country: "",
  });

  const [searchTerms, setSearchTerms] = useState("");

  // fetch tutors
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await api.get(`/api/tutors`);
        setTutors(res.data);
      } catch (error) {
        console.error("Fetching tutors failed:", error);
        setError("Failed to load tutors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  // update filter و reset صفحه
  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    
    // reset page to 1 هنگام تغییر فیلتر
    if (CurrentPage !== 1) {
      router.push("/tutor?page=1");
    }
  };

  // sync search terms with filters
  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: searchTerms }));
  }, [searchTerms]);

  // filter tutors
  const filteredTutors = tutors.filter((tutor) => {
    const search = filters.search.toLowerCase();
    const language = filters.language.toLowerCase();
    const degree = filters.degree.toLowerCase();
    const country = filters.country.toLowerCase();

    const matchSearch =
      !search ||
      tutor.user.first_name.toLowerCase().includes(search) ||
      tutor.user.last_name.toLowerCase().includes(search);

    const tutorSubjects = (tutor.subjects || []).map((s) => s.toLowerCase());
    const tutorCountry = tutor.country.toLowerCase() || "";
    const matchLanguage = !language || tutorSubjects.includes(language);
    const matchCountry = !country || tutorCountry.includes(country);

    // فیلتر مدرک تحصیلی
    const matchDegree = !degree || 
      (tutor.educations && tutor.educations.length > 0 && 
       tutor.educations.some(edu => 
        edu.degree?.toLowerCase().includes(degree)
      ));

    return matchSearch && matchLanguage && matchDegree && matchCountry;
  });

  const firstIndex = (CurrentPage - 1) * ppg;
  const endIndex = firstIndex + ppg;
  const showTutors = filteredTutors.slice(firstIndex, endIndex);

  const totalPages = Math.ceil(filteredTutors.length / ppg);

  return (
    <div className="py-[60px] sm:py-20 px-4 sm:p-[60px] max-w-[1320px] mx-auto">
      <Layout>
        <div className="p-10">
          <h1 className="text-2xl font-bold text-[#45444A]">
            Learn English with the Right Teacher for You
          </h1>
          <p className="text-[#737177] mt-4">
            {`Our platform connects you with skilled tutors who match your learning style and goals. Whether you're aiming to boost your speaking skills, prepare for a test, or simply build confidence — you can choose from a variety of lessons that fit your schedule.`}
          </p>
        </div>
      </Layout>

      {/* filters */}
      <div className="w-full mt-6 flex justify-between gap-4 items-center flex-wrap">
        <div className="min-w-[250px] flex-1">
          <Inputs
            type="text"
            value={searchTerms}
            onchange={(e) => setSearchTerms(e.target.value)}
            placeholder={"Search tutor"}
            inputIcon={searchIcon}
            width="100%"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <SelectLanguage
            value={filters.language}
            onChange={(value) => updateFilter("language", value)}
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <SelectDegree
            value={filters.degree}
            onChange={(value) => updateFilter("degree", value)}
          />
        </div>
         <div className="min-w-[200px] flex-1">
          <SelectCountry
            value={filters.country}
            onChange={(value) => updateFilter("country", value)}
          />
        </div>
      </div>

      <hr className="flex-1 my-4 border-1 border-[#45444A]" />

      <div className="text-[#5C5A60]">
        <p>
          Number of Tutors Found: <b>{filteredTutors.length}</b>
        </p>
        <p className="font-bold mt-2 mb-8">
          Best matches based on your filters
        </p>
      </div>

      {/* tutors grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-lg p-8 bg-white/80 rounded-2xl shadow-md border-4 border-[#afaeb2] text-[#6e6d75]">
            Error : {error}
          </p>
        </div>
      ) : showTutors.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-lg">No tutors found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showTutors.map((tutor) => (
            <div key={tutor.id} className="flex justify-center">
              <TutorShowCart key={tutor.id} tutorId={tutor.id} />
            </div>
          ))}
        </div>
      )}

      {/* pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={CurrentPage}
          totalPages={totalPages}
          basePath="?page="
        />
      )}
    </div>
  );
};

export default TutorList;