"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { TemporaryCourse } from "@/model/courseType";
const defaultPhoto = "/icons/profilePhotoDefault.svg";
import { Star } from "lucide-react";
import Inputs from "../Input/Input";
const tickBlue = "/icons/tickBlue.svg";
const copunIcon = "/icons/copunGray.svg";
const tickWhite = "/icons/tickWhite.svg";
const studentIcon = "/icons/educationPink.svg";
const timeIcon = "/icons/clockPurple.svg";
const dateIcon = "/icons/dateGreen.svg";
const meliBank = "/icons/meliBank.png";
const keshavarziBank = "/icons/KeshavarziBank.png";
const refahBank = "/icons/refahBank.png";
const sepahBank = "/icons/sepahBank.png";
const pasargadBank = "/icons/PasargadBank.png";
const paymentIcon = "/icons/paymentWhite.svg";
const cancelIcon = "/icons/cancel.svg";
import Button from "../Button/Button";
import { Toaster, toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { api } from "@/lib/APIs/axiosInstance";

const bankList = [
  {
    id: 1,
    bankName: "Meli Bank",
    icon: meliBank,
  },
  {
    id: 2,
    bankName: "Refah Bank",
    icon: refahBank,
  },
  {
    id: 3,
    bankName: "Keshavarzi Bank",
    icon: keshavarziBank,
  },
  {
    id: 4,
    bankName: "Pasargad Bank",
    icon: pasargadBank,
  },
  {
    id: 5,
    bankName: "Sepah Bank",
    icon: sepahBank,
  },
];

const CartComponent = () => {
  const [courses, setCourses] = useState<TemporaryCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courseSelectedId, setCourseSelectedId] = useState<string | null>(null);
  const [coupon, setCoupon] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [selectedBank, setSelectedBank] = useState(0);
  const [btnTrigger, setBtnTrigger] = useState(true);

  useEffect(() => {
    setCourseSelectedId(localStorage.getItem("selectedCourseId"));
  }, []);

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
    return () => {
      if (!window.location.pathname.includes("/cart")) {
        localStorage.removeItem("bankName");
      }
    };
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
    const fee = ((Number(selectedCourse.price_per_toman) * 9) / 100).toFixed(3);
    const basePrice = (
      Number(selectedCourse.price_per_toman) + Number(fee)
    ).toFixed(3);

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
        setTotalPrice(Number(discountedPrice.toFixed(3)));
        setDiscountApplied(true);
        toast.success("Coupon has been applied");
      } else {
        toast.error("Invalid Coupon");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-[60px] h-64">
        <BeatLoader color="#5F33E1" />
      </div>
    );
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
    return (
      <div className="p-12 max-w-[1320px] mx-auto mt-12">
        Your Cart Is Empty.
      </div>
    );
  }

  const selectedCourse = filteredCourses[0];

  return (
    <div className="p-2 pt-12 sm:pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[20px]">
        <div className="p-4 sm:p-12">
          <p className="font-bold text-2xl text-[#45444A]">
            Choose a payment method
          </p>

          <div className="flex flex-col sm:flex-row gap-10 mt-6">
            <div className="bg-white/80 w-full sm:w-1/2 rounded-2xl shadow-md hover:shadow-lg p-8">
              <p className="text-[#45444A] font-semibold text-base">
                Please choose your payment method.
              </p>
              <div className="flex flex-wrap items-center justify-start gap-2 my-14 mb-16">
                {bankList.map((bank) => (
                  <div
                    key={bank.id}
                    onClick={() => {
                      setSelectedBank(bank.id);
                      localStorage.setItem("bankName", bank.bankName);
                      setBtnTrigger(false);
                    }}
                    className={`border-2 border-dashed cursor-pointer border-[#A3A3A4] p-2 rounded-lg h-28 flex items-center justify-center
                      ${selectedBank === bank.id ? "bg-[#e8e2fa]" : ""}
                      `}
                  >
                    <Image
                      src={bank.icon}
                      alt={bank.bankName}
                      width={70}
                      height={70}
                    />
                  </div>
                ))}
              </div>
              {/* ===================== */}
              <Button
                label="Complete Payment"
                btnIcon={paymentIcon}
                type="button"
                widthBtn="100%"
                disabled={btnTrigger}
              />
              <Button
                label="Cancel"
                btnIcon={cancelIcon}
                type="button"
                widthBtn="100%"
                colorBtn="#FF3164"
                colorBtnHover="#a50034"
                colorBtnActive="#ff6f61"
                onclick={() => {
                  localStorage.removeItem("selectedCourseId");
                  toast.success("Course Deleted Successfully.");
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
              />
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
              {/* =============== */}
              <div className="text-xs sm:text-sm text-[#737177] flex items-center justify-around">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C5A60] rounded-xl p-1 w-1/4 h-24 ">
                  <Image
                    src={studentIcon}
                    alt="student"
                    width={35}
                    height={35}
                  />
                  <p>
                    <b>{selectedCourse.active_students}</b>
                    {` active student`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C5A60] rounded-xl p-1 w-1/4 h-24">
                  <Image src={timeIcon} alt="student" width={35} height={35} />
                  <p>
                    <b>{selectedCourse.length}</b>
                    {` minutes`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#5C5A60] rounded-xl p-1 w-1/4 h-24">
                  <Image src={dateIcon} alt="student" width={35} height={35} />
                  <div className="flex flex-col items-center justify-center">
                    <p>{selectedCourse.schedule_day}</p>
                    <p>{`${selectedCourse.schedule_start} - ${selectedCourse.schedule_end}`}</p>
                  </div>
                </div>
              </div>
              {/* ============ */}
              <div className="w-full text-center flex flex-col  mt-10 ">
                <div className="flex px-6 items-center justify-between">
                  <p className="text-base text-[#45444A] font-bold">{`${selectedCourse.title}`}</p>
                  <p className="text-base text-[#5C5A60]">{`Toman ${selectedCourse.price_per_toman}`}</p>
                </div>
                <div className="flex px-6 items-center justify-between mt-4">
                  <p className="text-base text-[#45444A] font-bold">
                    Service fee
                  </p>
                  <p className="text-base text-[#5C5A60]">{`Toman ${fee.toFixed(
                    3
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
                <p className="text-base font-bold text-[#5C5A60]">{`Toman ${totalPrice.toFixed(
                  3
                )}`}</p>
              </div>
              {/* ============ */}
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
