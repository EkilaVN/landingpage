"use client";

import React from "react";
import PortfolioCard from "@/views/Portfolio/PortfolioCard/PortfolioCard";
import { useProjects } from "@/hooks/useProjects";

interface PortfolioListProps {
  selectedCategory?: string;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ selectedCategory = "all" }) => {
  const { projects, loading, error } = useProjects(); // Remove selectedCategory parameter

  // Frontend filtering
  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "Tất cả") {
      return projects;
    }

    return projects.filter((project) => {
      // Filter by project type slug or name
      const projectTypeSlug = project.project_type?.slug;
      const projectTypeName = project.project_type?.title?.toLowerCase();
      const category = project.category?.toLowerCase();
      const selectedCategoryLower = selectedCategory.toLowerCase();

      console.log(projectTypeName);

      return (
        projectTypeSlug === selectedCategory ||
        projectTypeName === selectedCategoryLower ||
        category === selectedCategoryLower
      );
    });
  }, [projects, selectedCategory]);

  // Loading state
  if (loading) {
    return (
      <section className="md:px-auto mx-auto mb-10 flex h-auto w-full flex-col items-center justify-center space-y-16 px-4 pb-2 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">Đang tải dự án...</span>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="md:px-auto mx-auto mb-10 flex h-auto w-full flex-col items-center justify-center space-y-16 px-4 pb-2 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 text-red-500">
            <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-center text-lg text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Thử lại
          </button>
        </div>
      </section>
    );
  }

  // Empty state
  if (filteredProjects.length === 0 && !loading) {
    return (
      <section className="md:px-auto mx-auto mb-10 flex h-auto w-full flex-col items-center justify-center space-y-16 px-4 pb-2 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 text-gray-400">
            <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300">
            {selectedCategory === "all"
              ? "Không có dự án nào"
              : `Không có dự án nào trong danh mục "${selectedCategory}"`}
          </p>
        </div>
      </section>
    );
  }

  // Transform API projects to component props format
  const transformedProjects = filteredProjects.map((project) => ({
    id: project.id,
    imageSrc:
      (process.env.NEXT_PUBLIC_API_BASE_URL ?? "") + (project.thumbnail?.url || "") ||
      "/placeholder-image.jpg",
    category: project.project_type?.title || project.category || "Other",
    title: project.title,
    description: project.summary || "",
    markdownContent: project.htmlContent || "",
    buttonLink: project.link || `/portfolio/${project.slug || project.id}`,
  }));
  return (
    <section className="md:px-auto mx-auto mb-10 flex h-auto w-full flex-col items-center justify-between space-y-16 px-4 pb-2 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
      {transformedProjects.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10`}
        >
          <PortfolioCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default PortfolioList;
