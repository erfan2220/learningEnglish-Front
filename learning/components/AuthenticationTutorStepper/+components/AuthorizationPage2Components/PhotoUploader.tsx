"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  storageKey: string; // e.g. "tutorProfilePhoto"
  placeholderSrc: string; // e.g. "/icons/profilePhoto.svg"
  maxSizeMB?: number; // default 2MB
  onChange?: (dataUrl: string | null) => void; // null when removed/placeholder
};

export default function PhotoUploader({
  storageKey,
  placeholderSrc,
  maxSizeMB = 2,
  onChange,
}: Props) {
  const [preview, setPreview] = useState<string>(placeholderSrc);

  // hydrate from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(storageKey);
    setPreview(stored || placeholderSrc);
  }, [storageKey, placeholderSrc]);

  // persist to localStorage + notify parent
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (preview && preview !== placeholderSrc) {
      window.localStorage.setItem(storageKey, preview);
      onChange?.(preview);
    } else {
      window.localStorage.removeItem(storageKey);
      onChange?.(null);
    }
  }, [preview, storageKey, placeholderSrc, onChange]);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File must be smaller than ${maxSizeMB}MB.`);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.onerror = () => alert("Error reading file.");
    reader.readAsDataURL(file);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const remove = () => setPreview(placeholderSrc);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-gray-300">
        <Image
          src={preview}
          alt="profile photo"
          width={180}
          height={180}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center mt-4">
        <label className="cursor-pointer text-blue-600 underline mb-2">
          Upload photo
          <input
            type="file"
            accept="image/*"
            onChange={onInputChange}
            className="hidden"
          />
        </label>

        {preview !== placeholderSrc && (
          <button onClick={remove} className="text-red-600 text-sm underline">
            Remove photo
          </button>
        )}
      </div>
    </div>
  );
}
