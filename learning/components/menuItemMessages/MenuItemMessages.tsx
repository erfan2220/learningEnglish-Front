"use client";

import React, { useState } from "react";
import DashboardMenuItems from "../../components/DashboardMenuItems/DashboardMenuItems";

export default function MenuItemMessages({ role }: { role: string }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="w-full">
            <div
                className="w-full hover:cursor-pointer z-10"
                onClick={() => setOpenMenu((s) => !s)}
            >
                <DashboardMenuItems
                    role={role}
                    topic="messages"
                    icon="/icons/message.svg"
                    title="Messages"
                    width="100%"
                />
            </div>

            {openMenu && (
                <div className="w-[90%] ml-2 flex flex-col justify-center items-center rounded-lg -mt-0.5 py-2 bg-[#e7e0fd70] z-10 shadow-inner">
                    <DashboardMenuItems
                        role={role}
                        topic="messages/inbox"
                        icon="/icons/inbox.svg"
                        title="Inbox"
                        width="90%"
                    />
                    <DashboardMenuItems
                        role={role}
                        topic="messages/sent"
                        icon="/icons/sent.svg"
                        title="Sent"
                        width="90%"
                    />
                </div>
            )}
        </div>
    );
}
