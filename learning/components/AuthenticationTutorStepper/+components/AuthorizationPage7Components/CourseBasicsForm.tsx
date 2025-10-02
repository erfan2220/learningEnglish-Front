"use client";
import Image from "next/image";
import Inputs from "@/components/Input/Input";

export type CourseBasics = {
    courseTitle: string;
    duration: string;
    price: string;
    lessonPackage: string;
    courseType: string;
    languagePart: string;
    description: string;
};

type Props = {
    value: CourseBasics;
    onChange: <K extends keyof CourseBasics>(key: K, val: CourseBasics[K]) => void;
};

const courseTitleIcon = "/icons/courseTitle.svg";
const durationTime = "/icons/durationTime.svg";
const priceIcon = "/icons/priceGray.svg";
const lesson = "/icons/lessonPartGray.svg";
const courseTypeIcon = "/icons/lessonGray.svg";
const languageIcon = "/icons/languageGray.svg";

const LANGS = [
    "Arabic",
    "Chinese",
    "Dutch",
    "English",
    "French",
    "German",
    "Persian",
    "Russian",
    "Spanish",
];

export default function CourseBasicsForm({ value, onChange }: Props) {
    return (
        <div className="relative w-full border-b-3 border-[#D2D2D2] pb-4 flex flex-col gap-2">
            <Inputs
                placeholder="Course Title"
                type="text"
                label="Course Title"
                inputIcon={courseTitleIcon}
                width="100%"
                value={value.courseTitle}
                onchange={(e) => onChange("courseTitle", e.target.value)}
            />

            <Inputs
                placeholder="Duration in Minute"
                type="text"
                label="Duration in Minute"
                inputIcon={durationTime}
                width="100%"
                value={value.duration}
                onchange={(e) => onChange("duration", e.target.value)}
            />

            <Inputs
                placeholder="Price per Hour"
                type="text"
                label="Price per Hour"
                inputIcon={priceIcon}
                width="100%"
                value={value.price}
                onchange={(e) => onChange("price", e.target.value)}
            />

            <Inputs
                placeholder="Lesson package"
                type="text"
                label="Lesson package"
                inputIcon={lesson}
                width="100%"
                value={value.lessonPackage}
                onchange={(e) => onChange("lessonPackage", e.target.value)}
            />

            {/* Course Type */}
            <div className="w-full">
                <label className="text-xs mx-2 mt-2 text-[#45444A]">Course Type</label>
                <div className="relative">
                    <select
                        value={value.courseType}
                        onChange={(e) => onChange("courseType", e.target.value)}
                        className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option disabled value="">
                            Course Type
                        </option>
                        <option value="Offline">Offline</option>
                        <option value="Online">Online</option>
                    </select>
                    <Image
                        src={courseTypeIcon}
                        alt="course type icon"
                        width={20}
                        height={20}
                        className="absolute top-[12px] left-4 cursor-pointer"
                    />
                </div>
            </div>

            {/* Language */}
            <div className="w-full">
                <label className="text-xs mx-2 mt-2 text-[#45444A]">Language</label>
                <div className="relative">
                    <select
                        value={value.languagePart}
                        onChange={(e) => onChange("languagePart", e.target.value)}
                        className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option disabled value="">
                            languages
                        </option>
                        {LANGS.map((l) => (
                            <option key={l} value={l}>
                                {l}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={languageIcon}
                        alt="language icon"
                        width={20}
                        height={20}
                        className="absolute top-[12px] left-4 cursor-pointer"
                    />
                </div>
            </div>

            {/* Description */}
            <div className="mt-1 w-full">
                <label className="pl-2 text-xs">Description</label>
                <textarea
                    value={value.description}
                    onChange={(e) => onChange("description", e.target.value)}
                    rows={5}
                    placeholder="Description"
                    className="w-full text-sm border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl p-2 focus:outline-0 bg-white/80"
                />
            </div>
        </div>
    );
}
