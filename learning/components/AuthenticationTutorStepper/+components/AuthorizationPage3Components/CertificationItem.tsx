"use client";
import Image from "next/image";
import Inputs from "@/components/Input/Input";

type Props = {
    index: number;
    value: {
        certTitle: string;
        issueBy: string;
        issueDate: string;
        imagePreview: string;
    };
    placeholderImg: string;
    onChange: (
        index: number,
        field: "certTitle" | "issueBy" | "issueDate" | "imagePreview",
        val: string
    ) => void;
    onRemove?: (index: number) => void;
    canRemove: boolean;
};

export default function CertificationItem({
                                              index,
                                              value,
                                              placeholderImg,
                                              onChange,
                                              onRemove,
                                              canRemove,
                                          }: Props) {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // optional: basic checks
        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert("File must be smaller than 2MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = (event.target?.result as string) || "";
            onChange(index, "imagePreview", dataUrl);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-col gap-3 items-center justify-center border-b-2 border-[#BBBBBB] pb-6 relative">
            {canRemove && (
                <button
                    type="button"
                    onClick={() => onRemove?.(index)}
                    className="absolute top-0 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                >
                    Delete Certification
                </button>
            )}

            <div className="w-full">
                <Inputs
                    placeholder="Certification Title"
                    type="text"
                    inputIcon={"/icons/certificateGray.svg"}
                    label="Certification Title"
                    value={value.certTitle}
                    onchange={(e) => onChange(index, "certTitle", e.target.value)}
                    width="100%"
                />
            </div>

            <div className="w-full">
                <Inputs
                    placeholder="Issue By"
                    type="text"
                    inputIcon={"/icons/issueBy.svg"}
                    label="Issue By"
                    value={value.issueBy}
                    onchange={(e) => onChange(index, "issueBy", e.target.value)}
                    width="100%"
                />
            </div>

            <div className="w-full">
                <Inputs
                    placeholder="Issue Date"
                    type="date"
                    inputIcon={"/icons/dayIcon.svg"}
                    label="Issue Date"
                    value={value.issueDate}
                    onchange={(e) => onChange(index, "issueDate", e.target.value)}
                    width="100%"
                />
            </div>

            <div className="flex flex-col justify-center items-center my-4">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
                    <Image
                        src={value.imagePreview || placeholderImg}
                        alt="certificate preview"
                        width={120}
                        height={120}
                        className="object-cover"
                    />
                </div>
                <label className="cursor-pointer text-blue-600 underline mt-2">
                    Upload photo
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
            </div>
        </div>
    );
}
