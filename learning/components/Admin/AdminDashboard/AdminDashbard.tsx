import React from "react";
import Link from "next/link";

import DashboardMenuItems from "../../DashboardMenuItems/DashboardMenuItems";
import MenuItemMessages from "../../menuItemMessages/MenuItemMessages";

import Image from "next/image";

const homeIcon = "/icons/homeIcon.svg";
const articleIcon = "/icons/article.svg";
const addArticleIcon = "/icons/addArticle.svg";
const billsIcon = "/icons/bills.svg";
const logoIcon = "/images/logo.png";

interface AdminDashboardProps {
  children: React.ReactNode;
}

const AdminDashboard = ({ children }: AdminDashboardProps) => {
  const role = "admin";

  return (
    <div className="w-full px-1 md:px-6 min-h-[600px] mx-auto flex gap-2 mt-[90px] mb-4">
      {/* ////////////////////////////////////////////////////////// */}
      <div className=" w-1/6  bg-white/70   rounded-2xl shadow-2xl border-2 border-[#D2D2D2]">
        <div className="px-1 md:px-2 lg:px-4 flex flex-col gap-3 items-center  pt-4 pb-8">
          <Link href={"/"} className="mb-2">
            <div className=" w-full my-1.5 flex items-center justify-center mx-auto">
              <Image
                src={logoIcon}
                alt="logo icon"
                width={50}
                height={50}
                className="min-w-12 min-h-12 w-[80%] h-[80%]"
              />
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
            topic={"articles"}
            icon={articleIcon}
            title={"Articles"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"add_articles"}
            icon={addArticleIcon}
            title={"Add Article"}
            width={"100%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"bills"}
            icon={billsIcon}
            title={"Bills"}
            width={"100%"}
          />

          <MenuItemMessages role="admin" />
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////// */}
      <div className="w-5/6  px-1.5 md:px-2 lg:px-4 rounded-2xl shadow-2xl bg-white/70">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboard;
