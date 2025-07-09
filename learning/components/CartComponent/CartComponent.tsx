import React from "react";

const CartComponent = () => {
  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        <div className="p-4 sm:p-12">
          <p className="font-bold text-2xl text-[#45444A]">
            Choose a payment method
          </p>

          <div className="flex flex-col sm:flex-row gap-10 mt-10">
            {/* ///////////////////// */}
            <div className="bg-white/80 w-full sm:w-1/2 rounded-2xl shadow-md hover:shadow-lg">
              hello
            </div>
            {/* ///////////////////// */}
            <div className="bg-white/80 w-full sm:w-1/2 rounded-2xl shadow-md hover:shadow-lg">
              hi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
