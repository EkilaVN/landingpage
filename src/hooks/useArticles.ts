import { useQuery } from "@tanstack/react-query";
import api from "@/services/kyInstance";
import { ArticlesResponse, Article, ArticleFilters } from "@/types/app-type";
import { BlogCardProps } from "@/views/Blog/BlogCard/BlogCard";

// Build query parameters for Strapi API
const buildQueryParams = (filters: ArticleFilters) => {
  const params = new URLSearchParams();

  // Add pagination
  if (filters.page) {
    params.append("pagination[page]", filters.page.toString());
  }
  if (filters.pageSize) {
    params.append("pagination[pageSize]", filters.pageSize.toString());
  }

  // Add article type filter
  if (filters.articleType && filters.articleType !== "all") {
    // Filter by article_type ID instead of slug
    params.append("filters[article_type][id][$eq]", filters.articleType);
  }

  // Add populate for relations
  params.append("populate[0]", "thumbnail");
  params.append("populate[1]", "article_type");

  return params.toString();
};

const fetchArticles = async (filters: ArticleFilters = {}): Promise<ArticlesResponse> => {
  const queryParams = buildQueryParams(filters);
  const response = await api.get(`articles?${queryParams}`).json<ArticlesResponse>();
  return response;
};

// Transform Article to BlogCardProps
const transformArticleToBlogCard = (article: Article): BlogCardProps => ({
  id: article.id,
  imageSrc: article.thumbnail?.url || "/images/default-blog.jpg",
  category: article.article_type?.name || "Uncategorized",
  title: article.title,
  description: article.summary,
  publishedAt: new Date(article.publishedAt).toLocaleDateString("vi-VN"),
  blogLink: `/blog/${article.slug}`,
  readDuration: article.duration || "5",
});

// Custom hook with filtering and pagination
export const useArticles = (filters: ArticleFilters = {}) => {
  const {
    data,
    isLoading: loading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["articles", filters],
    queryFn: () => fetchArticles(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  // Transform articles to BlogCardProps format
  const articles: BlogCardProps[] = data?.data?.map(transformArticleToBlogCard) || [];
  const pagination = data?.meta?.pagination;

  return {
    articles,
    pagination,
    loading,
    isFetching,
    error: isError ? "Không thể tải danh sách bài viết" : null,
    refetch,
    // Pagination helpers
    hasNextPage: pagination ? pagination.page < pagination.pageCount : false,
    hasPrevPage: pagination ? pagination.page > 1 : false,
    totalPages: pagination?.pageCount || 0,
    currentPage: pagination?.page || 1,
    totalItems: pagination?.total || 0,
  };
};
