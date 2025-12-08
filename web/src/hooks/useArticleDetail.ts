import { useQuery } from "@tanstack/react-query";
import { Article } from "@/types/app-type";
import api from "@/services/kyInstance";

// API fetcher function
const fetchArticleDetail = async (slug: string): Promise<Article> => {
  // First try to fetch by slug
  const response = await api.get(
    `articles?filters[slug][$eq]=${slug}&populate[0]=thumbnail&populate[1]=article_type`
  );

  if (!response.ok) {
    throw new Error("Không thể tải chi tiết bài viết");
  }

  const json: { data: Article[] } = await response.json();

  if (!json.data || json.data.length === 0) {
    throw new Error("Bài viết không tìm thấy");
  }

  return json.data[0];
};

// Hook using react-query
export function useArticleDetail(slug: string) {
  const {
    data: article = null,
    isLoading: loading,
    isError,
    error,
  } = useQuery<Article, Error>({
    queryKey: ["article", slug],
    queryFn: () => fetchArticleDetail(slug),
    enabled: !!slug,
    staleTime: 15 * 60 * 1000,
    retry: 1,
  });

  return {
    article,
    loading,
    error: isError ? (error?.message ?? "Đã có lỗi xảy ra") : null,
  };
}
