// components/AuthenticationTutorStepper/+components/AuthorizationPage5Components/ExperiencesList.tsx
"use client";
import { useEffect, useMemo } from "react";
import ExperienceItem, { Experience } from "./ExperienceItem";

// --- VERSION TAG (helps verify the correct file is used) ---
export const __EXPERIENCES_LIST_VERSION__ = "v4.1";
console.log(`[ExperiencesList ${__EXPERIENCES_LIST_VERSION__}] module loaded`);

type Props = {
    items: Experience[];
    countryOptions: string[];
    onItemsChange: (items: Experience[]) => void;
    onValidityChange?: (valid: boolean) => void;
};

// util
const safe = (v?: string) => (v ?? "").trim();

// A row is empty if ALL fields are blank
const isRowEmpty = (e: Experience) =>
    !safe(e.experience) &&
    !safe(e.country) &&
    !safe(e.city) &&
    !safe(e.startDate) &&
    !safe(e.endDate) &&
    !safe(e.describe);

// A non-empty row is valid if it has a title; dates optional,
// but if BOTH exist we require start <= end.
const isRowValid = (e: Experience) => {
    if (!safe(e.experience)) return false; // must have a title if row is non-empty
    const hasStart = !!safe(e.startDate);
    const hasEnd = !!safe(e.endDate);
    if (hasStart && hasEnd) {
        const s = new Date(e.startDate).getTime();
        const en = new Date(e.endDate).getTime();
        if (Number.isNaN(s) || Number.isNaN(en) || s > en) return false;
    }
    return true;
};

export default function ExperiencesList({
                                            items,
                                            countryOptions,
                                            onItemsChange,
                                            onValidityChange,
                                        }: Props) {
    console.log(`[ExperiencesList ${__EXPERIENCES_LIST_VERSION__}] render`, { items });

    // Only consider non-empty rows for validation
    const nonEmptyRows = useMemo(() => items.filter((e) => !isRowEmpty(e)), [items]);

    // VALID if no rows filled (section optional) OR every non-empty row is valid
    const isValid = useMemo(() => {
        const valid = nonEmptyRows.length === 0 || nonEmptyRows.every(isRowValid);
        console.log(`[ExperiencesList ${__EXPERIENCES_LIST_VERSION__}] validate`, {
            nonEmptyRowsCount: nonEmptyRows.length,
            isValid: valid,
        });
        return valid;
    }, [nonEmptyRows]);

    useEffect(() => {
        onValidityChange?.(isValid);
    }, [isValid, onValidityChange]);

    const addItem = () =>
        onItemsChange([
            ...items,
            { experience: "", country: "", city: "", startDate: "", endDate: "", describe: "" },
        ]);

    const removeItem = (index: number) => onItemsChange(items.filter((_, i) => i !== index));

    const changeItem = (
        index: number,
        field: "experience" | "country" | "city" | "startDate" | "endDate" | "describe",
        val: string
    ) => {
        const copy = [...items];
        copy[index] = { ...copy[index], [field]: val };
        onItemsChange(copy);
    };

    return (
        <>
            {/* data attribute makes it easy to confirm the version in Elements panel */}
            <div data-exp-list-version={__EXPERIENCES_LIST_VERSION__} className="hidden" />
            {items.map((exp, idx) => (
                <ExperienceItem
                    key={idx}
                    index={idx}
                    value={exp}
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
                + Add Experience
            </button>
        </>
    );
}
