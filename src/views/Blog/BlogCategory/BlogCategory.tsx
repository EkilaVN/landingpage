"use client";

import React, { useState, useEffect, useRef } from "react";

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "web", label: "Website" },
  { id: "mobile", label: "Mobile App" },
  { id: "zma", label: "Zalo Mini App" },
  { id: "customSoftware", label: "Phát triển phần mềm tùy chỉnh" },
  { id: "design", label: "Design/Thiết kế" },
  { id: "marketing", label: "Marketing" },
  { id: "news", label: "Tin tức & Sự kiện" },
];

const BlogCategory: React.FC = () => {
  const [selected, setSelected] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });

  const handleClick = (id: string) => {
    setSelected(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeBtn = container.querySelector<HTMLButtonElement>(`button[data-id="${selected}"]`);

    if (activeBtn) {
      const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = activeBtn;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
        top: offsetTop,
        height: offsetHeight,
      });
    }
  }, [selected]);

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
        const isActive = selected === id;
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
