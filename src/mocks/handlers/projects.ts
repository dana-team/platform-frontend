import { http, HttpHandler, HttpResponse } from "msw";
import { API_URL } from "@common/consts";

const projects = [
  "nginx",
  "redis",
  "h",
  "f",
  "fff",
  "Ffff",
  "redis",
  "h",
  "defef",
  "project name",
  "project new",
  "backup",
];

export const projectsHandlers: HttpHandler[] = [
  http.get(`${API_URL}/projects/:page`, async ({ params, request }) => {
    const requestParams = await params;
    const page = requestParams.page;
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    const firstNineItems = projects.slice(0, 9);
    const followingNine = projects.slice(9, 18);

    if (!search) {
      return HttpResponse.json({
        containerNames: page == "1" ? firstNineItems : followingNine,
        count: page == "1" ? firstNineItems.length : followingNine.length,
        totalCount: firstNineItems.length + followingNine.length,
      });
    }
    const strings = filterStrings(projects, search.toString());
    return HttpResponse.json({
      containerNames: strings,
      count: strings.length,
      totalCount: strings.length,
    });
  }),
  http.post(`${API_URL}/projects`, async ({ request }) => {
    const requestData = await request.json();
    const data = requestData as { name: string; hierarchy: string };
    console.log(
      `POST namespaces sent , request:  ${JSON.stringify(requestData)}`
    );
    projects.push(data.name);
    console.log(projects.length);
    return HttpResponse.json(
      {
        success: "ok",
      },
      { status: 401 }
    );
  }),
];

const filterStrings = (array: string[], word: string): string[] => {
  const regex = new RegExp(word, "i"); // 'i' flag makes the regex case-insensitive
  return array.filter((item) => regex.test(item));
};
