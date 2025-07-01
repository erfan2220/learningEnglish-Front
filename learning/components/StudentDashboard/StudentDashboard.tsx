import React from "react";
import Link from "next/link";
import homeIcon from "../../assets/icons/homeIcon.svg";
import courseIcon from "../../assets/icons/course.svg";
import favoriteIcon from "../../assets/icons/heartFill.svg";
import messageIcon from "../../assets/icons/message.svg";
import signoutIcon from "../../assets/icons/signout.svg";
import DashboardMenuItems from "../DashboardMenuItems/DashboardMenuItems";

const StudentDashboard = ({ children }) => {
  const role = "student";
  return (
    <div className="w-full px-1 md:px-6 min-h-[600px] max-w-[1600px] mx-auto flex gap-2 mt-[90px] mb-4">
      {/* ////////////////////////////////////////////////////////// */}
      <div className=" w-1/6  bg-white/70   rounded-2xl shadow-2xl border-2 border-[#D2D2D2]">
        <div className="px-1 md:px-2 lg:px-4 flex flex-col gap-3 items-center  pt-4 pb-8">
          <Link href={"/"} className="mb-2">
            <div className="h-[60px] w-11 border-2 border-black my-1.5">
              logo
            </div>
          </Link>

          <DashboardMenuItems
            role={role}
            topic={"info"}
            icon={homeIcon}
            title={"Dashboard"}
          />

          <DashboardMenuItems
            role={role}
            topic={"courses"}
            icon={courseIcon}
            title={"Courses"}
          />

          <DashboardMenuItems
            role={role}
            topic={"favoriteTutors"}
            icon={favoriteIcon}
            title={"Favorites"}
          />

          <DashboardMenuItems
            role={role}
            topic={"messages"}
            icon={messageIcon}
            title={"Messages"}
          />

          <DashboardMenuItems
            role={role}
            topic={"signOut"}
            icon={signoutIcon}
            title={"Sign Out"}
          />
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////// */}
      <div className="w-5/6  px-1 md:px-2 lg:px-4 rounded-2xl shadow-2xl bg-white/70">
        {children}
      </div>
    </div>
  );
};

export default StudentDashboard;
