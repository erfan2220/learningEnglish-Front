import { tutorMockDetail } from "@/mock/tutorMockData";
import React from "react";
import Image from "next/image";
import favoriteIcon from "../../assets/icons/star.svg";
import heartIcon from "../../assets/icons/heartFillRed.svg";
import Link from "next/link";

const TutorShowCart = ({ tutorId }) => {
  const tutor = tutorMockDetail.find((t) => t.tutorId === tutorId);

  if (!tutor) return null;

  const totalReviews = tutor.reviews?.length ?? 0;

  const totalRatings =
    tutor.reviews?.reduce((sum, review) => sum + (review.rating ?? 0), 0) ?? 0;

  const averageRating = totalReviews > 0 ? totalRatings / totalReviews : 0;

  return (
    <div className="flex pb-4 px-4 flex-wrap items-center justify-center w-full  sm:mx-2 [@media(min-width:400px)]:w-[320px] sm:w-[320px] rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="flex flex-wrap w-full items-center justify-center gap-4 sm:p-2 sm:pb-0  p-1">
        <div>
          <Image
            src={tutor.tutorPhoto}
            alt="tutor photo"
            width={80}
            height={80}
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm font-bold text-[#45444A]">
            {tutor.tutorFirstName} {tutor.tutorLastName}
          </p>
          <p className="text-xs text-[#8B8A8E]">{tutor.role}</p>
          <div className="flex items-center gap-1">
            <Image
              src={favoriteIcon}
              alt="favorite icon"
              width={18}
              height={18}
            />
            <div className="text-sm text-[#8B8A8E]">
              {averageRating.toFixed(1)}
            </div>
            <div className="text-sm text-[#8B8A8E]">
              ({totalReviews} {totalReviews === 1 ? "review" : "reviews"})
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start justify-between">
        <div className="flex items-center gap-1 mt-2 text-sm text-[#8B8A8E]">
          <p>courses:</p> <b>{tutor.coursesList.length}</b>
        </div>
        <div className="flex items-center gap-1 mt-2 text-sm text-[#8B8A8E]">
          <p>students:</p> <b>{tutor.studentLists.length}</b>
        </div>
      </div>

      <div className="w-full">
        <b className="mt-2 text-sm text-[#45444A] ">Speak:</b>
        <div className=" flex items-start justify-between flex-wrap text-xs text-[#737177]">
          {tutor.speaks.map((lang) => (
            <div key={lang.languageId} className="flex items-start gap-2">
              <b>{lang.language}</b>
              <p>{lang.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-xs text-[#45444A] mt-2">
        <p>
          <b>Bio:</b>
        </p>
        <p>{tutor.personalSummary.slice(0, 150)} ...</p>
      </div>

      <div className="w-full flex justify-end text-xs text-[#45444A] mt-2">
        <p>
          <Link href={`/tutor/${tutorId}`}>
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
            <b>
              {tutor.pricePerHour[0].currency} {tutor.pricePerHour[0].price}
            </b>
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
