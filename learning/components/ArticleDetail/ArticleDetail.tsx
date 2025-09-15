import React from "react";
import Layout from "../Layout/Layout";
import { articles } from "@/constant/articles";
import Image from "next/image";

const defaultBanner = "/banners/defaultBanner.svg";
const defaultAuthorPhoto = "/icons/profilePhotoDefault.svg";
const clockIcon = "/icons/dayIcon.svg";

const ArticleDetail = ({ id }: { id: number }) => {
  const article = articles.find((article) => article.id === id);
  return (
    <div className="max-w-[1320px] mx-auto lg:px-8 mt-[60px] pb-8 pt-2 ">
      <Layout>
        <div className="px-4 sm:px-8">
          <div className=" my-8  ">
            <h1 className="text-[#5C5A60] font-bold text-xl sm:text-3xl pb-2">
              {article?.title}
            </h1>
            <div className="flex gap-2 items-center my-2">
              <Image src={clockIcon} alt="clockIcon" width={22} height={22} />
              {/* <p className="text-sm text-[#8B8A8E]">Publish date:</p> */}
              <p className="text-sm text-[#8B8A8E] font-medium">
                {" "}
                {article?.date}
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <Image
                src={article?.authorPhoto ?? defaultAuthorPhoto}
                alt={article?.author ?? "Author Photo"}
                width={28}
                height={28}
              />

              <p className="text-sm text-[#8B8A8E] font-semibold">
                {" "}
                {article?.author}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center my-8">
            <Image
              src={article?.banner ?? defaultBanner}
              alt={article?.title ?? "Article Banner"}
              width={500}
              height={200}
              className="rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              data-aos="fade-down"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}
            className=" text-sm sm:text-base text-[#737177] mb-12 leading-7"
          />
        </div>
      </Layout>
    </div>
  );
};

export default ArticleDetail;
