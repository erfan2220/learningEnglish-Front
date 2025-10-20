"use client";
import Image from "next/image";


const languageIcon = "/icons/languageGray.svg";
const binIcon = "/icons/binGray.svg";

const LANGUAGE_OPTIONS = [
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

export default function LanguageList({
  value,
  onChange,
}: {
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const update = (idx: number, v: string) => {
    const copy = [...value];
    copy[idx] = v;
    onChange(copy);
  };

  const add = () => onChange([...value, ""]);
  const remove = (idx: number) => onChange(value.filter((_, i) => i !== idx));

  return (
    <div className="flex flex-col gap-2">
      {value.map((lang, idx) => (
        <div key={idx} className="flex w-full items-center gap-2">
          <div className="w-full">
            <label className="text-xs mx-2 mt-2 text-[#45444A]">
              Language you speak
            </label>
            <div className="relative">
              <select
                className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                value={lang}
                onChange={(e) => update(idx, e.target.value)}
              >
                <option disabled value="">
                  languages
                </option>
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <Image
                src={languageIcon}
                alt="language icon"
                width={20}
                height={20}
                className="absolute top-[12px] left-4"
              />
            </div>
          </div>

          {value.length > 1 && (
            <div className="mt-5">
              <Image
                src={binIcon}
                alt="remove language"
                width={32}
                height={32}
                className="cursor-pointer"
                onClick={() => remove(idx)}
              />
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="text-[#45444A] font-bold underline w-fit"
      >
        + Add Language
      </button>
    </div>
  );
}
