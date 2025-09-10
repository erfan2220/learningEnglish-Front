"use client";
import React, { useState } from "react";
import { policyTerms } from "../../constant/policy";
import Image from "next/image";
import Inputs from "../Input/Input";

const policyPic = "/images/policyPic.svg";
const searchIcon = "/icons/searchIconGray.svg";

const PolicyTerms = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = policyTerms.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (id: number | null) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[60px] flex flex-col-reverse md:flex-row items-center justify-center py-8">
      {/* Accordion Section */}
      <div className="w-full mx-auto p-6">
        <div className="border-2 border-white rounded-xl shadow-md bg-white/30 text-[#5C5A60] text-sm sm:text-base">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="border-b border-white last:border-none"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className={`flex justify-between items-center w-full text-left px-4 py-3 font-medium rounded-xl hover:bg-[#B49AFF] hover:text-[#25087B] focus:outline-none ${
                    openId === item.id
                      ? "bg-[#B49AFF] text-[#25087B] transition-all duration-500"
                      : ""
                  }`}
                >
                  {item.question}
                  <span
                    className={`ml-2 text-2xl font-bold ${
                      openId === item.id ? "text-[#25087B]" : ""
                    }`}
                  >
                    {openId === item.id ? "−" : "+"}
                  </span>
                </button>

                {/* Smooth Accordion */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === item.id ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="p-4 text-xs sm:text-sm bg-[#5F33E1] text-white font-semibold rounded-xl">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500">No results found</p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col justify-start items-center w-full px-6 py-2">
        <h1 className="text-[#45444A] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Policies & Regulations
        </h1>
        <Image
          src={policyPic}
          alt="policy illustration"
          width={200}
          height={200}
          className="hidden md:block"
          style={{ width: "90%", height: "90%" }}
        />
        <div className="w-full">
          <Inputs
            label="Search in Policies"
            placeholder="search"
            type="text"
            inputIcon={searchIcon}
            width="100%"
            value={searchTerm}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyTerms;
