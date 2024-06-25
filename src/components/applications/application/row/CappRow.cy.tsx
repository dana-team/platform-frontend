import "@index.css";
import CappRow from "./CappRow";
import { TestRouter } from "cypress/TestRouter.js";

const cappName = "Capp Name";
const projectName = "Project Name";
const source = "Source";
const menuItems = [
  { label: "Overview" },
  { label: "Deployments" },
  { label: "Logs" },
  { label: "Storage" },
  { label: "Terminal" },
  { label: "Integration" },
  { label: "Settings" },
];

describe("ProjectRow Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <CappRow
          cappName={cappName}
          projectName={projectName}
          cappSource={source}
        />
      </TestRouter>
    );
  });

  it("renders project row correctly", () => {
    cy.mount(
      <CappRow
        cappName={cappName}
        projectName={projectName}
        cappSource={source}
      />
    );
    cy.contains(cappName).should("exist");
    cy.contains(source).should("exist");
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
