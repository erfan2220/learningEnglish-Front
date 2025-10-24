
import ArticleDetail from "@/components/Articles/ArticleDetail";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ArticleDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return <ArticleDetail id={parseInt(id)} />;
};

export default ArticleDetailPage;
