import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useState } from "react";
import { useFetch } from "@hooks/useFetch";
import { IFetchResponse } from "@models/response/response";

export interface IMutateInstance<T> {
  post: UseMutationResult<IFetchResponse, Error, T>;
  put: UseMutationResult<IFetchResponse, Error, T>;
  delete: UseMutationResult<IFetchResponse, Error, T>;
}

export function useDataMutation<T>(
  url: string,
  headers?: HeadersInit,
  options?: UseMutationOptions<IFetchResponse, Error, T>
): {
  mutateInstance: IMutateInstance<T>;
} {
  const { fetchInstance } = useFetch();

  const [mutateInstance] = useState<IMutateInstance<T>>({
    post: useMutation<IFetchResponse, Error, T>({
      ...options,
      mutationFn: (variables: T) =>
        fetchInstance.post(url, JSON.stringify(variables), headers),
    }),
    put: useMutation<IFetchResponse, Error, T>({
      ...options,
      mutationFn: (variables: T) =>
        fetchInstance.put(url, JSON.stringify(variables), headers),
    }),
    delete: useMutation<IFetchResponse, Error, T>({
      ...options,
      mutationFn: () => fetchInstance.delete(url, headers),
    }),
  });

  return { mutateInstance: mutateInstance };
}
