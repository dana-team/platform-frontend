import "@index.css";
import ApplicationsOverview from "./ApplicationsOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestRouter } from "cypress/TestRouter.tsx";

const projectName = "Project Name";

const mount = () => {
  const queryClient = new QueryClient();

  cy.mount(
    <TestRouter>
      <QueryClientProvider client={queryClient}>
        <ApplicationsOverview projectName={projectName} />
      </QueryClientProvider>
    </TestRouter>
  );
};
describe("ApplicationsOverview Component", () => {
  it("renders ApplicationsOverview correctly", () => {
    cy.intercept("GET", "v1/namespaces/capps/1", {
      statusCode: 200,
      body: [
        {
          capp: {
            metadata: { name: "test-capp1" },
            source: "test/test-image:latest",
          },
        },
        {
          capp: {
            metadata: { name: "test-capp2" },
            source: "test/test-image:latest",
          },
        },
        {
          capp: {
            metadata: { name: "test-capp3" },
            source: "test/test-image:latest",
            deployment: "test-dep",
          },
        },
      ],
    });
    mount();
    cy.contains(projectName).should("exist");
    cy.contains("Overview").should("exist");
    cy.contains("Add new application").should("exist");
  });
  it("shows loading spinner", () => {
    cy.intercept("GET", "/v1/namespaces/capps/1", {
      statusCode: 400,
      body: {
        status: "failed",
      },
    });
    mount();
    cy.get(".w-12.h-12").should("exist");
  });
  it("shows no application message when there are no application", () => {
    cy.intercept("GET", "/v1/namespaces/capps/1", {
      statusCode: 200,
      body: {},
    });
    mount();
    cy.contains("There are no existing apps in this project yet").should(
      "exist"
    );
    cy.contains("Add an app to this project").should("exist");
  });
});
