"use client";
import Button from "@/components/Button/Button";
import Inputs from "@/components/Input/Input";
import React, { useState } from "react";
import partIcon from "../../../assets/icons/lessonPartGray.svg";
import lessonIcon from "../../../assets/icons/lessonGray.svg";
import addIcon from "../../../assets/icons/addWhite.svg";
import Image from "next/image";
import binIcon from "../../../assets/icons/binGray.svg";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

interface AddLessonProps {
  handleClosePopup: () => void;
  handleAddLesson: () => void;
}

const AddLessonPopUp: React.FC<AddLessonProps> = ({
  handleClosePopup,
  handleAddLesson,
}) => {
  const [document, setDocument] = useState([
    {
      docFile: "",
    },
  ]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [part, setPart] = useState<string>("");
  const [description, setDescription] = useState("");

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);
    setSelectedVideo(videoURL);
  };

  const handleAddDocument = () => {
    setDocument([
      ...document,
      {
        docFile: "",
      },
    ]);
  };

  const handleRemove = (index: number) => {
    const newEntries = document.filter((_, i) => i !== index);
    setDocument(newEntries);
  };

  const handleSubmit = () => {
    console.log("lesson added");
  };
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="relative bg-white rounded-xl py-6 shadow-xl w-[90%] max-w-md">
        <div className="flex flex-col justify-center items-center mt-4 gap-4">
          <div
            onClick={handleClosePopup}
            className="absolute top-4 right-4 rounded-full px-3 py-1.5 hover:cursor-pointer bg-[#5F33E1] hover:bg-[#4921BF] transition-colors"
          >
            <p className="text-white font-semibold">X</p>
          </div>
          <form onSubmit={handleSubmit} className="px-3 sm:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full sm:w-[400px]">
                <Inputs
                  placeholder="Lesson Title"
                  label="Lesson Title"
                  type="text"
                  inputIcon={lessonIcon}
                  width="100%"
                  value={title}
                  onchange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-[400px]">
                <Inputs
                  placeholder="Part of Lesson"
                  label="Part of Lesson"
                  type="text"
                  inputIcon={partIcon}
                  width="100%"
                  value={part}
                  onchange={(e) => setPart(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mt-4 flex flex-col items-center justify-center">
              {selectedVideo && <VideoPlayer src={selectedVideo} />}
              <label className="cursor-pointer mx-3 text-blue-800 text-sm underline inline-block mt-2">
                Upload a Video
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="w-full flex flex-col  justify-start items-start mt-4">
              <div className="flex flex-col w-full">
                {document.map((doc, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-1 relative justify-between  mb-1 "
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            const newDocument = [...document];
                            newDocument[index].docFile = files[0].name;
                            setDocument(newDocument);
                          }
                        }}
                        className="border  border-[#d2d2d2] rounded p-0.5 w-[68px] text-xs text-[#FF4866]"
                        placeholder="Upload Document"
                      />
                      {doc.docFile && (
                        <span className="text-[#8B8A8E] text-xs w-[70%]">
                          {doc.docFile}
                        </span>
                      )}
                    </div>

                    {doc.docFile && (
                      <div className=" absolute right-0 top-2">
                        <Image
                          src={binIcon}
                          alt="bin"
                          width={18}
                          height={18}
                          className="cursor-pointer"
                          onClick={() => handleRemove(index)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p
                className="text-[#45444A] text-sm font-bold underline hover:cursor-pointer flex mt-2"
                onClick={handleAddDocument}
              >
                + Add Document
              </p>
            </div>
            <hr className="w-full border-s-2 border-[#8B8A8E] my-4" />
            <div className="w-full flex flex-col ">
              <label className="text-[#45444A] text-sm font-bold mb-2">
                Enter Your Message Here
              </label>
              <textarea
                placeholder="type here ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="rounded-xl border-2 outline-none focus:border-[#5F33E1] bg-[#F1ECFF] border-[#D2D2D2] overflow-hidden p-2 text-sm "
              ></textarea>
            </div>

            <Button
              label="Add Lesson"
              type="submit"
              onclick={handleAddLesson}
              colorBtn="#97C01C"
              btnIcon={addIcon}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLessonPopUp;
