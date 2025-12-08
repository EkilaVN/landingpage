import { useQuery } from "@tanstack/react-query";
import api from "@/services/kyInstance";

// Project interface
export interface Project {
  id: number;
  documentId: string;
  title: string;
  summary?: string;
  thumbnail?: {
    url: string;
    alternativeText?: string;
  };
  category?: string;
  slug?: string;
  link?: string;
  htmlContent?: string;
  project_type?: {
    id: number;
    title: string;
    slug?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

interface ProjectsApiResponse {
  data: Project[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Fetcher function
const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get("projects?populate=*").json<ProjectsApiResponse>();
  return response.data || [];
};

// Hook with react-query
export const useProjects = () => {
  const {
    data: projects = [],
    isLoading: loading,
    isError,
    refetch,
  } = useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    projects,
    loading,
    error: isError ? "Không thể tải danh sách dự án" : null,
    refetch,
  };
};
