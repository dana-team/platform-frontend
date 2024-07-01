import "@index.css";
import ProjectCard from "./ProjectCard";
import { TestRouter } from "cypress/TestRouter.js";

const projectName = "Project Name";
//FYI: becuase the menu items have the 'text-capitalize text propery they appear capitalized even though in the DOM they are lowercase
const menuItems = [
  { label: "View Applications" },
  { label: "Members" },
  { label: "Secrets" },
  { label: "divider" },
  { label: "Settings" },
];

describe("ProjectCard Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <ProjectCard
          name={projectName}
          hierarchy="Business Unit/Department/Team"
        />
      </TestRouter>
    );
  });

  it("renders project card correctly", () => {
    cy.contains(projectName).should("exist");
    cy.contains("Business Unit/Department/Team").should("exist");
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
