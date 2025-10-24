import React from "react";
import Articles from "@/components/Articles/Articles";

type SearchParams = Promise<{ page?: string }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const currentPage = Number(sp.page ?? "1");

  return (
    <div>
      <Articles currentPage={currentPage} />
    </div>
  );
}
