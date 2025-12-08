"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useProjectDetail } from "@/hooks/useProjectDetail";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { unescapeMarkdown } from "@/lib/utils";

const PortfolioDetail = () => {
  const [data, setData] = useState<string | null>(null);

  const params = useParams();
  const slug = params?.slug as string;

  const result = useProjectDetail(slug);

  useEffect(() => {
    const markdown = sessionStorage.getItem(slug);

    if (markdown) {
      setData(unescapeMarkdown(markdown));
    } else if (result.project) {
      const raw = result.project.htmlContent || "";
      setData(unescapeMarkdown(raw));
    } else if (result.error) {
      console.error("Project detail not found for slug:", slug);
    }
  }, [slug, result.project, result.error]);

  console.log(data);

  return (
    <div className="mt-16 w-full px-4 md:mt-20 lg:mt-32 lg:max-w-[1170px] 2xl:max-w-[1420px]">
      {data ? (
        <div className="prose mb-12 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PortfolioDetail;
