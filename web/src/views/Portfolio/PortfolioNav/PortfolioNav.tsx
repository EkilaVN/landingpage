"use client";

import React, { useState, useEffect, useRef } from "react";
import { useProjectTypes } from "@/hooks/useProjectTypes";

interface PortfolioNavProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}

const PortfolioNav: React.FC<PortfolioNavProps> = ({ setSelectedCategory, selectedCategory }) => {
  const { categories, loading, error } = useProjectTypes();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });

  const handleClick = (title: string) => {
    setSelectedCategory(title);
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeBtn = container.querySelector<HTMLButtonElement>(
      `button[data-id="${selectedCategory}"]`
    );

    if (activeBtn) {
      const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = activeBtn;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
        top: offsetTop,
        height: offsetHeight,
      });
    }
  }, [selectedCategory, categories]); // Add categories dependency

  // Show loading state
  if (loading) {
    return (
      <div className="relative mx-5 mb-16 mt-6 flex w-[90vw] flex-col justify-center overflow-x-auto rounded-[26px] bg-gray-100 p-1 dark:bg-[#272728] md:mt-10 md:w-fit md:flex-row md:gap-4 md:rounded-full">
        <div className="flex items-center justify-center p-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Đang tải...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && categories.length === 1) {
    return (
      <div className="relative mx-5 mb-16 mt-6 flex w-[90vw] flex-col justify-center overflow-x-auto rounded-[26px] bg-gray-100 p-1 dark:bg-[#272728] md:mt-10 md:w-fit md:flex-row md:gap-4 md:rounded-full">
        <div className="flex items-center justify-center p-4">
          <span className="text-sm text-red-600 dark:text-red-400">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-5 mb-16 mt-6 flex w-[90vw] flex-col justify-center overflow-x-auto rounded-[26px] bg-gray-100 p-1 dark:bg-[#272728] md:mt-10 md:w-fit md:flex-row md:gap-4 md:rounded-full"
    >
      {/* Sliding background */}
      <div
        className="absolute left-0 top-1 w-[90vw] rounded-full bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-300 md:h-[calc(100%-0.5rem)] md:w-full"
        style={{
          left: sliderStyle.left,
          width: sliderStyle.width - 0.5,
          top: sliderStyle.top,
          height: sliderStyle.height,
        }}
      />

      {categories.map(({ id, title }) => {
        const isActive = selectedCategory === title;
        return (
          <button
            key={id}
            data-id={title}
            onClick={() => handleClick(title)}
            className={`relative z-10 whitespace-nowrap rounded-full p-1 text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-black" : "text-gray-600 hover:text-black"
            }`}
          >
            <span
              className={`block rounded-full bg-white p-2 text-sm font-medium text-black dark:text-white ${
                isActive ? "!bg-backgroundMain" : "!bg-backgroundSub"
              }`}
            >
              {title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PortfolioNav;
