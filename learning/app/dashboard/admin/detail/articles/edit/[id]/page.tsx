import EditArticle from "@/components/Admin/AdminDashboardDetail/EditArticles/EditArticle";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditArticlePage = async ({ params }: Props) => {
  const { id } = await params;

  return <EditArticle id={parseInt(id)} />;
};

export default EditArticlePage;
