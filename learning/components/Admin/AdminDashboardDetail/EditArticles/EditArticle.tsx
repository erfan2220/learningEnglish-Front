"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArticlesType } from "@/model/articles";
import { api } from "@/lib/APIs/axiosInstance";
import { BeatLoader } from "react-spinners";
import Button from "@/components/Common/Button/Button";
import Inputs from "@/components/Common/Input/Input";
import { FluentDoorRoutes } from "@/routes/routes";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const userIcon = "/icons/userIconGray.svg";
const titleIcon = "/icons/articleTitle.svg";
const linkIcon = "/icons/articleRelatedLink.svg";
const contentIcon = "/icons/articleContent.svg";
const levelIcon = "/icons/levelIconGray.svg";
const timeIcon = "/icons/clockGray.svg";
const bannerPicture = "/icons/bannerDefault.png";
const addIcon = "/icons/addWhite.svg";
const cancelIcon = "/icons/cancel.svg";

interface ApiErrorResponse {
  detail?: string;
  message?: string;
  error?: string;
}

const EditArticle = ({ id }: { id: number }) => {
  const [article, setArticle] = useState<ArticlesType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get(`/api/blogs/${id}`);
        const data = res.data;
        setArticle(data);

        // مقداردهی اولیه به فیلدهای قابل ویرایش
        setTitle(data.title || "");
        setAuthor(data.author || "");
        setContent(data.content || "");
        setDifficultyLevel(data.difficulty_level || "");
        setRelatedLink(data.related_link || "");
        setReadingTime(data.description || "");
        if (data.picture) setImagePreview(data.picture);
      } catch (error) {
        console.error("Fetching article failed:", error);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [id]);

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [relatedLink, setRelatedLink] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    setImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (!title || !author || !content || !difficultyLevel) {
        toast.error("please fill in all fields.");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("description", readingTime);
      formData.append("content", content);
      formData.append("difficulty_level", difficultyLevel);
      formData.append("related_link", relatedLink);
      formData.append("featured", "false");

      if (imageFile) {
        formData.append("picture", imageFile);
      }

      console.log("📤 sending data");

      const res = await api.put(`/api/blogs/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Article added successfully:", res.data);
      toast.success("Article added successfully.");

      setTitle("");
      setAuthor("");
      setContent("");
      setDifficultyLevel("");
      setRelatedLink("");
      setReadingTime("");
      setImagePreview(bannerPicture);
      setImageFile(null);

      router.push(FluentDoorRoutes.articleAdminDashboard);
    } catch (error) {
      const err = error as AxiosError<ApiErrorResponse>;
      console.error("❌ error while adding article:", err);

      let errorMessage = "unknown error";

      if (err.response?.data) {
        if (typeof err.response.data === "string") {
          errorMessage = err.response.data;
        } else if (err.response.data.detail) {
          errorMessage = err.response.data.detail;
        } else {
          errorMessage = JSON.stringify(err.response.data, null, 2);
        }
      } else if (err.message) {
        errorMessage = err.message;
      }

      alert(`❌ Error while adding article\n\n${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto lg:px-8 mt-[60px] pb-8 pt-2 ">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        article && (
          <div className="my-8 px-1 md:px-2 lg:px-4 max-w-3xl mx-auto w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[600px] h-full rounded-xl overflow-hidden border-2 border-gray-300">
                <Image
                  src={imagePreview || article.picture || bannerPicture}
                  alt="profile photo"
                  width={600}
                  height={200}
                  className="object-cover"
                />
              </div>

              <label className="cursor-pointer text-blue-600 underline">
                Upload Banner
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            {/* ///////////////////////////////////////////// */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row text-[#45444A] mt-12">
                <div className="w-full flex flex-col gap-1">
                  <Inputs
                    type="text"
                    placeholder="title"
                    label="Title"
                    width="100%"
                    inputIcon={titleIcon}
                    value={title}
                    onchange={(e) => setTitle(e.target.value)}
                  />

                  <Inputs
                    type="text"
                    placeholder="author"
                    label="Author"
                    width="100%"
                    inputIcon={userIcon}
                    value={author}
                    onchange={(e) => setAuthor(e.target.value)}
                  />

                  <div className="relative mt-1 w-full">
                    <label className="pl-2 text-xs">Content</label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                      placeholder="Content"
                      className="w-full text-sm border-2 border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl p-2 focus:outline-0 bg-white/80"
                      style={{ textIndent: "2rem" }}
                    />
                    <Image
                      src={contentIcon}
                      alt="content icon"
                      width={24}
                      height={24}
                      className="absolute top-[32px] left-3 cursor-pointer"
                    />
                  </div>

                  <Inputs
                    type="text"
                    placeholder="Related Link"
                    label="Related Link"
                    width="100%"
                    inputIcon={linkIcon}
                    value={relatedLink}
                    onchange={(e) => setRelatedLink(e.target.value)}
                  />
                  <Inputs
                    type="text"
                    placeholder="Reading Time"
                    label="Reading Time"
                    width="100%"
                    inputIcon={timeIcon}
                    value={readingTime}
                    onchange={(e) => setReadingTime(e.target.value)}
                  />

                  <div className="w-[100%]">
                    <label className="text-xs mx-2 mt-2 text-[#45444A]">
                      difficulty Level
                    </label>
                    <div className="relative">
                      <select
                        value={difficultyLevel}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
                        className="border-2 w-full border-[#D2D2D2] focus:border-[#5F33E1] rounded-2xl pl-10 px-4 py-2 bg-white/80 text-sm h-11 focus:outline-0"
                      >
                        <option
                          disabled
                          defaultValue={"-country-"}
                          value=""
                          className="text-gray-500 text-sm"
                        >
                          Difficulty Level
                        </option>
                        {["Easy", "Intermediate", "Advanced"].map(
                          (level, index) => (
                            <option key={index} value={level}>
                              {level}
                            </option>
                          )
                        )}
                      </select>

                      <Image
                        src={levelIcon}
                        alt="language icon"
                        width={20}
                        height={20}
                        className="absolute top-[12px] left-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 mt-8">
                <Button
                  type="button"
                  btnIcon={cancelIcon}
                  label={"cancel"}
                  colorBtn="#E13350"
                  colorBtnActive="#FF7189"
                  colorBtnHover="#BF213B"
                  widthBtn="100%"
                  onclick={() =>
                    router.push(FluentDoorRoutes.articleAdminDashboard)
                  }
                />
                <Button
                  type="submit"
                  btnIcon={addIcon}
                  widthBtn="100%"
                  label={isSubmitting ? "updating..." : "update article"}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        )
      )}
    </div>
  );
};

export default EditArticle;
