"use client";
import React, { useState } from "react";
import Image from "next/image";
import replyIcon from "../../../assets/icons/reply.svg";
import deleteIcon from "../../../assets/icons/delete.svg";

const DashboardStudentMessagesSent = ({ mainData, secondData }) => {
  const personNumber = 0;
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#45444A] m-4">
        My Inbox Messages
      </h2>

      {mainData[personNumber].messagesSent.map((message) => {
        const sender = secondData.find(
          (tutor) => tutor.tutorId === message.messageReceive
        );

        const isOpen = selectedMessageId === message.messageId;

        return (
          <div key={message.messageId}>
            <div
              className="bg-white/80 text-xs text-[#45444A] rounded-2xl shadow-md hover:shadow-2xl my-4 flex flex-col gap-2 py-4 px-2 sm:px-8 cursor-pointer"
              onClick={() =>
                setSelectedMessageId((prev) =>
                  prev === message.messageId ? null : message.messageId
                )
              }
            >
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  {sender
                    ? `${sender.tutorFirstName} ${sender.tutorLastName}`
                    : "Unknown Sender"}
                </p>
                <p className="text-[#737177] hidden sm:block">
                  {message.messageText.slice(0, 100)}...
                </p>
                <div className="flex gap-2">
                  <Image
                    src={deleteIcon}
                    alt="delete icon"
                    width={24}
                    height={24}
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>

              {isOpen && (
                <div className="bg-white border-2 sm:text-sm border-[#D2D2D2] shadow-md text-[#45444A] p-2 rounded-md mt-4">
                  {message.messageText}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStudentMessagesSent;
