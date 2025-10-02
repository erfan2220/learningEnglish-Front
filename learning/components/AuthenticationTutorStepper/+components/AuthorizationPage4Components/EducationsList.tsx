"use client";
import { useEffect, useMemo, useState } from "react";
import EducationItem from "./EducationItem";

export type Education = {
    degree: string;
    institution: string;
    country: string;
    city: string;
    field: string;
    startDate: string;
    endDate: string;
};

type Props = {
    storageKey?: string;              // default "educations"
    countryOptions: string[];         // pass countryList from parent
    onValidityChange?: (valid: boolean) => void;
};

const DEFAULT_STORAGE_KEY = "educations";

export default function EducationsList({
                                           storageKey = DEFAULT_STORAGE_KEY,
                                           countryOptions,
                                           onValidityChange,
                                       }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Education[]>([
        { degree: "", institution: "", country: "", city: "", field: "", startDate: "", endDate: "" },
    ]);

    // hydrate
    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
            try {
                const parsed: Education[] = JSON.parse(saved);
                setItems(parsed);
            } catch {
                // ignore parse errors
            }
        }
        setIsLoaded(true);
    }, [storageKey]);

    // validity (also checks start <= end when both present)
    const isValid = useMemo(() => {
        return items.every((e) => {
            const allFilled =
                e.degree.trim() &&
                e.institution.trim() &&
                e.country.trim() &&
                e.city.trim() &&
                e.field.trim() &&
                e.startDate.trim() &&
                e.endDate.trim();

            if (!allFilled) return false;
            // simple date check
            try {
                const s = new Date(e.startDate).getTime();
                const en = new Date(e.endDate).getTime();
                return !isNaN(s) && !isNaN(en) && s <= en;
            } catch {
                return false;
            }
        });
    }, [items]);

    // persist + bubble validity
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
            { degree: "", institution: "", country: "", city: "", field: "", startDate: "", endDate: "" },
        ]);

    const removeItem = (index: number) =>
        setItems((prev) => prev.filter((_, i) => i !== index));

    const changeItem = (
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
                <EducationItem
                    key={idx}
                    index={idx}
                    value={item}
                    countryOptions={countryOptions}
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
                + Add Education
            </button>
        </>
    );
}
