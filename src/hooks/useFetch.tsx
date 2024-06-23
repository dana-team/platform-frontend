import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { API_URL } from "@common/consts";
import { IFetchResponse } from "@models/response/response";
import { FetchResponse } from "@models/response/response";

type body = string | null | undefined;
export interface IFetch {
  get: (url: string, headers?: HeadersInit) => Promise<IFetchResponse>;
  post: (
    url: string,
    body: body,
    headers?: HeadersInit
  ) => Promise<IFetchResponse>;
  put: (
    url: string,
    body: body,
    headers?: HeadersInit
  ) => Promise<IFetchResponse>;
  delete: (url: string, headers?: HeadersInit) => Promise<IFetchResponse>;
}

const fetchHandler = async (
  url: string,
  options: RequestInit
): Promise<IFetchResponse> => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      if (data && typeof data === "object" && "message" in data) {
        throw new Error(data.message || "Error message not found");
      }
      throw new Error("Unknown error occurred");
    }

    return new FetchResponse(response, data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetch Error: ${error.message}`);
    } else {
      throw new Error(`Fetch Error: ${String(error)}`);
    }
  }
};

const fetchInstance: IFetch = {
  get: async (url, headers) => fetchHandler(url, { method: "GET", headers }),
  post: async (url, body, headers) =>
    fetchHandler(url, { method: "POST", body, headers }),
  put: async (url, body, headers) =>
    fetchHandler(url, { method: "PUT", body, headers }),
  delete: async (url, headers) =>
    fetchHandler(url, { method: "DELETE", headers }),
};

export const useFetch = (): { fetchInstance: IFetch } => {
  const { token, isAuthenticated } = useAuth();
  const [instance, setInstance] = useState(fetchInstance);

  const backendUrl = API_URL;

  useEffect(() => {
    setInstance({
      ...fetchInstance,
      get: async (url, headers) =>
        fetchInstance.get(`${backendUrl}${url}`, {
          Authorization: `Bearer ${isAuthenticated() ? token : ""}`,
          ...headers,
        }),
      post: async (url, body, headers) =>
        fetchInstance.post(`${backendUrl}${url}`, body, {
          Authorization: `Bearer ${isAuthenticated() ? token : ""}`,
          ...headers,
        }),
      put: async (url, body, headers) =>
        fetchInstance.put(`${backendUrl}${url}`, body, {
          Authorization: `Bearer ${isAuthenticated() ? token : ""}`,
          ...headers,
        }),
      delete: async (url, headers) =>
        fetchInstance.delete(`${backendUrl}${url}`, {
          Authorization: `Bearer ${isAuthenticated() ? token : ""}`,
          ...headers,
        }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, backendUrl]);

  return { fetchInstance: instance };
};
