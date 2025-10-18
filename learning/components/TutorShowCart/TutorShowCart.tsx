// TutorShowCart.tsx
"use client";
import React, { useEffect, useState } from "react";
import favoriteIcon from "./../../assets/icons/star.svg";
import Image from "next/image";
import heartIcon from "./../../assets/icons/heartFillRed.svg";
import photoDefault from "../../assets/icons/profilePhotoDefault.svg";
import Link from "next/link";
import axios from "axios";
import { Tutor } from "@/model/tutorType";

type Props = { tutorId: string | number }; // ✅ accept both

const TutorShowCart = ({ tutorId }: Props) => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/tutors/`
        );
        setTutors(res.data);
      } catch (error) {
        console.error("Fetching tutors failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  if (loading) return <div className="p-4" />;

  // 🔒 Normalize both sides to string to handle "123" vs 123 or UUIDs
  const tid = String(tutorId);
  const tutor = tutors.find((t) => String(t.id) === tid);

  if (!tutor) return <div className="p-4">Tutor not found</div>;

  const [imgError, setImgError] = useState(false);

  return (
      <div className="flex pb-4 px-4 flex-wrap items-center justify-center w-full h-[360px] sm:mx-2 [@media(min-width:400px)]:w-[320px] sm:w-[320px] rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-wrap w-full items-center justify-center gap-4 sm:p-2 sm:pb-0 p-1">
          <div>
            <Image
                src={
                  imgError
                      ? (photoDefault as unknown as string)
                      : tutor.profile_picture || (photoDefault as unknown as string)
                }
                alt="tutor photo"
                width={80}
                height={80}
                onError={() => setImgError(true)} // ✅ Next/Image-friendly fallback
                className="rounded-full"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-bold text-[#45444A]">
              {tutor.user?.first_name} {tutor.user?.last_name}
            </p>
            <p className="text-xs text-[#8B8A8E]">Tutor</p>
            <div className="flex items-center gap-1">
              <Image src={favoriteIcon} alt="favorite icon" width={18} height={18} />
              <div className="text-sm text-[#8B8A8E]">3.5</div>
              <div className="text-sm text-[#8B8A8E]">reviews</div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-between">
          <div className="flex items-center gap-1 mt-2 text-sm text-[#8B8A8E]">
            <p>courses:</p> <b>12</b>
          </div>
          <div className="flex items-center gap-1 mt-2 text-sm text-[#8B8A8E]">
            <p>students:</p> <b>12</b>
          </div>
        </div>

        <div className="w-full">
          <b className="mt-2 text-sm text-[#45444A] ">Speak:</b>
          <div className="flex items-start justify-between flex-wrap text-xs text-[#737177]">
            {tutor.languages_spoken?.length ? (
                tutor.languages_spoken.map((lang, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <b>{lang}</b>
                    </div>
                ))
            ) : (
                <div>No languages specified</div>
            )}
          </div>
        </div>

        <div className="w-full text-xs text-[#45444A] mt-2">
          <p>
            <b>Bio:</b>
          </p>
          <p>{tutor.bio ? `${tutor.bio.slice(0, 150)}...` : "No bio available"}</p>
        </div>

        <div className="w-full flex justify-end text-xs text-[#45444A] mt-2">
          <p>
            <Link href={`/tutor/detail/${tid}`}>
              <u>view profile</u>
            </Link>
          </p>
        </div>

        <div className="w-full flex justify-between text-sm text-[#45444A] mt-2">
          <div>
            <p>
              <b>Price per hour:</b>
            </p>
            <p>
              <b>Toma 100</b>
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <Image src={heartIcon} alt="heart fill" width={28} height={28} />
          </div>
        </div>
      </div>
  );
};

export default TutorShowCart;
