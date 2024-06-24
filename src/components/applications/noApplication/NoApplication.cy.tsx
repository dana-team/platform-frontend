import "@index.css";
import NoApplications from "./NoApplication";
import { TestRouter } from "cypress/TestRouter";

const projectName = "Project Name";

describe("NoProjects Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <NoApplications className="w-80" projectName={projectName} />
      </TestRouter>
    );
  });

  it("renders no application message correctly", () => {
    cy.contains("There are no existing apps in this project yet").should(
      "exist"
    );
    cy.contains(
      "You can add new applications to this project using your GitLab"
    ).should("exist");
    cy.contains("repository, or import an app from Image").should("exist");
  });

  it("renders add application button", () => {
    cy.contains("Add an app to this project").should("exist");
  });
});
