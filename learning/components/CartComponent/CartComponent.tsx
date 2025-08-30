"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import axios from "axios";
import { TemporaryCourse } from "@/model/courseType";
import defaultPhoto from "../../assets/images/profilePhoto.svg";
import { Star } from "lucide-react";
import Inputs from "../Input/Input";
import tickBlue from "../../assets/icons/tickBlue.svg";
import copunIcon from "../../assets/icons/copunGray.svg";
import tickWhite from "../../assets/icons/tickWhite.svg";

const CartComponent = () => {
  const [courses, setCourses] = useState<TemporaryCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courseSelectedId, setCourseSelectedId] = useState<string | null>(null);
  const [coupon, setCoupon] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    setCourseSelectedId(localStorage.getItem("selectedCourseId"));
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/`
        );
        setCourses(res.data);
      } catch (error) {
        console.error("Fetching courses failed:", error);
        setError("Failed to load courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Calculate price using useMemo to avoid recalculating on every render
  const { fee, basePrice } = useMemo(() => {
    if (courses.length === 0 || !courseSelectedId) {
      return { fee: 0, basePrice: 0 };
    }

    const filteredCourses = courses.filter(
      (course) => course.courseId === courseSelectedId
    );

    if (filteredCourses.length === 0) {
      return { fee: 0, basePrice: 0 };
    }

    const selectedCourse = filteredCourses[0];
    const fee = ((Number(selectedCourse.price_per_dollar) * 9) / 100).toFixed(
      2
    );
    const basePrice = (
      Number(selectedCourse.price_per_dollar) + Number(fee)
    ).toFixed(2);

    return { fee: Number(fee), basePrice: Number(basePrice) };
  }, [courses, courseSelectedId]);

  // Set initial total price
  useEffect(() => {
    if (basePrice > 0 && totalPrice === 0) {
      setTotalPrice(basePrice);
    }
  }, [basePrice, totalPrice]);

  const handleClick = () => {
    if (coupon && !discountApplied) {
      if (coupon === "OFF40") {
        const discountedPrice = basePrice - (basePrice * 40) / 100;
        setTotalPrice(Number(discountedPrice.toFixed(2)));
        setDiscountApplied(true);
      } else {
        alert("Invalid Coupon");
      }
    }
  };

  if (loading) {
    return <div className="p-12 max-w-[1320px] mx-auto">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-12 max-w-[1320px] mx-auto text-red-500">{error}</div>
    );
  }

  const filteredCourses = courses.filter(
    (course) => course.courseId === courseSelectedId
  );

  if (filteredCourses.length === 0) {
    return <div className="p-12 max-w-[1320px] mx-auto">No course found.</div>;
  }

  const selectedCourse = filteredCourses[0];

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <div className="p-4 sm:p-12">
          <p className="font-bold text-2xl text-[#45444A]">
            Choose a payment method
          </p>

          <div className="flex flex-col sm:flex-row gap-10 mt-10">
            <div className="bg-white/80 w-full sm:w-1/2 rounded-2xl shadow-md hover:shadow-lg">
              Payment methods will be implemented here
            </div>

            <div className="bg-white/80 w-full sm:w-1/2 rounded-2xl shadow-md hover:shadow-lg">
              <div className="p-4 flex items-center justify-center gap-8">
                <div className="relative w-24 h-24 mt-4 ">
                  <Image
                    src={selectedCourse.tutor.profile_picture ?? defaultPhoto}
                    alt="Tutor"
                    width={150}
                    height={150}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#45444A] text-base font-bold">
                    {selectedCourse.tutor.user}
                  </p>
                  <p className="text-xs text-[#8B8A8E]">Professional Tutor</p>
                  <div className="flex items-center gap-2">
                    <Star fill="#FFBF00" strokeWidth={0} />
                    <p className="text-[#FFA648] text-sm font-semibold">4.5</p>
                    <p className="text-[#A3A3A4] text-sm font-semibold">{`(reviews: 1200)`}</p>
                  </div>
                </div>
              </div>
              {/* ============ */}
              <div className="w-full text-center flex flex-col  mt-10 ">
                <div className="flex px-6 items-center justify-between">
                  <p className="text-base text-[#45444A] font-bold">{`${selectedCourse.title} (${selectedCourse.length} minutes)`}</p>
                  <p className="text-base text-[#5C5A60]">{`$ ${selectedCourse.price_per_dollar}`}</p>
                </div>
                <div className="flex px-6 items-center justify-between mt-4">
                  <p className="text-base text-[#45444A] font-bold">
                    Service fee
                  </p>
                  <p className="text-base text-[#5C5A60]">{`$ ${fee.toFixed(
                    2
                  )}`}</p>
                </div>
              </div>
              <div className="w-full flex gap-4 px-4 mt-4">
                <div className="w-2/3">
                  <Inputs
                    value={coupon}
                    onchange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter Coupon"
                    type="text"
                    width="100%"
                    inputIcon={copunIcon}
                    disabled={discountApplied}
                  />
                </div>
                <button
                  className={`text-[#5F33E1] w-1/3 cursor-pointer font-semibold text-sm px-2 text-center py-2 border-[#5F33E1] border-2 flex items-center justify-center gap-2 rounded-2xl ${
                    discountApplied
                      ? "bg-[#5F33E1] text-white opacity-50 cursor-not-allowed"
                      : `bg-white hover:bg-[#5F33E1] hover:text-white ${
                          isHovered ? "bg-[#5F33E1] text-white" : ""
                        }`
                  }`}
                  onMouseEnter={() => !discountApplied && setIsHovered(true)}
                  onMouseLeave={() => !discountApplied && setIsHovered(false)}
                  onClick={handleClick}
                  disabled={discountApplied}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={tickBlue}
                      alt=""
                      width={25}
                      height={25}
                      className={`absolute transition-opacity duration-200 ${
                        discountApplied || isHovered
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    <Image
                      src={tickWhite}
                      alt=""
                      width={25}
                      height={25}
                      className={`absolute transition-opacity duration-200 ${
                        discountApplied || isHovered
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  <p>{discountApplied ? "Applied" : "Apply Coupon"}</p>
                </button>
              </div>
              <hr className="border-[1.5px] border-[#8B8A8E] mx-4 my-4" />
              <div className="flex px-6 items-center justify-between mb-4">
                <p className="text-base text-[#45444A] font-bold">Total</p>
                <p className="text-base font-bold text-[#5C5A60]">{`$ ${totalPrice.toFixed(
                  2
                )}`}</p>
              </div>
              {/* ============ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
