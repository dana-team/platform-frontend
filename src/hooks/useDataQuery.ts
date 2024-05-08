import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "./useFetch";
import { FetchResponse } from "@models/response/response";

export function useDataQuery(
  queryKey: string | string[],
  url: string,
  headers?: HeadersInit
): UseQueryResult<FetchResponse> {
  const { fetchInstance } = useFetch();

  const key = Array.isArray(queryKey) ? queryKey : [queryKey];
  return useQuery<FetchResponse>({
    queryKey: key,
    queryFn: () => fetchInstance.get(url, headers),
  });
}
