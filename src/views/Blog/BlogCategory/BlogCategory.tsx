"use client";

import React, { useState, useEffect, useRef } from "react";
import { useArticleTypes } from "@/hooks/useArticleTypes";

interface BlogCategoryProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });

  // Fetch article types from API
  const { categories, loading, error } = useArticleTypes();

  const handleClick = (id: string) => {
    onCategoryChange(id);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeBtn = container.querySelector<HTMLButtonElement>(`button[data-id="${selectedCategory}"]`);

    if (activeBtn) {
      const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = activeBtn;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
        top: offsetTop,
        height: offsetHeight,
      });
    }
  }, [selectedCategory, loading, categories]);

  // Show loading skeleton while fetching data
  if (loading) {
    return (
      <div className="relative mb-10 mt-4 flex w-full flex-row gap-4 overflow-x-auto overflow-y-hidden border-b-2 p-1 md:mx-0 md:mt-6 lg:mb-16">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-10 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
    );
  }

  // Show error message if API fails (will fall back to default categories)
  if (error) {
    console.warn("Failed to load article types:", error);
  }

  return (
    <div
      ref={containerRef}
      className="relative mb-10 mt-4 flex w-full flex-row overflow-x-auto overflow-y-hidden border-b-2 p-1 md:mx-0 md:mt-6 md:gap-4 lg:mb-16"
    >
      {/* Sliding background */}
      <div
        className="absolute left-0 top-1 w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-300 md:h-[calc(100%-0.5rem)] md:w-full"
        style={{
          left: sliderStyle.left,
          width: sliderStyle.width - 0.5,
          top: sliderStyle.top + sliderStyle.height,
          height: 6,
        }}
      />

      {categories.map(({ id, label }) => {
        const isActive = selectedCategory === id;
        return (
          <button
            key={id}
            data-id={id}
            onClick={() => handleClick(id)}
            className={`relative z-10 whitespace-nowrap p-1 text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-black" : "text-gray-600 hover:text-black"
            }`}
          >
            <span
              className={`block p-2 text-sm font-medium text-black dark:text-white ${
                isActive ? "!text-textMain dark:!text-textTriangole" : ""
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BlogCategory;
