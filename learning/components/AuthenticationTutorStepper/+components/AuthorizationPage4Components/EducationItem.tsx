"use client";
import Image from "next/image";
import Inputs from "@/components/Input/Input";

type Education = {
    degree: string;
    institution: string;
    country: string;
    city: string;
    field: string;
    startDate: string;
    endDate: string;
};

type Props = {
    index: number;
    value: Education;
    countryOptions: string[];
    onChange: (
        index: number,
        field:
            | "degree"
            | "institution"
            | "country"
            | "city"
            | "field"
            | "startDate"
            | "endDate",
        val: string
    ) => void;
    onRemove?: (index: number) => void;
    canRemove: boolean;
};

const degreeIcon = "/icons/degreeGray.svg";
const instituteIcon = "/icons/institutionGray.svg";
const locationIcon = "/icons/locationGray.svg";
const fieldIcon = "/icons/educationGray.svg";
const dateIcon = "/icons/dayIcon.svg";

const DEGREE_OPTIONS = [
    "Pre-Diploma",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctor of Philosophy",
    "General Medical Doctor",
    "Specialist Medical Degree",
];

export default function EducationItem({
                                          index,
                                          value,
                                          countryOptions,
                                          onChange,
                                          onRemove,
                                          canRemove,
                                      }: Props) {
    return (
        <div className="w-full flex flex-col gap-3 mb-4 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative">
            {canRemove && (
                <button
                    type="button"
                    onClick={() => onRemove?.(index)}
                    className="absolute top-0 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                >
                    Delete Education
                </button>
            )}

            {/* Degree */}
            <div className="w-full">
                <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">Latest Degree</label>
                <div className="relative w-full">
                    <select
                        name="selectDegree"
                        value={value.degree}
                        onChange={(e) => onChange(index, "degree", e.target.value)}
                        className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option disabled value="">
                            Degree
                        </option>
                        {DEGREE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt === "Doctor of Philosophy" ? "PhD" : opt}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={degreeIcon}
                        alt="degree icon"
                        width={24}
                        height={24}
                        className="absolute top-[20px] left-4 -translate-y-1/2"
                    />
                </div>
            </div>

            {/* Institution */}
            <div className="w-full">
                <Inputs
                    placeholder="Institution Name"
                    type="text"
                    inputIcon={instituteIcon}
                    label="Institution Name"
                    value={value.institution}
                    onchange={(e) => onChange(index, "institution", e.target.value)}
                    width="100%"
                />
            </div>

            {/* Country */}
            <div className="w-full">
                <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">Institution Country</label>
                <div className="relative w-full">
                    <select
                        name="selectCountry"
                        value={value.country}
                        onChange={(e) => onChange(index, "country", e.target.value)}
                        className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option disabled value="">
                            --select country--
                        </option>
                        {countryOptions.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={locationIcon}
                        alt="country icon"
                        width={24}
                        height={24}
                        className="absolute top-[20px] left-4 -translate-y-1/2"
                    />
                </div>
            </div>

            {/* City */}
            <div className="w-full">
                <Inputs
                    placeholder="Institution City"
                    type="text"
                    inputIcon={locationIcon}
                    label="Institution City"
                    value={value.city}
                    onchange={(e) => onChange(index, "city", e.target.value)}
                    width="100%"
                />
            </div>

            {/* Field */}
            <div className="w-full">
                <Inputs
                    placeholder="Field of Study"
                    type="text"
                    inputIcon={fieldIcon}
                    label="Field of Study"
                    value={value.field}
                    onchange={(e) => onChange(index, "field", e.target.value)}
                    width="100%"
                />
            </div>

            {/* Dates */}
            <div className="w-full">
                <Inputs
                    placeholder="Start Date"
                    type="date"
                    inputIcon={dateIcon}
                    label="Start Date"
                    value={value.startDate}
                    onchange={(e) => onChange(index, "startDate", e.target.value)}
                    width="100%"
                />
            </div>

            <div className="w-full">
                <Inputs
                    placeholder="End Date"
                    type="date"
                    inputIcon={dateIcon}
                    label="End Date"
                    value={value.endDate}
                    onchange={(e) => onChange(index, "endDate", e.target.value)}
                    width="100%"
                />
            </div>
        </div>
    );
}
