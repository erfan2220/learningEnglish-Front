"use client";
import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button/Button";
import Image from "next/image";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";

const certFile = "/icons/certFile.svg";
const certIcon = "/icons/certificateGray.svg";
const issueByIcon = "/icons/issueBy.svg";
const dateIcon = "/icons/dayIcon.svg";

const DashboardTutorCertification = () => {
  const [certifications, setCertifications] = useState([
    {
      certTitle: "",
      issueBy: "",
      issueDate: "",
      imagePreview: certFile,
      imageBase64: "", // اینو اضافه کردیم برای ذخیره بیس ۶۴
    },
  ]);
  const [getCertification, setGetCertification] = useState([]);
  const [me, setMe] = useState({});
  // const { user } = useAuth();
  // console.log(' user', user)

  // گرفتن اطلاعات کاربر
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get(`/api/me`);
        setMe(res.data);
      } catch (error) {
        console.error("Fetching me failed:", error);
        toast.error("Failed to fetch me. Please try again later.");
      }
    };
    fetchMe();
  }, []);

  // گرفتن مدارک قبلی
  useEffect(() => {
    if (!me?.id) return;
    const fetchCertifications = async () => {
      try {
        const res = await api.get(`/api/tutor-certificates/?user=${me.id}`);
        setGetCertification(res.data);
        console.log('getCertification', res.data)
      } catch (error) {
        console.error("Fetching certifications failed:", error);
        toast.error("Failed to fetch certifications. Please try again later.");
      }
    };
    fetchCertifications();
  }, [me]);

  console.log(getCertification)
  console.log('me', me)

  // افزودن مدرک جدید
  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      {
        certTitle: "",
        issueBy: "",
        issueDate: "",
        imagePreview: certFile,
        imageBase64: "",
      },
    ]);
  };

  // حذف مدرک
  const handleRemoveCertification = (index: number) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
  };

  // تغییر مقدار فیلدهای متنی
  const handleChange = (
    index: number,
    field: "certTitle" | "issueBy" | "issueDate",
    value: string
  ) => {
    const updatedCerts = [...certifications];
    updatedCerts[index][field] = value;
    setCertifications(updatedCerts);
  };

  // تبدیل عکس به base64 و ذخیره در state
  const handleImageChange = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const updatedCerts = [...certifications];
      updatedCerts[index].imagePreview = base64String; // برای نمایش در صفحه
      updatedCerts[index].imageBase64 = base64String; // برای ارسال به API
      setCertifications(updatedCerts);
    };
    reader.readAsDataURL(file);
  };

  // ارسال اطلاعات به API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!me?.id) {
      toast.error("User not found");
      return;
    }

    try {
      for (const cert of certifications) {
        const payload = {
          title: cert.certTitle,
          issued_by: cert.issueBy,
          issue_date: cert.issueDate,
          certificate_image: cert.imageBase64.startsWith("data:")
            ? cert.imageBase64
            : "",

          // certificate_image: cert.imageBase64, // عکس به‌صورت base64
          tutor: me.id,
        };

        await api.patch(`/api/tutor-certificates/${me.id}`, payload);
      }

      toast.success("Certifications updated successfully!");
    } catch (error) {
      console.error("Updating certifications failed:", error);
      toast.error("Failed to update certifications.");
    }
  };

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Certifications</h1>

      <form onSubmit={handleSubmit}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col gap-3  mt-12 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
          >
            {/* delete certification  */}
            {certifications.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveCertification(index)}
                className="absolute top-0 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
              >
                Delete Certification
              </button>
            )}

            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Certification Title"
                type="text"
                inputIcon={certIcon}
                label="Certification Title"
                value={cert.certTitle}
                onchange={(e) =>
                  handleChange(index, "certTitle", e.target.value)
                }
                width="100%"
              />
            </div>
            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Issue By"
                type="text"
                inputIcon={issueByIcon}
                label="Issue By"
                value={cert.issueBy}
                onchange={(e) => handleChange(index, "issueBy", e.target.value)}
                width="100%"
              />
            </div>
            <div className="w-full sm:w-[450px]">
              <Inputs
                placeholder="Issue Date"
                type="date"
                inputIcon={dateIcon}
                label="Issue Date"
                value={cert.issueDate}
                onchange={(e) =>
                  handleChange(index, "issueDate", e.target.value)
                }
                width="100%"
              />
            </div>

            <div className="flex flex-col justify-center items-center my-4">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
                {/* <img
                  src={cert.imagePreview}
                  alt="cert"
                  className="object-cover w-[120px] h-[120px]"
                /> */}
                <Image
                  src={cert.imagePreview}
                  alt="cert"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
              <label className="cursor-pointer text-blue-600 underline mt-2">
                Upload photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ))}

        {/* add new certification   */}
        <p
          className="text-[#45444A] font-bold underline hover:cursor-pointer flex sm:items-center sm:justify-center mt-4"
          onClick={handleAddCertification}
        >
          + Add Certification
        </p>

        <div className="flex justify-end mt-8">
          <Button type="submit" label={"update certification"} />
        </div>
      </form>
    </div>
  );
};

export default DashboardTutorCertification;
