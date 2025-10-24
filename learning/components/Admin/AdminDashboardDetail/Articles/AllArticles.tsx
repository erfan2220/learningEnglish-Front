"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
import { api } from "@/lib/APIs/axiosInstance";
import { ArticlesType } from "@/model/articles";
import { BeatLoader } from "react-spinners";
import Pagination2 from "../../../Common/Pagination/Pagination";
import Button from "@/components/Common/Button/Button";
import VoiceSearchInput from "@/components/Common/SearchInput/VoiceSearchInput";
import toast from "react-hot-toast";

const editIcon = "/icons/editWhite.svg";
const deleteIcon = "/icons/binWhite.svg";

export default function AllArticles({
  currentPage = 1,
}: {
  currentPage?: number;
}) {
  const router = useRouter();
  const [articles, setArticles] = useState<ArticlesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const filteredArticles = articles.filter(
    (article) =>
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content?.includes(searchTerm)
  );

  const ppg = 3;
  const firstIndex = (currentPage - 1) * ppg;
  const endIndex = firstIndex + ppg;
  const showArticles = filteredArticles.slice(firstIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / ppg);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get(`/api/blogs`);
        setArticles(res.data);
      } catch (error) {
        console.error("Fetching blogs failed:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/api/blogs/${id}`);
      setArticles((prev) => prev.filter((a) => a.id !== id));
      toast.success("Article deleted successfully!");
    } catch (error) {
      console.error("Failed to delete article:", error);
      toast.error("Failed to delete article. Please try again later.");
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#5F33E1" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64 text-red-600 font-semibold">
          {error}
        </div>
      ) : (
        <div>
          <VoiceSearchInput value={searchTerm} onChange={setSearchTerm} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {showArticles.map((article) => (
              <div
                key={article.id}
                className={`relative h-[430px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl`}
              >
                <Image
                  src={article.picture}
                  alt={article.title}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover border-4 border-white rounded-lg"
                />

                <div className="p-4 relative h-[220px]">
                  <h3 className="text-lg sm:text-xl text-[#45444A] font-semibold mb-2">
                    {article.title}
                  </h3>
                  <div className="flex justify-between text-[#8B8A8E] text-xs mb-2">
                    <p>{article.author}</p>
                    <p>{article.created_at}</p>
                  </div>

                  <div
                    className="text-[#5C5A60] text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        article.content
                          .replace(/<[^>]*>/g, "")
                          .substring(0, 120) + "...",
                    }}
                  />
                </div>
                <div className="absolute bottom-4 w-full flex items-center justify-center gap-4 px-4">
                  <Button
                    label="Delete"
                    type="button"
                    widthBtn="100%"
                    btnIcon={deleteIcon}
                    colorBtn="#E13350"
                    colorBtnActive="#FF7189"
                    colorBtnHover="#BF213B"
                    onclick={() => handleDelete(article.id)}
                  />
                  <Button
                    label="Edit"
                    type="button"
                    widthBtn="100%"
                    btnIcon={editIcon}
                    colorBtn="#97C01C"
                    colorBtnActive="#D1FF46"
                    colorBtnHover="#5D7C02"
                    onclick={() =>
                      router.push(
                        FluentDoorRoutes.editArticleAdminDashboard +
                          `/${article.id}`
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center text-center">
        {totalPages > 1 && (
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="?page="
          />
        )}
      </div>
    </div>
  );
}
