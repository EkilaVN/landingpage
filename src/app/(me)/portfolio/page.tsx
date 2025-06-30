"use client";

import React, { useState } from "react";
import GradientBar from "@/components/common/GradientBar/GradientBar";
import PortfolioList from "@/views/Portfolio/PortfolioList/PortfolioList";
import PortfolioNav from "@/views/Portfolio/PortfolioNav/PortfolioNav";
import TitlePage from "@/components/common/TitlePage";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  return (
    <div className="mt-16 w-full md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      <GradientBar />
      <TitlePage
        title="Sự hài lòng của khách hàng luôn là ưu tiên của Ekila"
        subtitle="Chất lượng không chỉ dừng lại ở sản phẩm công nghệ, mà hơn thế nữa."
      />
      <div className="flex w-full flex-col items-center justify-center">
        <PortfolioNav
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <PortfolioList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Portfolio;
