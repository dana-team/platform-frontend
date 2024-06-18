import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useState } from "react";
import { useFetch } from "@hooks/useFetch";
import { IFetchResponse } from "@models/response/response";

type RequestVariables<T> = {
  body?: T;
  headersInit?: HeadersInit;
};

export interface IMutateInstance<T> {
  post: UseMutationResult<IFetchResponse, Error, T>;
  put: UseMutationResult<IFetchResponse, Error, T>;
  delete: UseMutationResult<IFetchResponse, Error, T>;
}

export function useDataMutation<T>(
  url: string,
  headers?: HeadersInit,
  options?: UseMutationOptions<IFetchResponse, Error, RequestVariables<T>>
): {
  mutateInstance: IMutateInstance<RequestVariables<T>>;
} {
  const { fetchInstance } = useFetch();

  const [mutateInstance] = useState<IMutateInstance<RequestVariables<T>>>({
    post: useMutation<IFetchResponse, Error, RequestVariables<T>>({
      ...options,
      mutationFn: (variables: RequestVariables<T>) =>
        fetchInstance.post(
          url,
          JSON.stringify(variables?.body || ""),
          variables.headersInit || headers
        ),
    }),
    put: useMutation<IFetchResponse, Error, RequestVariables<T>>({
      ...options,
      mutationFn: (variables: RequestVariables<T>) =>
        fetchInstance.put(
          url,
          JSON.stringify(variables?.body || ""),
          variables.headersInit || headers
        ),
    }),
    delete: useMutation<IFetchResponse, Error, RequestVariables<T>>({
      ...options,
      mutationFn: (variables: RequestVariables<T>) =>
        fetchInstance.delete(url, variables.headersInit || headers),
    }),
  });

  return { mutateInstance: mutateInstance };
}
