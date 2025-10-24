"use client";
import Image from "next/image";
import Inputs from "@/components/Common/Input/Input";
import CheckBox from "@/components/Common/CheckBox.tsx/CheckBox";

export type TimeSlotData = {
    daysAvailable: string[];
    timeSlotPart: string;
    startDate: string;
};

type Props = {
    index: number;
    value: TimeSlotData;
    onChange: <K extends keyof TimeSlotData>(idx: number, key: K, val: TimeSlotData[K]) => void;
    onRemove?: (index: number) => void;
    canRemove: boolean;
};

const timeSlotIcon = "/icons/clockGray.svg";
const calendarIcon = "/icons/dayIcon.svg";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const SLOTS = [
    "00:00 - 02:00","02:00 - 04:00","04:00 - 06:00","06:00 - 08:00",
    "08:00 - 10:00","10:00 - 12:00","12:00 - 14:00","14:00 - 16:00",
    "16:00 - 18:00","18:00 - 20:00","20:00 - 22:00","22:00 - 24:00",
];

export default function TimeSlotItem({ index, value, onChange, onRemove, canRemove }: Props) {
    const toggleDay = (day: string, checked: boolean) => {
        const current = value.daysAvailable || [];
        const next = checked ? [...current, day] : current.filter((d) => d !== day);
        onChange(index, "daysAvailable", next);
    };

    return (
        <div className="relative border border-[#D2D2D2] p-4 rounded-2xl mb-4">
            {canRemove && (
                <button
                    type="button"
                    onClick={() => onRemove?.(index)}
                    className="absolute -top-1 right-0 text-[#E13350] text-xs sm:text-sm font-bold underline"
                >
                    Delete Time Slot
                </button>
            )}

            {/* Days Available */}
            <div className="w-full mt-3">
                <label>Days Available</label>
                <div className="w-full flex flex-wrap gap-x-4 gap-y-0">
                    {DAYS.map((day) => (
                        <CheckBox
                            key={day}
                            label={day}
                            checked={value.daysAvailable.includes(day)}
                            onChange={(e) => toggleDay(day, e.target.checked)}
                        />
                    ))}
                </div>
            </div>

            {/* Time Slot select */}
            <div className="w-full mt-4">
                <label className="text-xs mx-2 mt-2 text-[#45444A]">Time Slots</label>
                <div className="relative">
                    <select
                        value={value.timeSlotPart}
                        onChange={(e) => onChange(index, "timeSlotPart", e.target.value)}
                        className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                    >
                        <option disabled value="">
                            Time Slot
                        </option>
                        {SLOTS.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={timeSlotIcon}
                        alt="time slot icon"
                        width={20}
                        height={20}
                        className="absolute top-[12px] left-4 cursor-pointer"
                    />
                </div>
            </div>

            {/* Start Date */}
            <Inputs
                placeholder="Start Date"
                type="date"
                label="Start Date"
                inputIcon={calendarIcon}
                width="100%"
                value={value.startDate}
                onchange={(e) => onChange(index, "startDate", e.target.value)}
            />
        </div>
    );
}
