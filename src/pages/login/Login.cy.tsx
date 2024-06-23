import "@/index.css";
import Login from "./Login";
import { APP_NAME } from "@/common/consts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Login Component", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
  });

  it("renders login modal with correct elements", () => {
    cy.contains(APP_NAME).should("be.visible");
    cy.contains(`Login to ${APP_NAME}`).should("be.visible");

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
