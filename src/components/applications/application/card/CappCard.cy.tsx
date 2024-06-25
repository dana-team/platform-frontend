import "@index.css";
import CappCard from "./CappCard";
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

describe("CappCard Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <CappCard
          cappName={cappName}
          projectName={projectName}
          cappSource={source}
        />
      </TestRouter>
    );
  });

  it("renders capp card correctly", () => {
    cy.contains(cappName).should("exist");
    cy.contains(source).should("exist");
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
