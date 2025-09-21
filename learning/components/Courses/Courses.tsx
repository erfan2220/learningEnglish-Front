"use client";
import { useEffect, useState } from "react";
import Inputs from "../Input/Input";
import SelectLanguage from "./SelectLanguage";
import SelectLevel from "./SelectLevel";
import SelectTime from "./SelectTime";
import SelectDate from "./SelectDate";
import CourseCart from "../CourseCart/CourseCart";
import SelectPrice from "./SelectPrice";
import { useRouter, useSearchParams } from "next/navigation";
import { TemporaryCourse } from "@/model/courseType";
import { api } from "@/lib/APIs/axiosInstance";
import Pagination from "../Pagination/Pagination";

const Courses = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [courses, setCourses] = useState<TemporaryCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerms, setSearchTerms] = useState("");

  const [filters, setFilters] = useState({
    language: localStorage.getItem("languageFilterCourse") || "",
    level: "",
    time: "",
    date: "",
    price: "",
    search: "",
  });

  const ppg = 3;
  const CurrentPage = parseInt(searchParam.get("page") || "1");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get(`/api/courses`);
        setCourses(res.data);
      } catch (error) {
        console.error("Fetching courses failed:", error);
        setError("Failed to load tutors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    localStorage.setItem("searchTermsFilterCourse", searchTerms);
    setFilters((prev) => ({ ...prev, search: searchTerms }));
  }, [searchTerms]);

  const updateFilter = (key: string, value: string) => {
    localStorage.setItem(`${key}FilterCourse`, value);
    setFilters((prev) => ({ ...prev, [key]: value }));
    router.push("/courses?page=1");
  };

  useEffect(() => {
    const language = localStorage.getItem("languageFilterCourse") || "";
    const level = localStorage.getItem("levelFilterCourse") || "";
    const time = localStorage.getItem("timeFilterCourse") || "";
    const date = localStorage.getItem("dateFilterCourse") || "";
    const price = localStorage.getItem("priceFilterCourse") || "";
    const search = localStorage.getItem("searchTermsFilterCourse") || "";

    setFilters({ language, level, time, date, price, search });
    setSearchTerms(search);
  }, []);

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes("/courses")) {
        localStorage.removeItem("dateFilterCourse");
        localStorage.removeItem("languageFilterCourse");
        localStorage.removeItem("levelFilterCourse");
        localStorage.removeItem("timeFilterCourse");
        localStorage.removeItem("priceFilterCourse");
        localStorage.removeItem("searchTermsFilterCourse");
      }
    };
  }, []);

  // filters
  const filteredCourses = courses.filter((course) => {
    const matchSearch =
      !filters.search ||
      course.title.toLowerCase().includes(filters.search.toLowerCase());

    const matchLanguage =
      !filters.language || course.language === filters.language;

    const matchLevel = !filters.level || course.level === filters.level;

    let matchTime = true;
    if (filters.time) {
      const [filterStart, filterEnd] = filters.time
        .split(" - ")
        .map((t) => t.trim());

      matchTime = !(
        course.schedule_end <= filterStart || course.schedule_start >= filterEnd
      );
    }

    const matchDate = !filters.date || course.schedule_day === filters.date;

    const matchPrice = !filters.price
      ? true
      : filters.price === "0"
      ? Number(course.price_per_toman) === 0
      : Number(course.price_per_toman) <= Number(filters.price);

    return (
      matchSearch &&
      matchLanguage &&
      matchLevel &&
      matchTime &&
      matchDate &&
      matchPrice
    );
  });

  const firstIndex = (CurrentPage - 1) * ppg;
  const endIndex = firstIndex + ppg;
  const showCourses = filteredCourses.slice(firstIndex, endIndex);

  const totalPages = Math.ceil(filteredCourses.length / ppg);

  return (
    <div className="px-6 py-[60px] md:p-[60px] max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <h1 className="flex mt-[60px] mb-8 text-[#45444A] text-3xl font-bold">
          Filter Courses
        </h1>

        <div className="mt-6 w-full flex flex-col lg:flex-row gap-4 items-start">
          <div className="w-full lg:w-1/3">
            <Inputs
              type="text"
              value={searchTerms}
              onchange={(e) => setSearchTerms(e.target.value)}
              placeholder={"search course"}
              inputIcon="/icons/searchIconGray.svg"
              width="100%"
            />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <SelectLanguage
              value={filters.language}
              onChange={(value) => updateFilter("language", value)}
            />
            <SelectLevel
              value={filters.level}
              onChange={(value) => updateFilter("level", value)}
            />
            <SelectTime
              value={filters.time}
              onChange={(value) => updateFilter("time", value)}
            />
            <SelectDate
              value={filters.date}
              onChange={(value) => updateFilter("date", value)}
            />
            <SelectPrice
              free={filters.price === "0"}
              price={Number(filters.price) || 0}
              onChangeFree={(value) => updateFilter("price", value ? "0" : "")}
              onChangePrice={(value) => updateFilter("price", value.toString())}
            />
          </div>
        </div>
      </div>

      <hr className="flex-1 h-px my-8 border-1 border-[#45444A]" />

      <div>
        <h2 className="flex mb-8 text-black text-2xl font-bold">Results</h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-center text-lg">
              {/*<BeatLoader color="#5F33E1" />*/}
            </p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-center text-lg p-8 bg-white/80 rounded-2xl shadow-md border-4 border-[#afaeb2] text-[#6e6d75]">
              Error : {error}
            </p>
          </div>
        ) : showCourses.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-center text-lg">No courses found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showCourses.map((course) => (
              <div key={course.id} className="flex justify-center">
                <CourseCart course={course} />
              </div>
            ))}
          </div>
        )}
      </div>

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

export default Courses;
