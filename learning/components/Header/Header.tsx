import React from "react";

const Header = () => {
  return (
    <div className="bg-white/70 flex justify-between px-8 items-center font-bold text-sm text-[#45444A]">
      <div className="h-[60px] w-11 border-2 border-black my-1.5">logo</div>

      <div>
        <ul className="flex gap-6">
          <li>Language</li>
          <li>Home Page</li>
          <li>Corses</li>
          <li>Find Tutor</li>
          <li>Become a Tutor</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
