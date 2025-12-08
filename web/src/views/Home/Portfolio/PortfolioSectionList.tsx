"use client";

import { useState } from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

type PortfolioItem = {
  id: number;
  image: string;
  type: string;
};

type PortfolioClientProps = {
  portfolioItems: PortfolioItem[];
  tabs: string[];
};

const PortfolioSectionList = ({ portfolioItems, tabs }: PortfolioClientProps) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All" ? portfolioItems : portfolioItems.filter((item) => item.type === activeTab);

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-center gap-4 text-base font-bold text-textColor lg:gap-10">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer ${activeTab === tab ? "text-textMain" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(({ id, image }) => (
          <div
            key={id}
            className="relative h-full min-h-[200px] w-full rounded-xl bg-cover bg-center"
          >
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc={image}
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc={image}
              thumbnailAlt="Hero Video"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioSectionList;
