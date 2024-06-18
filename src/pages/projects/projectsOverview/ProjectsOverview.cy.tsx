import "@index.css";
import ProjectsOverview from "./ProjectsOverview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mount = () => {
  const queryClient = new QueryClient();

  cy.mount(
    <QueryClientProvider client={queryClient}>
      <ProjectsOverview />
    </QueryClientProvider>
  );
};
describe("ProjectsOverview Component", () => {
  it("renders ProjectsOverview correctly", () => {
    cy.intercept("GET", "/projects/1", {
      statusCode: 200,
      body: {
        containerNames: ["Project 1", "Project 2", "Project 3"],
      },
    });

    mount();
    cy.contains("Projects Overview").should("exist");
    cy.contains("Add new project").should("exist");
  });

  it("shows loading spinner", () => {
    cy.intercept("GET", "/projects/1", {
      statusCode: 400,
      body: {
        status: "failed",
      },
    });

    mount();
    cy.get(".w-12.h-12").should("exist");
  });

  it("shows no projects message when there are no projects", () => {
    cy.intercept("GET", "/projects/1", {
      statusCode: 200,
      body: {
        containerNames: [],
      },
    });
    mount();
    cy.contains("There are no existing projects").should("exist");
    cy.contains("Add your first project").should("exist");
  });

  it("opens AddProjectModal when 'Add new project' is clicked", () => {
    cy.intercept("GET", "/projects/1*", {
      statusCode: 200,
      body: {
        containerNames: [],
      },
    });

    mount();
    cy.contains("Add new project").click();
    cy.get(".h-85.w-150").should("exist");
  });
});
