import React from "react";
import Link from "next/link";
import homeIcon from "../../assets/icons/homeIcon.svg";
import certIcon from "../../assets/icons/certGray.svg";
import educationIcon from "../../assets/icons/educationGrayD.svg";
import descriptionIcon from "../../assets/icons/descriptionGray.svg";
import addIcon from "../../assets/icons/addGray.svg";
import courseIcon from "../../assets/icons/course.svg";
import signoutIcon from "../../assets/icons/signout.svg";
import DashboardMenuItems from "../DashboardMenuItems/DashboardMenuItems";
import MenuItemMessages from "../menuItemMessages/MenuItemMessages";

interface TutorDashboardProps {
  children: React.ReactNode;
}

const TutorDashboard = ({ children }: TutorDashboardProps) => {
  const role = "tutor";

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
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"certification"}
            icon={certIcon}
            title={"Certification"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"education"}
            icon={educationIcon}
            title={"Education"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"description"}
            icon={descriptionIcon}
            title={"Description"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"addCourse"}
            icon={addIcon}
            title={"Add Course"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"courses"}
            icon={courseIcon}
            title={"Courses"}
            width={"100%"}
          />

          <MenuItemMessages role="tutor" />

          <DashboardMenuItems
            role={role}
            topic={"signOut"}
            icon={signoutIcon}
            title={"Sign Out"}
            width={"100%"}
          />
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////// */}
      <div className="w-5/6  px-1.5 md:px-2 lg:px-4 rounded-2xl shadow-2xl bg-white/70">
        {children}
      </div>
    </div>
  );
};

export default TutorDashboard;
