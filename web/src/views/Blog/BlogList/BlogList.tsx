"use client";

import React, { useState } from "react";
import BlogCard, { BlogCardProps } from "../BlogCard/BlogCard";
import { useArticles } from "@/hooks/useArticles";

// Group items into alternating 2 and 3-item groups
function groupAlternating(items: BlogCardProps[]): BlogCardProps[][] {
  const result: BlogCardProps[][] = [];
  let i = 0;
  let groupSize = 2;

  while (i < items.length) {
    result.push(items.slice(i, i + groupSize));
    i += groupSize;
    groupSize = groupSize === 2 ? 3 : 2;
  }

  return result;
}

interface BlogListProps {
  selectedCategory?: string;
}

const BlogList: React.FC<BlogListProps> = ({ selectedCategory = "all" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Fetch articles with filtering and pagination
  const {
    articles,
    loading,
    isFetching,
    error,
    hasNextPage,
    hasPrevPage,
    totalPages,
    totalItems,
  } = useArticles({
    articleType: selectedCategory,
    page: currentPage,
    pageSize,
  });

  const groupedItems = groupAlternating(articles);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Loading skeleton
  if (loading) {
    return (
      <section className="mx-auto mb-10 flex h-auto w-full flex-col items-center justify-between space-y-6 px-4 pb-2 md:space-y-14 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, itemIndex) => (
              <div key={itemIndex} className="@container">
                <div className="animate-pulse">
                  <div className="aspect-[11/6] w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-6 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-8 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="mx-auto mb-10 flex h-auto w-full flex-col items-center justify-center space-y-6 px-4 pb-2 md:space-y-14 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">{error}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Vui lòng thử lại sau hoặc liên hệ hỗ trợ.
          </p>
        </div>
      </section>
    );
  }

  // Empty state
  if (articles.length === 0 && !loading) {
    return (
      <section className="mx-auto mb-10 flex h-auto w-full flex-col items-center justify-center space-y-6 px-4 pb-2 md:space-y-14 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
            Chưa có bài viết nào
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-500">
            {selectedCategory === "all"
              ? "Hãy quay lại sau để xem những bài viết mới nhất."
              : "Không có bài viết nào trong danh mục này."}
          </p>
        </div>
      </section>
    );
  }

  // Main content
  return (
    <section className="mx-auto mb-10 flex h-auto w-full flex-col items-center justify-between space-y-6 px-4 pb-2 md:space-y-14 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
      {/* Loading overlay for page changes */}
      {isFetching && !loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex items-center space-x-2 rounded-lg bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-600 border-t-transparent"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Đang tải...</span>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {groupedItems.map((group, index) => (
        <div
          key={index}
          className={`grid w-full gap-5 ${
            group.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {group.map((item) => (
            <div key={item.id} className="@container">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex w-full items-center justify-between">
          {/* Pagination Info */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Hiển thị {((currentPage - 1) * pageSize) + 1} - {Math.min(currentPage * pageSize, totalItems)}
            trong tổng {totalItems} bài viết
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-1">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPrevPage || isFetching}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
            >
              Trước
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current page
              const shouldShow =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              if (!shouldShow) {
                // Show ellipsis
                if (page === currentPage - 2 && currentPage > 3) {
                  return <span key={page} className="px-2 text-gray-400">...</span>;
                }
                if (page === currentPage + 2 && currentPage < totalPages - 2) {
                  return <span key={page} className="px-2 text-gray-400">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={isFetching}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed ${
                    page === currentPage
                      ? "bg-gradient-to-r from-purple-600 to-blue-400 text-white"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNextPage || isFetching}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
            >
              Tiếp
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogList;
