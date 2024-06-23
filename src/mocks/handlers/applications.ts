import { http, HttpHandler, HttpResponse } from "msw";
import { API_URL } from "@common/consts";
import { ICappResponse } from "@models/applications/application";

const apps: ICappResponse[] = [
  {
    capp: {
      metadata: { name: "nginx-1" },
      source: "nginx/nginx:1.0.5",
    },
  },
  {
    capp: {
      metadata: { name: "nginx-2" },
      source: "nginx/nginx:latest",
      deployment: "ocp-lebron",
    },
  },
  {
    capp: {
      metadata: { name: "container-app-123" },
      source: "capp/container-app:latest",
    },
  },
  {
    capp: {
      metadata: { name: "container-app-123" },
      source: "capp/container-app:latest",
      deployment: "dep-abcdefg",
    },
  },
  {
    capp: {
      metadata: { name: "container-app-123" },
      source: "capp/container-app:latest",
      deployment: "dep-abcdefg",
    },
  },
  {
    capp: {
      metadata: { name: "container-app-123" },
      source: "capp/container-app:latest",
      deployment: "dep-abcdefg",
    },
  },
];

export const applicationHandlers: HttpHandler[] = [
  http.get(
    `${API_URL}/v1/namespaces/capps/:page`,
    async ({ params, request }) => {
      const requestParams = await params;
      const page = requestParams.page;
      const url = new URL(request.url);
      const search = url.searchParams.get("search");

      const firstNineItems = apps.slice(0, 9);
      const followingNine = apps.slice(9, 18);

      // return HttpResponse.json({
      //   apps: [],
      //   count: 0,
      //   remainingCount: 0,
      // });
      if (!search) {
        return HttpResponse.json({
          capps: page == "1" ? firstNineItems : followingNine,
          count: page == "1" ? firstNineItems.length : followingNine.length,
          remainingCount: page == "1" ? followingNine.length : 0,
        });
      }

      const filteredApps = apps.filter((app) =>
        app.capp.metadata.name.toLowerCase().includes(search.toLowerCase())
      );
      return HttpResponse.json({
        apps: filteredApps,
        count: filteredApps.length,
        remainingCount: filteredApps.length,
      });
    }
  ),
  http.post(`/v1/namespaces/capps/1`, async ({ request }) => {
    const requestData = await request.json();
    const data = requestData as ICappResponse;
    console.log(
      `POST namespaces sent , request:  ${JSON.stringify(requestData)}`
    );
    apps.push(data);
    console.log(apps.length);
    return HttpResponse.json(
      {
        success: "ok",
      },
      { status: 401 }
    );
  }),
];
