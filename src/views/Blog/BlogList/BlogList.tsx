"use client";

import React from "react";
import BlogCard, { BlogCardProps } from "../BlogCard/BlogCard";

const portfolioItems = [
  {
    id: 1,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Other industry",
    title: "Connect A Job",
    description:
      "ConnectaJob represents intelligent job management. ConnectaJob represents intelligent job management. ConnectaJob represents intelligent job management.",
    blogLink: "#",
    publishedAt: "2023-10-01",
    readDuration: "5",
  },
  {
    id: 2,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-02",
    readDuration: "5",
  },
  {
    id: 3,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-03",
    readDuration: "5",
  },
  {
    id: 4,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-04",
    readDuration: "5",
  },
  {
    id: 5,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-05",
    readDuration: "5",
  },
  {
    id: 6,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-06",
    readDuration: "5",
  },
  {
    id: 7,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-05",
    readDuration: "5",
  },
  {
    id: 8,
    imageSrc:
      "https://d2dkqamqz2k831.cloudfront.net/uploads/2025-05-27T09%3A41%3A12.667Z_risk%20software.jpg",
    category: "Mobile",
    title: "Project X",
    description:
      "The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading. The Luxe Nomad is an Asia-Pacific's leading.",
    blogLink: "#",
    publishedAt: "2023-10-06",
    readDuration: "5",
  },
  // Add more...
];

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

const BlogList: React.FC = () => {
  const groupedItems = groupAlternating(portfolioItems);

  return (
    <section className="mx-auto mb-10 flex h-auto w-full flex-col items-center justify-between space-y-6 px-4 pb-2 md:space-y-14 lg:max-w-[1170px] xl:px-10 2xl:max-w-[1420px]">
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
    </section>
  );
};

export default BlogList;
