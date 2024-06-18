import "@index.css";
import SearchBox from "./SearchBox";

describe("SearchBox Component", () => {
  it("renders SearchBox correctly", () => {
    cy.mount(<SearchBox placeholder="Search..." />);
    cy.get("input")
      .should("exist")
      .should("have.attr", "placeholder", "Search...");
  });

  it("handles disabled state correctly", () => {
    cy.mount(<SearchBox placeholder="Search..." disabled />);
    cy.get("input").should("be.disabled");

    cy.get("input")
      .should("have.class", "text-mono/basic-8")
      .should("have.class", "placeholder:text-mono/basic-8");
  });

  it("handles focus correctly", () => {
    cy.mount(<SearchBox placeholder="Search..." />);
    cy.get("input").click();
    cy.focused().should("exist");

    cy.get("input")
      .should("have.class", "group-focus-within:text-mono/basic-1")
      .should("not.have.class", "text-mono/basic-8")
      .should("not.have.class", "placeholder:text-mono/basic-8");
  });

  it("types into the input correctly", () => {
    cy.mount(<SearchBox placeholder="Search..." />);
    cy.get("input")
      .type("Cypress Testing")
      .should("have.value", "Cypress Testing");
  });
});
