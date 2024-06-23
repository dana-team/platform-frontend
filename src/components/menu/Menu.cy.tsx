import "@index.css";
import Menu from "./Menu";
import { MenuItem } from "./items";
import { TestRouter } from "cypress/TestRouter.js";

describe("Menu Component", () => {
  const items: MenuItem[] = [
    { label: "Item 1", path: "/item1" },
    { label: "Item 2", path: "/item2" },
    { label: "divider" },
    { label: "Item 3", path: "/item3" },
  ];

  let target: HTMLDivElement | null;

  beforeEach(() => {
    target = document.createElement("div");
    document.body.appendChild(target);

    cy.mount(
      <TestRouter>
        <Menu items={items} isOpen={true} target={target} />
      </TestRouter>
    );
  });

  afterEach(() => {
    document.body.removeChild(target!);
  });

  it("Renders menu items", () => {
    cy.get("a").contains("Item 1").should("be.visible");
    cy.get("a").contains("Item 2").should("be.visible");
    cy.get("p").contains("Item 3").should("be.visible");
  });

  it("Renders divider correctly", () => {
    cy.get("div").find("svg").should("exist");
  });

  items.map((item) => {
    if (item.label !== "divider") {
      it(`Navigates to the ${item.path} path on click`, () => {
        cy.get("a").contains(item.label).click();
        cy.url().should("include", item.path);
      });
    }
  });

  it("Does not render menu when isOpen is false", () => {
    cy.mount(
      <TestRouter>
        <Menu items={items} isOpen={false} target={target} />
      </TestRouter>
    );
    cy.contains("Item 1").should("not.exist");
    cy.contains("Item 2").should("not.exist");
    cy.contains("Item 3").should("not.exist");
  });
});
