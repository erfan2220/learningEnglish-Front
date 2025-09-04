// components/Slide/Slide.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TutorCart from "../TutorCart/TutorCart";
import SwiperButton from "../SwiperButton/SwiperButton";
import { fetchTutors } from "@/services/tutors";
import type { Tutor } from "@/model/tutorType";

const Slide = () => {
    const [tutors, setTutors] = useState<Tutor[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        fetchTutors()
            .then((res) => { if (alive) setTutors(res); })
            .catch((e) => { if (alive) setError(e?.message ?? "Failed to load tutors"); });
        return () => { alive = false; };
    }, []);

    return (
        <div>
            <div className="flex justify-between m-4 md:mt-[60px] md:mx-[60px] mb-2">
                <div className="text-3xl font-bold text-[#45444A]">Tutors</div>
                <Link href="/tutor" className="text-[#FF4866] flex items-center justify-center">
                    <div>more</div>
                    <Image src="/icons/arrowPink.svg" alt="arrow icon" width={20} height={20} />
                </Link>
            </div>

            <hr className="flex-1 mx-4 md:mx-[60px] h-px my-4 border-0 bg-[#45444A]" />

            <div className="relative mt-4 p-5 md:px-20">
                {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                )}

                {!tutors && !error && (
                    <div className="text-sm text-[#8B8A8E]">Loading tutors…</div>
                )}

                {tutors && tutors.length === 0 && (
                    <div className="text-sm text-[#8B8A8E]">No tutors found.</div>
                )}

                {tutors && tutors.length > 0 && (
                    <Swiper
                        spaceBetween={24}
                        breakpoints={{ 400: { slidesPerView: 1 }, 750: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    >
                        <SwiperButton />
                        {tutors.map((tutor) => (
                            <SwiperSlide key={tutor.id}>
                                <TutorCart tutorData={tutor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Slide;
