"use client";
import { useEffect, useMemo } from "react";
import TimeSlotItem, { TimeSlotData } from "./TimeSlotItem";

type Props = {
    items: TimeSlotData[];
    onItemsChange: (items: TimeSlotData[]) => void;
    onValidityChange?: (valid: boolean) => void;
};

export default function TimeSlotsList({ items, onItemsChange, onValidityChange }: Props) {
    const isValid = useMemo(
        () =>
            items.every(
                (t) => (t.daysAvailable?.length || 0) > 0 && t.timeSlotPart.trim() && t.startDate.trim()
            ),
        [items]
    );

    useEffect(() => {
        onValidityChange?.(isValid);
    }, [isValid, onValidityChange]);

    const addItem = () =>
        onItemsChange([
            ...items,
            { daysAvailable: [], timeSlotPart: "", startDate: "" },
        ]);

    const removeItem = (idx: number) => onItemsChange(items.filter((_, i) => i !== idx));

    const changeItem = <K extends keyof TimeSlotData>(idx: number, key: K, val: TimeSlotData[K]) => {
        const copy = [...items];
        copy[idx] = { ...copy[idx], [key]: val };
        onItemsChange(copy);
    };

    return (
        <>
            {items.map((it, idx) => (
                <TimeSlotItem
                    key={idx}
                    index={idx}
                    value={it}
                    onChange={changeItem}
                    onRemove={removeItem}
                    canRemove={items.length > 1}
                />
            ))}

            <button
                type="button"
                onClick={addItem}
                className="text-[#5F33E1] cursor-pointer font-medium mt-2"
            >
                + Add Time Slot
            </button>
        </>
    );
}
