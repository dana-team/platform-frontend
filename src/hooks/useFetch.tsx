import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { API_URL } from "@common/consts";
import { FetchResponse } from "@models/response/response";

type body = string | null | undefined;
export interface FetchInstance {
  get: (url: string, headers?: HeadersInit) => Promise<FetchResponse>;
  post: (
    url: string,
    body: body,
    headers?: HeadersInit
  ) => Promise<FetchResponse>;
  put: (
    url: string,
    body: body,
    headers?: HeadersInit
  ) => Promise<FetchResponse>;
  delete: (url: string, headers?: HeadersInit) => Promise<FetchResponse>;
}

const fetchHandler = async (
  url: string,
  options: RequestInit
): Promise<FetchResponse> => {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    if (data && typeof data === "object" && "message" in data) {
      throw new Error(data.message || "Error message not found");
    }
    throw new Error("Unknown error occurred");
  }

  return new FetchResponse(response, data);
};

const fetchInstance: FetchInstance = {
  get: async (url, headers) => fetchHandler(url, { method: "GET", headers }),
  post: async (url, body, headers) =>
    fetchHandler(url, { method: "POST", body, headers }),
  put: async (url, body, headers) =>
    fetchHandler(url, { method: "PUT", body, headers }),
  delete: async (url, headers) =>
    fetchHandler(url, { method: "DELETE", headers }),
};

export const useFetch = (): { fetchInstance: FetchInstance } => {
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
  }, [token, backendUrl]);

  return { fetchInstance: instance };
};
