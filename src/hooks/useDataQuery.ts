import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useFetch } from "./useFetch";
import { IFetchResponse } from "@models/response/response";

export function useDataQuery(
  url: string,
  options: UseQueryOptions<IFetchResponse, Error, IFetchResponse>,
  headers?: HeadersInit
): UseQueryResult<IFetchResponse> {
  const { fetchInstance } = useFetch();

  return useQuery<IFetchResponse>({
    ...options,
    queryKey: options?.queryKey,
    queryFn: () => fetchInstance.get(url, headers),
  });
}
