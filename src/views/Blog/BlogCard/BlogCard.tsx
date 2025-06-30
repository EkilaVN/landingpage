import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BlogCardProps {
  id?: string | number;
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  publishedAt?: string;
  blogLink?: string;
  readDuration?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  category,
  title,
  description,
  publishedAt,
  blogLink = "#",
  readDuration = "5",
}) => {
  return (
    <Link
      href={blogLink}
      className="@container/layout layout:flex-row layout:gap-6 layout:px-0 flex flex-col items-center gap-4 rounded-xl bg-backgroundMain"
    >
      {/* Image section */}
      <div className="w-full flex-1 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={400}
          loading="lazy"
          decoding="async"
          className="aspect-[11/6] h-auto w-full rounded-lg object-cover md:max-h-none lg:h-full"
        />
      </div>

      {/* Content section */}
      <div className="w-full flex-1">
        <span className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 p-0.5 text-sm font-medium text-gray-500 dark:text-white">
          <span className="inline-block rounded-[6px] bg-backgroundMain px-2 py-1">{category}</span>
        </span>
        <h3 className="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-3xl">
          {title}
        </h3>
        <p className="mt-6 text-sm text-textSecondary md:text-base">{description}</p>
        <p className="mt-3 text-sm text-textSecondary md:text-base">
          {publishedAt} &nbsp;&nbsp;&nbsp;&nbsp;Khoảng {readDuration} phút đọc
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
