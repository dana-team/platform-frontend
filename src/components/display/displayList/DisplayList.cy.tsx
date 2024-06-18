import "@index.css";
import DisplayList from "./DisplayList";

describe("DisplayList Component", () => {
  beforeEach(() => {
    cy.mount(
      <DisplayList>
        <div data-testid="list-item-1">List Item 1</div>
        <div data-testid="list-item-2">List Item 2</div>
        <div data-testid="list-item-3">List Item 3</div>
      </DisplayList>
    );
  });

  it("Renders list items", () => {
    cy.get("[data-testid=list-item-1]").should("be.visible");
    cy.get("[data-testid=list-item-2]").should("be.visible");
    cy.get("[data-testid=list-item-3]").should("be.visible");
  });

  it("Has correct flex direction", () => {
    cy.get(".flex-col").should("exist");
  });

  it("Expands to fill available space", () => {
    cy.get(".grow-0").should("exist");
    cy.get(".h-full").should("exist");
    cy.get(".w-full").should("exist");
  });
});
