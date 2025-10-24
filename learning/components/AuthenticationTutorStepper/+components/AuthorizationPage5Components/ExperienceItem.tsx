"use client";
import Image from "next/image";
import Inputs from "@/components/Common/Input/Input";

const locationIcon = "/icons/locationGray.svg";
const experienceIcon = "/icons/experienceGray.svg";
const dateIcon = "/icons/dayIcon.svg";

export type Experience = {
    experience: string;
    country: string;
    city: string;
    startDate: string;
    endDate: string;
    describe: string;
};

type Props = {
    index: number;
    value: Experience;
    countryOptions: string[];
    onChange: (
        index: number,
        field: "experience" | "country" | "city" | "startDate" | "endDate" | "describe",
        val: string
    ) => void;
    onRemove?: (index: number) => void;
    canRemove: boolean;
};

export default function ExperienceItem({
                                           index,
                                           value,
                                           countryOptions,
                                           onChange,
                                           onRemove,
                                           canRemove,
                                       }: Props) {
    return (
        <div className="flex flex-col gap-3 mt-4 items-center justify-center relative">
            <hr className="border-2 border-[#BBBBBB] mx-2 sm:mx-0 w-full" />

            {canRemove && (
                <button
                    type="button"
                    onClick={() => onRemove?.(index)}
                    className="absolute top-1 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                >
                    Delete Experience
                </button>
            )}

            <div className="w-full">
                <Inputs
                    placeholder="Experience Title"
                    type="text"
                    inputIcon={experienceIcon}
                    label="Experience Title"
                    value={value.experience}
                    onchange={(e) => onChange(index, "experience", e.target.value)}
                    width="100%"
                />
            </div>

            <div className="w-full">
                <label className="text-[#5C5A60] mx-2 text-xs mb-1 block">Country</label>
                <div className="relative w-full">
                    <select
                        name="selectCountry"
                        value={value.country}
                        onChange={(e) => onChange(index, "country", e.target.value)}
                        className="text-[#5C5A60] w-full border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-10 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option value="" disabled>
                            --select country--
                        </option>
                        {countryOptions.map((country) => (
                            <option key={country} value={country}>
                                {country}
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

            <div className="w-full">
                <Inputs
                    placeholder="City"
                    type="text"
                    inputIcon={locationIcon}
                    label="City"
                    value={value.city}
                    onchange={(e) => onChange(index, "city", e.target.value)}
                    width="100%"
                />
            </div>

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

            <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">Briefly describe your teaching experience</label>
                <textarea
                    rows={5}
                    value={value.describe}
                    onChange={(e) => onChange(index, "describe", e.target.value)}
                    placeholder="type here ..."
                    className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm focus:outline-0"
                />
            </div>
        </div>
    );
}
