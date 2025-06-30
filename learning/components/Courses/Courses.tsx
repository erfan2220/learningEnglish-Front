import Inputs from "../Input/Input";
import searchIcon from "../../assets/icons/searchIconGray.svg";
import SelectLanguage from "./SelectLanguage";
import SelectLevel from "./SelectLevel";
import SelectTime from "./SelectTime";
import SelectDate from "./SelectDate";
import { courseDetail } from "@/mock/courseDetail";
import CourseCart from "../CourseCart/CourseCart";
import SelectPrice from "./SelectPrice";

const Courses = () => {
  return (
    <div className="px-6 py-[60px] md:p-[60px] max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <h1 className="flex mt-[60px] mb-8 text-[#45444A] text-3xl font-bold">
          Filter Courses
        </h1>

        <div className="flex flex-wrap gap-1 items-center">
          <div className="min-w-[320px]">
            <Inputs
              type="text"
              placeholder={"search course"}
              inputIcon={searchIcon}
              width="100%"
            />
          </div>

          <div className="flex flex-wrap items-start">
            <SelectLanguage />
            <SelectLevel />
            <SelectTime />
            <SelectDate />
            <SelectPrice />
          </div>
        </div>
      </div>

      <hr className="flex-1  h-px my-4 border-1  border-[#45444A]" />
      <div>
        <h2 className="flex mb-8 text-[#45444A] text-2xl font-bold">Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {courseDetail.map((course) => (
            <div key={course.id}>
              <CourseCart course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
