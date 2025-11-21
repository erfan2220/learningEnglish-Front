"use client";
import React, { useEffect, useState } from "react";
import Inputs from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button/Button";
import Image from "next/image";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";
import { User } from "@/model/types";

const certFile = "/icons/certFile.svg";
const certIcon = "/icons/certificateGray.svg";
const issueByIcon = "/icons/issueBy.svg";
const dateIcon = "/icons/dayIcon.svg";

interface CertItem {
  id?: number;
  certTitle: string;
  issueBy: string;
  issueDate: string;
  imagePreview: string;
  imageBase64: string;
}

const DashboardTutorCertification = () => {
  const [certifications, setCertifications] = useState<CertItem[]>([
    {
      certTitle: "",
      issueBy: "",
      issueDate: "",
      imagePreview: certFile,
      imageBase64: "",
    },
  ]);

  const [me, setMe] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  // گرفتن اطلاعات کاربر
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get(`/api/me`);
        setMe(res.data);
      } catch (error) {
        console.error("Fetching me failed:", error);
        toast.error("Failed to fetch user.");
      }
    };
    fetchMe();
  }, []);

  // گرفتن مدارک قبلی
  useEffect(() => {
    if (!me?.id) return;

    const fetchCertifications = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/api/tutor-certificates/?user=${me.id}`);

        const formatted = res.data.map((cert: any) => ({
          id: cert.id, // ⭐ شناسه مدرک
          certTitle: cert.title || "",
          issueBy: cert.issued_by || "",
          issueDate: cert.issue_date || "",
          imagePreview: cert.certificate_image || certFile,
          imageBase64: cert.certificate_image || "",
        }));

        setCertifications(formatted);
      } catch (error) {
        console.error("Fetching certifications failed:", error);
        toast.error("Failed to fetch certifications.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertifications();
  }, [me]);

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

  // حذف مدرک از صفحه
  const handleRemoveCertification = (index: number) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
  };

  // تغییر فیلدهای متنی
  const handleChange = (
    index: number,
    field: "certTitle" | "issueBy" | "issueDate",
    value: string
  ) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  // بارگذاری عکس و تبدیل به base64
  const handleImageChange = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;

      const updated = [...certifications];
      updated[index].imagePreview = base64;
      updated[index].imageBase64 = base64;
      setCertifications(updated);
    };

    reader.readAsDataURL(file);
  };

  // ارسال نهایی
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!me?.id) return toast.error("User not found");

    try {
      for (const cert of certifications) {
        const payload = {
          title: cert.certTitle,
          issued_by: cert.issueBy,
          issue_date: cert.issueDate,
          certificate_image: cert.imageBase64.startsWith("data:")
            ? cert.imageBase64
            : "",
          tutor: me.id,
        };

        if (cert.id) {
          //  مدرک قبلی  PATCH
          await api.patch(`/api/tutor-certificates/${cert.id}/`, payload);
        } else {
          //  مدرک جدید  POST
          await api.post(`/api/tutor-certificates/?user=${me.id}/`, payload);
        }
      }

      toast.success("Certifications updated successfully!");
    } catch (error) {
      console.error("Updating certifications failed:", error);
      toast.error("Failed to update certifications.");
    }
  };

  if (isLoading) return <div className="my-12 px-4">Loading...</div>;

  return (
    <div className="my-12 px-4">
      <h1 className="text-[#45444A] font-bold text-2xl">Certifications</h1>

      <form onSubmit={handleSubmit}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 mt-12 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
          >
            {certifications.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveCertification(index)}
                className="absolute top-0 right-0 text-[#E13350] text-xs font-bold underline"
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
                onchange={(e) =>
                  handleChange(index, "issueBy", e.target.value)
                }
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
                <Image
                  src={cert.imagePreview}
                  alt="cert"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>

              <label className="cursor-pointer text-blue-600 underline mt-2">
                Upload Photo
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

        <p
          className="text-[#45444A] font-bold underline hover:cursor-pointer mt-4"
          onClick={handleAddCertification}
        >
          + Add Certification
        </p>

        <div className="flex justify-end mt-8">
          <Button type="submit" label={"Update Certification"} />
        </div>
      </form>
    </div>
  );
};

export default DashboardTutorCertification;
