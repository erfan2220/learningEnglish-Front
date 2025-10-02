"use client";
import { useEffect, useMemo, useState } from "react";
import CertificationItem from "./CertificationItem";

export type Certification = {
    certTitle: string;
    issueBy: string;
    issueDate: string;
    imagePreview: string;
};

type Props = {
    storageKey?: string;           // default "certifications"
    placeholderImg?: string;       // default "/icons/certFile.svg"
    onValidityChange?: (valid: boolean) => void;
};

const DEFAULT_PLACEHOLDER = "/icons/certFile.svg";
const DEFAULT_STORAGE_KEY = "certifications";

export default function CertificationsList({
                                               storageKey = DEFAULT_STORAGE_KEY,
                                               placeholderImg = DEFAULT_PLACEHOLDER,
                                               onValidityChange,
                                           }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Certification[]>([
        { certTitle: "", issueBy: "", issueDate: "", imagePreview: DEFAULT_PLACEHOLDER },
    ]);

    // hydrate from localStorage
    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
            try {
                const parsed: Certification[] = JSON.parse(saved);
                setItems(
                    parsed.map((c) => ({
                        ...c,
                        imagePreview: c.imagePreview || placeholderImg,
                    }))
                );
            } catch {
                // ignore parse errors, keep defaults
            }
        }
        setIsLoaded(true);
    }, [storageKey, placeholderImg]);

    // persist to localStorage + push validity up
    const isValid = useMemo(
        () =>
            items.every(
                (c) =>
                    c.certTitle.trim() &&
                    c.issueBy.trim() &&
                    c.issueDate.trim() &&
                    c.imagePreview !== placeholderImg
            ),
        [items, placeholderImg]
    );

    useEffect(() => {
        if (!isLoaded) return;
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(items));
        } catch {}
        onValidityChange?.(isValid);
    }, [items, isLoaded, storageKey, isValid, onValidityChange]);

    // handlers
    const addItem = () =>
        setItems((prev) => [
            ...prev,
            { certTitle: "", issueBy: "", issueDate: "", imagePreview: placeholderImg },
        ]);

    const removeItem = (index: number) =>
        setItems((prev) => prev.filter((_, i) => i !== index));

    const changeItem = (
        index: number,
        field: "certTitle" | "issueBy" | "issueDate" | "imagePreview",
        val: string
    ) =>
        setItems((prev) => {
            const copy = [...prev];
            copy[index] = { ...copy[index], [field]: val };
            return copy;
        });

    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
            </div>
        );
    }

    return (
        <>
            {items.map((item, idx) => (
                <CertificationItem
                    key={idx}
                    index={idx}
                    value={item}
                    placeholderImg={placeholderImg}
                    onChange={changeItem}
                    onRemove={removeItem}
                    canRemove={items.length > 1}
                />
            ))}

            <button
                type="button"
                onClick={addItem}
                className="text-[#45444A] font-bold underline w-full text-center mt-4"
            >
                + Add Certification
            </button>
        </>
    );
}
