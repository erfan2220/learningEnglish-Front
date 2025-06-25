import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-white/70 border-[#D2D2D2] border-2 rounded-2xl">
      {children}
    </div>
  );
};

export default Layout;
