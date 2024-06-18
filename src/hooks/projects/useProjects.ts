import { useDataQuery } from "@/hooks/useDataQuery";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { PROJECTS_PAGE_SIZE } from "@common/consts";

interface IProjectsData {
  remainingCount: number;
  count: number;
  projects: IProjectData[];
}

interface IProjectData {
  name: string;
  hierarchy: string;
}

// TODO: what to do with the error?
interface IUseProjectsResult {
  error: Error | null;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
  currentAmount: number;
  isPlaceholderData: boolean;
  projects: IProjectData[];
  isSuccess: boolean;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
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

  const projectData = data?.body as IProjectsData;
  const remainingCount = projectData?.remainingCount ?? 0;
  const count = projectData?.count ?? 0;

  const totalCount =
    remainingCount + count + (currentPage - 1) * PROJECTS_PAGE_SIZE;

  const currentAmount = projectData?.count ?? 0;
  const projects = projectData?.projects ?? [];

  return {
    error,
    currentPage,
    setCurrentPage,
    totalCount,
    currentAmount,
    isPlaceholderData,
    projects,
    isSuccess,
    isLoading,
    setSearch,
    search
  };
};
