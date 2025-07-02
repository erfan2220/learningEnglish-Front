"use client";
import React, { useState } from "react";
import Image from "next/image";
import replyIcon from "../../../assets/icons/reply.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import Button from "@/components/Button/Button";
import sentIcon from "../../../assets/icons/sentWhite.svg";

const DashboardStudentMessagesInbox = ({ mainData, secondData }) => {
  const personNumber = 0;
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  return (
    <div className="my-8 relative">
      <h2 className="text-2xl font-bold text-[#45444A] m-4">
        My Inbox Messages
      </h2>

      {mainData[personNumber].messagesReceives.map((message) => {
        const sender = secondData.find(
          (tutor) => tutor.tutorId === message.messageSender
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
                    src={replyIcon}
                    alt="reply icon"
                    width={24}
                    height={24}
                    className="hover:cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();

                      setIsReplyOpen(true);
                    }}
                  />
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
      {/* /////////////////////////////////////////////// */}
      {isReplyOpen && (
        <div className="fixed  inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white relative rounded-2xl shadow-xl p-6 w-[90%] sm:w-[600px]">
            <p className="text-[#45444A] text-sm mb-2">Write your text here:</p>
            <textarea
              rows={6}
              className="w-full text-sm p-2 border-2 border-[#D2D2D2] bg-[#F1ECFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#97C01C]"
              placeholder="Write your reply here..."
            ></textarea>
            <div className="flex justify-end ">
              <button
                className="px-3 py-1 top-2 hover:cursor-pointer right-2 absolute bg-[#5F33E1] text-white rounded-full"
                onClick={() => setIsReplyOpen(false)}
              >
                X
              </button>

              <Button
                label="send"
                type="submit"
                btnIcon={sentIcon}
                colorBtn="#97C01C"
                colorBtnActive="5D7C02"
                onclick={() => setIsReplyOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStudentMessagesInbox;
