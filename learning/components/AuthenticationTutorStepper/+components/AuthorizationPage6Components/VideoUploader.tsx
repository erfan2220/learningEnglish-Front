"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
    initialPreviewUrl?: string | null;                 // from store (blob: URL)
    file?: File | null;                                // from store
    onChange: (file: File, blobUrl: string) => void;   // bubble up selected file + preview
    onClear: () => void;                               // clear in the store
    maxSizeMB?: number;                                // default 20
};

export default function VideoUploader({
                                          initialPreviewUrl = null,
                                          file = null,
                                          onChange,
                                          onClear,
                                          maxSizeMB = 20,
                                      }: Props) {
    const [preview, setPreview] = useState<string | null>(initialPreviewUrl);
    // track only blob URLs created by THIS component so we don't revoke external ones
    const ownedUrlRef = useRef<string | null>(null);

    useEffect(() => {
        setPreview(initialPreviewUrl || null);
    }, [initialPreviewUrl]);

    useEffect(() => {
        return () => {
            if (ownedUrlRef.current) {
                URL.revokeObjectURL(ownedUrlRef.current);
                ownedUrlRef.current = null;
            }
        };
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;

        if (!f.type.startsWith("video/")) {
            alert("Please upload a valid video file.");
            return;
        }
        if (f.size > maxSizeMB * 1024 * 1024) {
            alert(`Maximum file size is ${maxSizeMB}MB`);
            return;
        }

        // replace any prior owned blob url
        if (ownedUrlRef.current) {
            URL.revokeObjectURL(ownedUrlRef.current);
            ownedUrlRef.current = null;
        }

        const url = URL.createObjectURL(f);
        ownedUrlRef.current = url;
        setPreview(url);
        onChange(f, url);
    };

    const handleClear = () => {
        if (ownedUrlRef.current) {
            URL.revokeObjectURL(ownedUrlRef.current);
            ownedUrlRef.current = null;
        }
        setPreview(null);
        onClear();
    };

    return (
        <div className="w-full">
            {preview ? (
                <div className="relative">
                    <video controls className="w-full rounded-lg shadow-md">
                        <source src={preview} type={file?.type || "video/mp4"} />
                        Your browser does not support the video tag.
                    </video>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                        ×
                    </button>
                </div>
            ) : null}

            <label className="cursor-pointer text-blue-600 underline inline-block mt-2">
                {preview ? "Change Video" : "Upload a Video"}
                <input type="file" accept="video/*" onChange={handleFileChange} className="hidden" />
            </label>

            {file && (
                <p className="text-sm text-gray-600 mt-1">
                    Selected file: {file.name} ({Math.round(file.size / 1024 / 1024)} MB)
                </p>
            )}
        </div>
    );
}
