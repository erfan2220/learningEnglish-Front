"use client";
import DashboardMenuItems from "@/components/DashboardMenuItems/DashboardMenuItems";
import React, { useState } from "react";
import messageIcon from "../../../assets/icons/message.svg";
import inboxIcon from "../../../assets/icons/inbox.svg";
import sentIcon from "../../../assets/icons/sent.svg";

const MenuItemMessages = () => {
  const role = "student";
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full">
      <div
        className="w-full hover:cursor-pointer z-10"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <DashboardMenuItems
          role={role}
          topic={"messages"}
          icon={messageIcon}
          title={"Messages"}
          width={"100%"}
        />
      </div>

      {openMenu && (
        <div className="w-full flex flex-col justify-center items-center rounded-lg -mt-0.5 py-2 bg-[#e7e0fd70] z-1 shadow-inner">
          <DashboardMenuItems
            role={role}
            topic={"messages/inbox"}
            icon={inboxIcon}
            title={"Inbox"}
            width={"90%"}
          />

          <DashboardMenuItems
            role={role}
            topic={"messages/sent"}
            icon={sentIcon}
            title={"Sent"}
            width={"90%"}
          />
        </div>
      )}
    </div>
  );
};

export default MenuItemMessages;
