"use client";

type Props = {
    bio: string;
    teachingStyle: string;
    goalsTeach: string;
    expect: string;
    onChange: (field: "bio" | "teachingStyle" | "goalsTeach" | "expect", val: string) => void;
};

export default function DescriptionFields({ bio, teachingStyle, goalsTeach, expect, onChange }: Props) {
    return (
        <div className="flex flex-col w-full text-[#45444A] items-center justify-center">
            <p className="w-full text-[#737177]">
                Please write 3–5 short paragraphs to describe yourself, your teaching style, and what students can expect from
                your lessons. This helps learners decide if you’re the right fit for them.
            </p>

            <div className="w-full mt-3 text-[#45444A]">
                <label className="text-xs mx-2">Who are you?</label>
                <textarea
                    rows={5}
                    value={bio}
                    onChange={(e) => onChange("bio", e.target.value)}
                    placeholder="type here ..."
                    className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm focus:outline-0"
                />
            </div>

            <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">What is your teaching style or philosophy?</label>
                <textarea
                    rows={5}
                    value={teachingStyle}
                    onChange={(e) => onChange("teachingStyle", e.target.value)}
                    placeholder="type here ..."
                    className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm focus:outline-0"
                />
            </div>

            <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">Who do you usually teach? (age, level, goals)?</label>
                <textarea
                    rows={5}
                    value={goalsTeach}
                    onChange={(e) => onChange("goalsTeach", e.target.value)}
                    placeholder="type here ..."
                    className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm focus:outline-0"
                />
            </div>

            <div className="w-full text-[#45444A]">
                <label className="text-xs mx-2">What can students expect from your classes?</label>
                <textarea
                    rows={5}
                    value={expect}
                    onChange={(e) => onChange("expect", e.target.value)}
                    placeholder="type here ..."
                    className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl px-4 py-2 bg-white/80 text-sm focus:outline-0"
                />
            </div>
        </div>
    );
}
