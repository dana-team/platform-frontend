import { useDataQuery } from "@/hooks/useDataQuery";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { PROJECTS_PAGE_SIZE } from "@common/consts";
import { ICappMetadata } from "@models/applications/applications";

interface IApplicationsData {
  remainingCount: number;
  count: number;
  capps: { capp: ICappMetadata }[];
}

// TODO: what to do with the error?
interface IUseApplicationsResult {
  error: Error | null;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
  currentAmount: number;
  isPlaceholderData: boolean;
  capps: { capp: ICappMetadata }[];
  isSuccess: boolean;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

export const useApplications = (): IUseApplicationsResult => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const queryKey = useMemo(
    () => ["applications", currentPage, search],
    [currentPage, search]
  );

  const queryPath = useMemo(
    () =>
      search === ""
        ? `/v1/namespaces/capps/${currentPage}`
        : `/v1/namespaces/capps/${currentPage}?search=${search}`,
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

  const cappData = data?.body as IApplicationsData;
  const remainingCount = cappData?.remainingCount ?? 0;
  const count = cappData?.count ?? 0;

  const totalCount =
    remainingCount + count + (currentPage - 1) * PROJECTS_PAGE_SIZE;

  const currentAmount = cappData?.count ?? 0;
  const capps = cappData?.capps ?? [];

  return {
    error,
    currentPage,
    setCurrentPage,
    totalCount,
    currentAmount,
    isPlaceholderData,
    capps,
    isSuccess,
    isLoading,
    setSearch,
    search,
  };
};
