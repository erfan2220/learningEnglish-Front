"use client";

import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Image from "next/image";
import Button from "@/components/Common/Button/Button";
import { api } from "@/lib/APIs/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FluentDoorRoutes } from "@/routes/routes";
import { AxiosError } from "axios";
import { TemporaryCourse } from "@/model/courseType";
import VoiceSearchInput from "@/components/Common/SearchInput/VoiceSearchInput";
import { Frown } from "lucide-react";

const titleIcon = "/icons/articleTitle.svg";
const billIcon = "/icons/priceGray.svg";
const currencyIcon = "/icons/currency.svg";
const noteIcon = "/icons/articleContent.svg";
const bannerPicture = "/icons/bannerDefault.png";
const sendIcon = "/icons/sentWhite.svg";

interface ApiErrorResponse {
  detail?: string;
  message?: string;
  error?: string;
}

const SendTutorBills = () => {
  const [imagePreview, setImagePreview] = useState(bannerPicture);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [course, setCourse] = useState<TemporaryCourse[]>([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseID, setCourseID] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get(`/api/courses`);
        setCourse(res.data);
      } catch (error) {
        console.error("Fetching courses failed:", error);
      }
    };
    fetchCourses();
  }, []);

  const findCourse = course.filter((c) => {
    if (!searchTerm) return true;
    return c.title.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    setImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (!courseID || !imagePreview) {
        toast.error("please fill in all fields.");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("course", courseID);
      formData.append("payment_amount", amount);
      formData.append("currency", currency);
      formData.append("payment_note", paymentNote);

      if (imageFile) {
        formData.append("payment_proof", imageFile);
      }

      console.log("📤 sending data");

      const res = await api.post("/api/enrollments/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Bill sent successfully:", res.data);
      toast.success("Bill sent successfully.");

      setCourseID("");
      setAmount("");
      setCurrency("");
      setPaymentNote("");
      setImagePreview(bannerPicture);
      setImageFile(null);

      router.push(FluentDoorRoutes.studentDashboard);
    } catch (error) {
      const err = error as AxiosError<ApiErrorResponse>;
      console.error("❌ error while sending bill:", err);

      let errorMessage = "unknown error";

      if (err.response?.data) {
        if (typeof err.response.data === "string") {
          errorMessage = err.response.data;
        } else if (err.response.data.detail) {
          errorMessage = err.response.data.detail;
        } else {
          errorMessage = JSON.stringify(err.response.data, null, 2);
        }
      } else if (err.message) {
        errorMessage = err.message;
      }

      alert(`❌ Error while sending bill\n\n${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8 px-1 md:px-2 lg:px-4 max-w-3xl mx-auto w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[600px] h-full rounded-xl overflow-hidden border-2 border-gray-300">
          <Image
            src={imagePreview}
            alt="profile photo"
            width={600}
            height={200}
            className="object-cover"
          />
        </div>

        <label className="cursor-pointer text-blue-600 underline">
          Upload Bill
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
      {/* ///////////////////////////////////////////// */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full">
              <label className="text-xs mx-2 mt-2 text-[#45444A]">
                Course Title
              </label>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-full border-2 flex items-center border-[#D2D2D2] rounded-2xl pl-10 px-4 bg-white/80 text-xs sm:text-sm h-11`}
              >
                <p className="text-xs sm:text-sm text-[#5C5A60]">
                  {courseTitle || ""}
                </p>

                <Image
                  src={titleIcon}
                  alt=" icon"
                  width={23}
                  height={23}
                  className="absolute top-[9px] left-3 cursor-pointer"
                />
              </div>
              {isOpen && (
                <div
                  className={`relative w-full flex flex-col items-start justify-start h-[200px] overflow-y-scroll border-2 mt-2 border-[#5F33E1] rounded-2xl px-4 bg-white/80 text-xs sm:text-sm py-2`}
                >
                  <VoiceSearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    className="mb-2 absolute top-0 left-0 right-0"
                  />
                  {findCourse.length === 0 ? (
                    <div className="flex flex-col items-center justify-center w-full h-[120px] gap-2 px-4">
                      <Frown color="#737177" size={32} />
                      <p className="text-xs sm:text-sm text-[#737177]">
                        No course found.
                      </p>
                    </div>
                  ) : (
                    findCourse.map((c) => (
                      <span
                        key={c.id}
                        className="border-b-2 border-[#D2D2D2] w-full bg-white/80 hover:bg-[#F1ECFF] px-2 hover:rounded-t-lg  transition-colors duration-200 cursor-pointer py-2"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setCourseTitle(c.title);
                          setCourseID(String(c.id));
                        }}
                      >
                        {c.title}
                      </span>
                    ))
                  )}
                </div>
              )}
            </div>

            <Inputs
              type="number"
              placeholder="bill amount"
              label="Bill Amount"
              width="100%"
              inputIcon={billIcon}
              value={amount}
              onchange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        {/* ===========payment note================================= */}

        <div className="relative mt-1 w-full">
          <label className="pl-2 text-xs">Payment Note</label>
          <textarea
            value={paymentNote}
            onChange={(e) => setPaymentNote(e.target.value)}
            rows={5}
            maxLength={150}
            placeholder="payment note"
            className="w-full text-sm border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl p-2 focus:outline-0 bg-white/80"
            style={{ textIndent: "2rem" }}
          />
          <Image
            src={noteIcon}
            alt="note icon"
            width={24}
            height={24}
            className="absolute top-[32px] left-3 cursor-pointer"
          />
        </div>
        <p className="text-xs text-[#5F33E1] px-2 -mt-1">{`${paymentNote.length} / 150`}</p>
        {/* ============================================ */}
        <div className="w-[100%]">
          <label className="text-xs mx-2 mt-2 text-[#45444A]">Currency</label>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
            >
              <option
                disabled
                defaultValue={"-country-"}
                value=""
                className="text-gray-500 text-sm"
              >
                --Currency--
              </option>
              {["USD", "Toman"].map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <Image
              src={currencyIcon}
              alt="currency icon"
              width={20}
              height={20}
              className="absolute top-[12px] left-4 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            btnIcon={sendIcon}
            label={isSubmitting ? "sending..." : "send bill"}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default SendTutorBills;
