"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useArticleDetail } from "@/hooks/useArticleDetail";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { unescapeMarkdown } from "@/lib/utils";
import Image from "next/image";

const BlogDetail = () => {
  const [data, setData] = useState<string | null>(null);

  const params = useParams();
  const slug = params?.slug as string;

  const result = useArticleDetail(slug);

  useEffect(() => {
    const markdown = sessionStorage.getItem(slug);

    if (markdown) {
      setData(unescapeMarkdown(markdown));
    } else if (result.article) {
      const raw = result.article.htmlContent || "";
      setData(unescapeMarkdown(raw));
    } else if (result.error) {
      console.error("Article detail not found for slug:", slug);
    }
  }, [slug, result.article, result.error]);

  if (result.loading) {
    return (
      <div className="mt-16 w-full px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-8 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-8 h-64 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }

  if (result.error) {
    return (
      <div className="mt-16 w-full px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
        <div className="py-12 text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600 dark:text-red-400">
            Bài viết không tìm thấy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{result.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 w-full px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      {result.article && (
        <>
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 p-0.5 text-sm font-medium">
                <span className="inline-block rounded-[6px] bg-backgroundMain px-3 py-1 text-gray-700 dark:text-white">
                  {result.article.article_type?.name}
                </span>
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              {result.article.title}
            </h1>
            <div className="mb-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{new Date(result.article.publishedAt).toLocaleDateString("vi-VN")}</span>
              <span className="mx-3">•</span>
              <span>Khoảng {result.article.duration} phút đọc</span>
            </div>
            {result.article.summary && (
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {result.article.summary}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {result.article.thumbnail?.url && (
            <div className="mb-8">
              <Image
                src={result.article.thumbnail.url}
                alt={result.article.thumbnail.alternativeText || result.article.title}
                width={1200}
                height={600}
                className="h-auto w-full rounded-lg object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          {data && (
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-a:text-purple-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
            </article>
          )}
        </>
      )}
    </div>
  );
};

export default BlogDetail;
