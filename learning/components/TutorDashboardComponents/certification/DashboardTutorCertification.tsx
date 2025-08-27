"use client";
import React, { useState } from "react";
import certFile from "./../../../assets/icons/certFile.svg";
import certIcon from "./../../../assets/icons/certificateGray.svg";
import issueByIcon from "./../../../assets/icons/issueBy.svg";
import dateIcon from "./../../../assets/icons/dayIcon.svg";
import Inputs from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Image from "next/image";

const DashboardTutorCertification = () => {
  const [certifications, setCertifications] = useState([
    {
      certTitle: "",
      issueBy: "",
      issueDate: "",
      imagePreview: certFile,
    },
  ]);

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      {
        certTitle: "",
        issueBy: "",
        issueDate: "",
        imagePreview: certFile,
      },
    ]);
  };

  const handleRemoveCertification = (index: number) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
  };

  const handleChange = (
    index: number,
    field: "certTitle" | "issueBy" | "issueDate",
    value: string
  ) => {
    const updatedCerts = [...certifications];
    updatedCerts[index][field] = value;
    setCertifications(updatedCerts);
  };

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageURL = URL.createObjectURL(file);
    const updatedCerts = [...certifications];
    updatedCerts[index].imagePreview = imageURL;
    setCertifications(updatedCerts);
  };

  return (
    <div className="my-12 px-1 md:px-4 lg:px-8">
      <h1 className="text-[#45444A] font-bold text-2xl">Certifications</h1>

      <form>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col gap-3  mt-12 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative"
          >
            {/* delete certification  */}
            {certifications.length > 1 && (
              <button
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
