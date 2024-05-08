import "@index.css";
import Projects from "./Projects";
import { TestRouter } from "cypress/TestRouter.js";
import { APP_NAME } from "@common/consts";

describe("Projects Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Projects />
      </TestRouter>
    );
  });

  it("renders the Header", () => {
    cy.contains(APP_NAME).should("be.visible");
  });

  it("has the correct structure with header and main content", () => {
    cy.get(".h-screen").should("exist");
    cy.get(".h-17").should("exist");
    cy.get(".w-full.h-full.flex").should("exist");
  });
});
