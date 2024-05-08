import "@index.css";
import Card from "./Card";
import { MenuItem } from "@components/menu/items"; // Replace with actual import path
import { TestRouter } from "cypress/TestRouter.js";

describe("Card Component", () => {
  const menuItems: MenuItem[] = [
    { label: "Option 1", path: "/option1" },
    { label: "Option 2", path: "/option2" },
    { label: "Option 3", path: "/option3" },
  ];

  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Card menuItems={menuItems}>
          <div data-testid="test-child">Test Content</div>
        </Card>
      </TestRouter>
    );
  });

  it("Renders with child content", () => {
    cy.get("[data-testid=test-child]").should("be.visible");
  });

  it("Toggles menu on click", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".w-56").should("be.visible");
  });

  it("Renders menu items correctly", () => {
    cy.get(".cursor-pointer").click();
    menuItems.forEach((item) => {
      cy.contains(item.label).should("exist");
    });
  });

  it("Closes menu on clicking again", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".w-56").should("be.visible");
    cy.get(".cursor-pointer.rounded-full").click();
    cy.get(".w-56").should("not.exist");
  });

  menuItems.map((value) => {
    it(`Handles menu item click on ${value.label}`, () => {
      cy.get(".cursor-pointer").click();
      cy.contains(value.label).click();
      cy.url().should("include", value.path?.slice(1));
    });
  });
});
