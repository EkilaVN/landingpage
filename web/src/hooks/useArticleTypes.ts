import { useQuery } from "@tanstack/react-query";
import api from "@/services/kyInstance";

export interface ArticleCategory {
  id: string;
  label: string;
}

interface ArticleType {
  id: number;
  documentId: string;
  name: string;
}

interface ApiResponse {
  data: ArticleType[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const DEFAULT_CATEGORIES: ArticleCategory[] = [
  { id: "all", label: "Tất cả" },
  { id: "web", label: "Website" },
  { id: "mobile", label: "Mobile App" },
  { id: "zma", label: "Zalo Mini App" },
  { id: "customSoftware", label: "Phát triển phần mềm tùy chỉnh" },
  { id: "design", label: "Design/Thiết kế" },
  { id: "marketing", label: "Marketing" },
  { id: "news", label: "Tin tức & Sự kiện" },
];

const fetchArticleTypes = async (): Promise<ArticleCategory[]> => {
  const response = await api.get("article-types").json<ApiResponse>();
  const apiCategories: ArticleCategory[] = response.data.map((articleType) => ({
    id: articleType.id.toString(),
    label: articleType.name,
  }));
  return [{ id: "all", label: "Tất cả" }, ...apiCategories];
};

// Custom hook using react-query
export const useArticleTypes = () => {
  const {
    data: categories = DEFAULT_CATEGORIES,
    isLoading: loading,
    isError,
    refetch,
  } = useQuery<ArticleCategory[], Error>({
    queryKey: ["article-types"],
    queryFn: fetchArticleTypes,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    categories,
    loading,
    error: isError ? "Không thể tải danh mục bài viết" : null,
    refetch,
  };
};
