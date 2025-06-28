import React from "react";

const Layout = ({ children, marginTop = "mt-10" }) => {
  return (
    <div
      className={`bg-white/70 border-[#D2D2D2] border-2 rounded-2xl shadow-lg ${marginTop}`}
    >
      {children}
    </div>
  );
};

export default Layout;
