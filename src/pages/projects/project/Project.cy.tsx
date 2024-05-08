import "@index.css";
import Project from "./Project";
import { TestRouter } from "cypress/TestRouter.js";

describe("Project Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Project />
      </TestRouter>
    );
  });

  it("renders the Sidebar", () => {
    cy.get("div.w-65").should("exist");
  });

  it("renders the Container component", () => {
    cy.get(
      "div.grow.h-full.min-w-0.bg-cover.bg-no-repeat.bg-login-pattern"
    ).should("exist");
  });
});
