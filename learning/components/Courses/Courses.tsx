"use client";
import { useEffect, useState } from "react";
import Inputs from "../Input/Input";
import searchIcon from "./../../assets/icons/searchIconGray.svg";
import SelectLanguage from "./SelectLanguage";
import SelectLevel from "./SelectLevel";
import SelectTime from "./SelectTime";
import SelectDate from "./SelectDate";
import CourseCart from "../CourseCart/CourseCart";
import SelectPrice from "./SelectPrice";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { TemporaryCourse } from "@/model/courseType";
import axios from "axios";

const Courses = () => {
  const searchParam = useSearchParams();
  const ppg = 3;
  const CurrentPage = parseInt(searchParam.get("page") || "1");
  const firstIndex = (CurrentPage - 1) * ppg;
  const endIndex = firstIndex + 3;

  const [courses, setCourses] = useState<TemporaryCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/`
        );
        setCourses(res.data);
        console.log("Fetched courses:", res.data);
      } catch (error) {
        console.error("Fetching courses failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const showCourses = courses.slice(firstIndex, endIndex);

  return (
    <div className="px-6 py-[60px] md:p-[60px] max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <h1 className="flex mt-[60px] mb-8 text-[#45444A] text-3xl font-bold">
          Filter Courses
        </h1>

        <div className="mt-6 w-full flex flex-col lg:flex-row gap-4 items-start">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <Inputs
              type="text"
              placeholder={"search course"}
              inputIcon={searchIcon}
              width="100%"
            />
          </div>

          <div className="w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <SelectLanguage />
            <SelectLevel />
            <SelectTime />
            <SelectDate />
            <SelectPrice />
          </div>
        </div>
      </div>

      <hr className="flex-1 h-px my-8 border-1 border-[#45444A]" />

      <div>
        <h2 className="flex mb-8 text-black text-2xl font-bold">Results</h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-center text-lg">Loading courses...</p>
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 text-lg font-semibold text-[#5B5A60]">
        {CurrentPage > 1 && (
          <Link href={`?page=${CurrentPage - 1}`}>
            <div className="flex items-center justify-center w-8 h-8 bg-[#5F33E1] text-white text-lg font-bold rounded-full mx-2 cursor-pointer hover:bg-[#4A22C2] transition-colors">
              {"<"}
            </div>
          </Link>
        )}

        <span className="flex items-center gap-2 mx-2">
          <p className="text-[#45444A] rounded-full w-8 h-8 flex items-center justify-center bg-[#FF9AAB]">
            {CurrentPage}
          </p>
          <p className="font-medium"> of </p>
          <p>{Math.ceil(courses.length / ppg)}</p>
        </span>

        {CurrentPage < Math.ceil(courses.length / ppg) && (
          <Link href={`?page=${CurrentPage + 1}`}>
            <div className="flex items-center justify-center w-8 h-8 bg-[#5F33E1] text-white text-lg font-bold rounded-full mx-2 cursor-pointer hover:bg-[#4A22C2] transition-colors">
              {">"}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Courses;

// "use client";
// import { useEffect, useState } from "react";
// import Inputs from "../Input/Input";
// import searchIcon from "./../../assets/icons/searchIconGray.svg";
// import SelectLanguage from "./SelectLanguage";
// import SelectLevel from "./SelectLevel";
// import SelectTime from "./SelectTime";
// import SelectDate from "./SelectDate";
// import CourseCart from "../CourseCart/CourseCart";
// import SelectPrice from "./SelectPrice";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { TemporaryCourse } from "@/model/courseType";
// import axios from "axios";

// const Courses = () => {
//   const searchParam = useSearchParams();
//   const ppg = 3;
//   const CurrentPage = parseInt(searchParam.get("page") || "1");
//   const firstIndex = (CurrentPage - 1) * ppg;
//   const endIndex = firstIndex + 3;

//   const [courses, setCourses] = useState<TemporaryCourse[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/`
//         );
//         setCourses(res.data);
//         console.log("Fetched courses:", res.data);
//       } catch (error) {
//         console.error("Fetching courses failed:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const showCourses = courses.slice(firstIndex, endIndex);

//   return (
//     <div className="px-6 py-[60px] md:p-[60px] max-w-[1320px] mx-auto">
//       <div className="mt-[60px]">
//         <h1 className="flex mt-[60px] mb-8 text-[#45444A] text-3xl font-bold">
//           Filter Courses
//         </h1>

//         <div className="mt-6 w-full flex flex-row flex-wrap gap-3">
//           {/* Search */}
//           <div className="w-full md:w-1/3">
//             <Inputs
//               type="text"
//               placeholder={"search course"}
//               inputIcon={searchIcon}
//               width="100%"
//             />
//           </div>

//           {/* Filters */}
//           <div className="w-full md:w-2/3 grid grid-cols-2 md:flex md:flex-wrap gap-3">
//             <SelectLanguage />
//             <SelectLevel />
//             <SelectTime />
//             <SelectDate />
//             <SelectPrice />
//           </div>
//         </div>
//       </div>

//       <hr className="flex-1  h-px my-4 border-1  border-[#45444A]" />
//       <div>
//         <h2 className="flex mb-8 text-black text-2xl font-bold">Results</h2>

//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-14">
//             {showCourses.map((course) => (
//               <div key={course.id}>
//                 <CourseCart course={course} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* pagination */}
//       <div className="flex justify-center items-center mt-10 text-lg font-semibold text-[#5B5A60]">
//         {CurrentPage > 1 && (
//           <Link href={`?page=${CurrentPage - 1}`}>
//             <div className="bg-[#5F33E1] text-white text-lg font-bold rounded-full px-2 pb-1 mx-3">
//               {"<"}
//             </div>
//           </Link>
//         )}
//         <span className="flex gap-2">
//           <p className="text-[#45444A] rounded-full px-2 bg-[#FF9AAB]">
//             {CurrentPage}
//           </p>
//           <p className="font-medium"> of </p>
//           {Math.ceil(courses.length / ppg)}
//         </span>

//         {CurrentPage < Math.ceil(courses.length / ppg) && (
//           <Link href={`?page=${CurrentPage + 1}`}>
//             <div className="bg-[#5F33E1] text-white text-lg font-bold rounded-xl px-2 pb-1 mx-3">
//               {">"}
//             </div>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;
