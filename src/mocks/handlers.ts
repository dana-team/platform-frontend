import { http, HttpHandler, HttpResponse } from "msw";
import { projectsHandlers } from "./handlers/projects";
import { API_URL } from "@common/consts";
import { hierarchiesHandlers } from "./handlers/hierarchies";
import { applicationHandlers } from "./handlers/applications";

const containersHandlers: HttpHandler[] = [
  http.get(
    `${API_URL}/:namespace/:capp_name/:pod_name/containers`,
    ({ params }) => {
      console.log(`GET containers sent, params: ${params}`);
      return HttpResponse.json({
        containerNames: ["nginx", "redis"],
        count: 2,
      });
    }
  ),
];

const namespacesHandlers: HttpHandler[] = [
  http.get(`${API_URL}/namespaces`, () => {
    return HttpResponse.json({
      namespaces: ["namespace1", "namespace2", "namespace3"],
      count: 3,
    });
  }),
  http.get(`${API_URL}/namespaces/:namespace`, () => {
    return HttpResponse.json({
      namespace: "namespace",
    });
  }),
  http.post(`${API_URL}/namespaces`, async ({ request }) => {
    const requestData = await request.json();
    console.log(
      `POST namespaces sent , request:  ${JSON.stringify(requestData)}`
    );
    return HttpResponse.json({
      namespace: "namespace",
    });
  }),
];

const secretsHandlers: HttpHandler[] = [
  http.post(`${API_URL}/:namespace/secrets`, ({ request, params }) => {
    console.log(`POST secret sent, params: ${params} , request: ${request}`);
    return HttpResponse.json({
      namespace: "string",
      type: "string",
      name: "string",
    });
  }),
  http.get(`${API_URL}/secrets`, ({ params }) => {
    console.log(`GET secrets sent, params: ${params}`);
    return HttpResponse.json({
      count: 1,
      secrets: [
        {
          name: "string",
          type: "string",
          namespace: "string",
        },
      ],
    });
  }),
  http.get(`${API_URL}/todos`, async ({ params }) => {
    const requestParams = await params;

    console.log(`GET todos sent, params: ${JSON.stringify(requestParams)}`);
    return HttpResponse.json([{ id: 1, title: "hi" }]);
  }),
  http.post(`${API_URL}/todos`, async ({ request }) => {
    const requestData = await request.json();
    console.log(`POST todos sent , request:  ${JSON.stringify(requestData)}`);
    return HttpResponse.json({
      id: 1,
      title: "hi",
    });
  }),
  http.put(`${API_URL}/:namespace/secrets/:name`, ({ request, params }) => {
    console.log(`POST secret sent, params: ${params} , request: ${request}`);
    return HttpResponse.json({
      namespace: "string",
      type: "string",
      name: "string",
    });
  }),
];

const authHandlers: HttpHandler[] = [
  http.post(`${API_URL}/login`, async ({ request }) => {
    const token = request.headers.get("Authorization");
    if (!token) {
      return HttpResponse.json(
        { message: "unauthorized user" },
        { status: 401 }
      );
    }
    const base64UserCreds = token.split(" ")[1];
    const userCreds = atob(base64UserCreds);
    const username = userCreds.split(":")[0];

    console.log(username + " logged in!");
    return HttpResponse.json({
      token: "bbsssisqsoiqoiiihbcbbbdwwwwwwwnnnwwwnmnsskksks",
    });
  }),
];

export const handlers: HttpHandler[] = [
  ...containersHandlers,
  ...secretsHandlers,
  ...authHandlers,
  ...namespacesHandlers,
  ...projectsHandlers,
  ...hierarchiesHandlers,
  ...applicationHandlers,
  http.get("/posts", () => {
    console.log('Captured a "GET /posts" request');
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
  http.get("https://example.com/namespace/secrets", () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.post("/resource", async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");

    console.log(email);
    if (email !== "test@example.com") {
      return HttpResponse.json({ success: false }, { status: 401 });
    }

    return HttpResponse.json({ success: true });
  }),
];
