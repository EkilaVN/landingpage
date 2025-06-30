import { useQuery } from "@tanstack/react-query";
import { Project } from "./useProjects";
import api from "@/services/kyInstance";

interface ProjectDetailApiResponse {
  data: Project;
}

// API fetcher function
const fetchProjectDetail = async (projectId: string): Promise<Project> => {
  const response = await api.get(`projects/${projectId}?populate=*`);

  if (!response.ok) {
    throw new Error("Không thể tải chi tiết dự án");
  }

  const json: ProjectDetailApiResponse = await response.json();
  return json.data;
};

// Hook using react-query
export function useProjectDetail(projectId: string) {
  const {
    data: project = null,
    isLoading: loading,
    isError,
    error,
  } = useQuery<Project, Error>({
    queryKey: ["project", projectId],
    queryFn: () => fetchProjectDetail(projectId),
    enabled: !!projectId,
    staleTime: 15 * 60 * 1000,
    retry: 1,
  });

  return {
    project,
    loading,
    error: isError ? (error?.message ?? "Đã có lỗi xảy ra") : null,
  };
}
