import "@index.css";
import ProjectRow from "./ProjectRow";
import { TestRouter } from "cypress/TestRouter.js";

const menuItems = [
  { label: "view applications" },
  { label: "members" },
  { label: "secrets" },
  { label: "divider" },
  { label: "settings" },
];

describe("ProjectRow Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <ProjectRow
          name="Project Name"
          hierarchy="Business Unit/Department/Team"
        />
      </TestRouter>
    );
  });

  it("renders project row correctly", () => {
    cy.mount(
      <ProjectRow
        name="Project Name"
        hierarchy="Business Unit/Department/Team"
      />
    );
    cy.contains("Project Name").should("exist");
    cy.contains("Business Unit/Department/Team").should("exist");
  });

  it("opens menu items correctly", () => {
    cy.get(".cursor-pointer").click();

    menuItems.map((item) => {
      if (item.label !== "divider") {
        cy.contains(item.label).should("exist");
      }
    });

    cy.get(".cursor-pointer.rounded-full").click();
    menuItems.map((item) => {
      if (item.label !== "divider") {
        cy.contains(item.label).should("not.exist");
      }
    });
  });
});
