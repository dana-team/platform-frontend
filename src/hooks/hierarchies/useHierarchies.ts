import { useDataQuery } from "@/hooks/useDataQuery";

interface IHierarchiesData {
  hierarchies: string[];
}

interface IUseHierarchiesResult {
  error: Error | null;
  hierarchies: string[];
  isLoading: boolean;
}

export const useHierarchies = (): IUseHierarchiesResult => {
  const { data, error, isLoading } = useDataQuery("/hierarchies", {
    queryKey: ["hierarchies"],
  });

  const projectData = data?.body as IHierarchiesData;
  const hierarchies = projectData?.hierarchies ?? [];

  return {
    error,
    hierarchies,
    isLoading,
  };
};
