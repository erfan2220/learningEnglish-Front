"use client";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath = "?page=",
}) => {
  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-10 gap-2 text-lg font-semibold">
      {currentPage > 1 && (
        <Link href={`${basePath}${currentPage - 1}`}>
          <span className="px-3 py-2 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200">
            {"<"}
          </span>
        </Link>
      )}

      {getPaginationNumbers().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-3 py-2 text-gray-400">
            ...
          </span>
        ) : (
          <Link key={idx} href={`${basePath}${page}`}>
            <span
              className={`px-3 py-2 rounded-md cursor-pointer ${
                page === currentPage
                  ? "bg-[#5F33E1] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {page}
            </span>
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link href={`${basePath}${currentPage + 1}`}>
          <span className="px-3 py-2 rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200">
            {">"}
          </span>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
