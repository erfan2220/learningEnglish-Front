"use client";

import React, { useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Image from "next/image";
import Button from "@/components/Common/Button/Button";
import { api } from "@/lib/APIs/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FluentDoorRoutes } from "@/routes/routes";
import { AxiosError } from "axios";

const titleIcon = "/icons/articleTitle.svg";
const bannerPicture = "/icons/bannerDefault.png";
const sendIcon = "/icons/sentWhite.svg";

interface ApiErrorResponse {
  detail?: string;
  message?: string;
  error?: string;
}

const SendStudentBills = () => {
  const [imagePreview, setImagePreview] = useState(bannerPicture);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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
      if (!title || !imagePreview) {
        toast.error("please fill in all fields.");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", title);

      if (imageFile) {
        formData.append("picture", imageFile);
      }

      console.log("📤 sending data");

      const res = await api.post("/api/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Article added successfully:", res.data);
      toast.success("Article added successfully.");

      setTitle("");
      setImagePreview(bannerPicture);
      setImageFile(null);

      router.push(FluentDoorRoutes.studentDashboard);
    } catch (error) {
      const err = error as AxiosError<ApiErrorResponse>;
      console.error("❌ error while adding article:", err);

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

      alert(`❌ Error while adding article\n\n${errorMessage}`);
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
            <Inputs
              type="text"
              placeholder="bill title"
              label="Bill Title"
              width="100%"
              inputIcon={titleIcon}
              value={title}
              onchange={(e) => setTitle(e.target.value)}
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

export default SendStudentBills;
