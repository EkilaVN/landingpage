import { useQuery } from "@tanstack/react-query";
import api from "@/services/kyInstance";

export interface Category {
  id: string;
  title: string;
}

interface ProjectType {
  id: number;
  documentId: string;
  title: string;
  slug?: string;
}

interface ApiResponse {
  data: ProjectType[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const DEFAULT_CATEGORIES: Category[] = [
  { id: "all", title: "Tất cả" },
  { id: "web", title: "Website" },
  { id: "mobile", title: "Mobile" },
  { id: "zma", title: "Zalo Mini App" },
  { id: "design", title: "Design/Thiết kế" },
  { id: "marketing", title: "Marketing" },
];

const fetchProjectTypes = async (): Promise<Category[]> => {
  const response = await api.get("project-types").json<ApiResponse>();
  const apiCategories: Category[] = response.data.map((projectType) => ({
    id: projectType.slug ?? projectType.id.toString(),
    title: projectType.title,
  }));
  return [{ id: "all", title: "Tất cả" }, ...apiCategories];
};

// Custom hook using react-query
export const useProjectTypes = () => {
  const {
    data: categories = DEFAULT_CATEGORIES,
    isLoading: loading,
    isError,
    refetch,
  } = useQuery<Category[], Error>({
    queryKey: ["project-types"],
    queryFn: fetchProjectTypes,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    categories,
    loading,
    error: isError ? "Không thể tải danh mục dự án" : null,
    refetch,
  };
};
