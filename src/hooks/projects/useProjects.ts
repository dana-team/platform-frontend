import { useDataQuery } from "@/hooks/useDataQuery";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQueryClient } from "@tanstack/react-query";

interface IProjectData {
  totalCount: number;
  count: number;
  containerNames: string[];
}

// TODO: what to do with the error?
interface IUseProjectsResult {
  error: Error | null;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  currentAmount: number;
  isPlaceholderData: boolean;
  projects: string[];
  isSuccess: boolean;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const useProjects = (): IUseProjectsResult => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const queryKey = useMemo(
    () => ["projects", currentPage, search],
    [currentPage, search]
  );

  const queryPath = useMemo(
    () =>
      search === ""
        ? `/projects/${currentPage}`
        : `/projects/${currentPage}?search=${search}`,
    [currentPage, search]
  );

  const { data, isSuccess, isLoading, error, isPlaceholderData } = useDataQuery(
    queryPath,
    {
      placeholderData: keepPreviousData,
      queryKey,
    }
  );

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryKey, queryClient]);

  const projectData = data?.body as IProjectData;
  const totalPages = projectData?.totalCount ?? 0;
  const currentAmount = projectData?.count ?? 0;
  const projects = projectData?.containerNames ?? [];

  return {
    error,
    currentPage,
    setCurrentPage,
    totalPages,
    currentAmount,
    isPlaceholderData,
    projects,
    isSuccess,
    isLoading,
    setSearch,
  };
};
