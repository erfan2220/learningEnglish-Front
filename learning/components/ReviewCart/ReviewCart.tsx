import React from "react";

const ReviewCart = ({ data }) => {
  return (
    <div className="bg-[#F8ECFF] py-8 w-full text-sm lg:text-base h-[220px] rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-500">
      <div className="flex justify-center items-center">
        <p className="text-[#45444A] font-bold text-base sm:text-lg ">
          {data.reviewerName}
        </p>
      </div>
      <p className="text-[#5C5A60]  px-4 text-sm sm:text-base">
        {data.reviewText}
      </p>
    </div>
  );
};

export default ReviewCart;
