import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useState } from "react";
import { useFetch } from "@hooks/useFetch";
import { FetchResponse } from "@models/response/response";

export interface MutateInstance<T> {
  post: UseMutationResult<FetchResponse, Error, T>;
  put: UseMutationResult<FetchResponse, Error, T>;
  delete: UseMutationResult<FetchResponse, Error, T>;
}

export function useDataMutation<T>(
  url: string,
  headers?: HeadersInit,
  options?: UseMutationOptions<FetchResponse, Error, T>
): {
  mutateInstance: MutateInstance<T>;
} {
  const { fetchInstance } = useFetch();

  const [mutateInstance] = useState<MutateInstance<T>>({
    post: useMutation<FetchResponse, Error, T>({
      ...options,
      mutationFn: (variables: T) =>
        fetchInstance.post(url, JSON.stringify(variables), headers),
    }),
    put: useMutation<FetchResponse, Error, T>({
      ...options,
      mutationFn: (variables: T) =>
        fetchInstance.put(url, JSON.stringify(variables), headers),
    }),
    delete: useMutation<FetchResponse, Error, T>({
      ...options,
      mutationFn: () => fetchInstance.delete(url, headers),
    }),
  });

  return { mutateInstance: mutateInstance };
}
