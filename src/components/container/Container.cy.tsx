import "@index.css";
import BackgroundContainer from "./Container";

describe("Container Component", () => {
  it("renders the Container component correctly", () => {
    cy.mount(<BackgroundContainer>container</BackgroundContainer>);

    cy.get(
      "div.grow.h-full.min-w-0.bg-cover.bg-no-repeat.bg-login-pattern"
    ).should("exist");
    cy.get("div.bg-opacity-90").should("exist");
    cy.get("div.flex").should("exist");
  });

  it("renders children correctly", () => {
    cy.mount(
      <BackgroundContainer>
        <p data-testid="child">Test Child</p>
      </BackgroundContainer>
    );

    cy.get('[data-testid="child"]')
      .should("exist")
      .and("contain.text", "Test Child");
  });
});
