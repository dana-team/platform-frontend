import { http, HttpHandler, HttpResponse } from "msw";
import { API_URL } from "@common/consts";

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
  http.post(`${API_URL}/auth`, async ({ request }) => {
    const requestData = await request.json();
    console.log(`POST auth sent , request:  ${JSON.stringify(requestData)}`);
    return HttpResponse.json(
      {
        user: "Dana Israeli",
        token: "bbsssisqsoiqoiiihbcbbbdwwwwwwwnnnwwwnmnsskksks",
        message: "unauthorized user",
      }
      // { status: 401 }
    );
  }),
];

export const handlers: HttpHandler[] = [
  ...containersHandlers,
  ...secretsHandlers,
  ...authHandlers,
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
