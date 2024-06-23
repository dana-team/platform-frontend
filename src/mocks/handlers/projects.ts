import { http, HttpHandler, HttpResponse } from "msw";
import { API_URL } from "@common/consts";

const projects = [
  { name: "nginx", hierarchy: "Business Unit/Department/Team" },
  { name: "redis", hierarchy: "Business Unit/Department/Team" },
  { name: "my app", hierarchy: "Business Unit/Department/Team" },
  { name: "my application", hierarchy: "Business Unit/Department/Team" },
  { name: "app-prod", hierarchy: "Business Unit/Department/Team" },
  { name: "app-test", hierarchy: "Business Unit/Department/Team" },
  { name: "my-tests", hierarchy: "Business Unit/Department/Team" },
  { name: "try-new", hierarchy: "Business Unit/Department/Team" },
  { name: "rollback-changes-test", hierarchy: "Business Unit/Department/Team" },
  { name: "project-name", hierarchy: "Business Unit/Department/Team" },
  { name: "project new", hierarchy: "Business Unit/Department/Team" },
  { name: "new", hierarchy: "Business Unit/Department/Team" },
];

export const projectsHandlers: HttpHandler[] = [
  http.get(`${API_URL}/projects/:page`, async ({ params, request }) => {
    const requestParams = await params;
    const page = requestParams.page;
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    const firstNineItems = projects.slice(0, 9);
    const followingNine = projects.slice(9, 18);

    // return HttpResponse.json({
    //   projects: [],
    //   count: 0,
    //   remainingCount: 0,
    // });
    if (!search) {
      return HttpResponse.json({
        projects: page == "1" ? firstNineItems : followingNine,
        count: page == "1" ? firstNineItems.length : followingNine.length,
        remainingCount: page == "1" ? followingNine.length : 0,
      });
    }

    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
    return HttpResponse.json({
      projects: filteredProjects,
      count: filteredProjects.length,
      remainingCount: filteredProjects.length,
    });
  }),
  http.post(`${API_URL}/projects`, async ({ request }) => {
    const requestData = await request.json();
    const data = requestData as { name: string; hierarchy: string };
    console.log(
      `POST namespaces sent , request:  ${JSON.stringify(requestData)}`
    );
    projects.push(data);
    console.log(projects.length);
    return HttpResponse.json(
      {
        success: "ok",
      },
      { status: 401 }
    );
  }),
];
