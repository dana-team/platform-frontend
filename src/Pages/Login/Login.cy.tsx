import "src/index.css";
import Login from "./Login";

describe("Login Component", () => {
  beforeEach(() => {
    cy.mount(<Login />);
  });

  it("renders login modal with correct elements", () => {
    cy.contains("RCS Amplify").should("be.visible");
    cy.contains("Login to RCS Amplify").should("be.visible");

    cy.get('input[placeholder="Insert username..."]').should("exist");
    cy.get('input[placeholder="Insert password..."]').should("exist");
    cy.contains("Login").should("be.visible");
  });

  it("allows username input", () => {
    cy.get('input[placeholder="Insert username..."]').type("testuser");
    cy.get('input[placeholder="Insert username..."]').should(
      "have.value",
      "testuser"
    );
  });

  it("allows password input", () => {
    cy.get('input[placeholder="Insert password..."]').type("password123");
    cy.get('input[placeholder="Insert password..."]').should(
      "have.value",
      "password123"
    );
  });

  it.skip("shows errors when login fails", () => {
    cy.get('input[placeholder="Insert username..."]').type("testuser");
    cy.get('input[placeholder="Insert password..."]').type("wrongpassword");
    cy.contains("Login").click();

    cy.contains("Username is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });
});
