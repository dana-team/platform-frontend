import "@index.css";
import Row from "./Row";
import { MenuItem } from "@components/menu/items";
import { TestRouter } from "cypress/TestRouter.js";

const menuItems: MenuItem[] = [
  { label: "View Applications" },
  { label: "Members" },
  { label: "Secrets" },
  { label: "Settings" },
];

describe("Row Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Row menuItems={menuItems}>row</Row>
      </TestRouter>
    );
  });

  it("renders Row correctly", () => {
    cy.get("svg").eq(0).should("exist"); // InformationCircle
    cy.get("svg").eq(1).should("exist"); // MoreInfoDots
  });

  it("displays menu items when MoreInfoDots is clicked", () => {
    cy.get("svg").eq(1).click();
    cy.get(".cursor-pointer").should("exist");

    cy.get(".cursor-pointer").should("have.length", menuItems.length + 1);

    menuItems.forEach(({ label }) => {
      cy.contains(label).should("exist");
    });
  });

  it("closes menu when MoreInfoDots is clicked again", () => {
    cy.get("svg").eq(1).click();
    cy.get("svg").eq(1).click();

    menuItems.forEach(({ label }) => {
      cy.contains(label).should("not.exist");
    });
  });
});
