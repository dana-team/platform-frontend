import { http, HttpHandler, HttpResponse } from "msw";
import { API_URL } from "@common/consts";

export const hierarchiesHandlers: HttpHandler[] = [
  http.get(`${API_URL}/hierarchies`, async () => {
    return HttpResponse.json({
      hierarchies: ["merkazA / anafA / madorA"],
    });
  }),
];
