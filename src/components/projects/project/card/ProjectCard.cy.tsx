import "@index.css";
import ProjectCard from "./ProjectCard";
import { TestRouter } from "cypress/TestRouter.js";

const projectName = "Project Name";
const menuItems = [
  { label: "view applications" },
  { label: "members" },
  { label: "secrets" },
  { label: "divider" },
  { label: "settings" },
];

describe("ProjectCard Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <ProjectCard name={projectName} anaf="Anaf" mador="Mador" />
      </TestRouter>
    );
  });

  it("renders project card correctly", () => {
    cy.contains(projectName).should("exist");
    cy.contains("Anaf | Mador").should("exist");
  });

  it("opens and closes menu items", () => {
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
