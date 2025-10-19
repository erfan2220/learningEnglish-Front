"use client";
import Image from "next/image";
import Link from "next/link";

export type Step = {
    href?: string;
    icon: string;
    alt: string;
};

function StepDot({ active, icon, alt }: { active: boolean; icon: string; alt: string }) {
    return (
        <div
            className={
                (active ? "bg-gradient-to-b from-[#B49AFF] to-[#FF9AAB]" : "bg-[#BBBBBB]") +
                " flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border border-[#BBBBBB]"
            }
        >
            <Image src={icon} alt={alt} width={28} height={28} className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
        </div>
    );
}

export default function Stepper({ steps, activeIndex }: { steps: Step[]; activeIndex: number }) {
    return (
        <div className="w-full bg-white/70 shadow-md h-28 flex flex-col justify-center">
            <div className="flex gap-0.5 sm:gap-1 px-2 sm:px-4 justify-center items-center max-w-[1320px] mx-auto w-full">
                {steps.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1 w-full max-w-full">
                        {s.href ? (
                            <Link href={s.href} className="flex flex-col items-center gap-2">
                                <StepDot active={idx === activeIndex} icon={s.icon} alt={s.alt} />
                            </Link>
                        ) : (
                            <div className="flex flex-col items-center gap-2">
                                <StepDot active={idx === activeIndex} icon={s.icon} alt={s.alt} />
                            </div>
                        )}
                        {idx !== steps.length - 1 && <hr className="border-2 border-[#737177] w-full" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
