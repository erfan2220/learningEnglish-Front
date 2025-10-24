import AllArticles from "@/components/Admin/AdminDashboardDetail/Articles/AllArticles";
import React from "react";

type SearchParams = Promise<{ page?: string }>;

export default async function AllArticlePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const currentPage = Number(sp.page ?? "1");

  return (
    <div>
      <AllArticles currentPage={currentPage} />
    </div>
  );
}
