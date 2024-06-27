import "@index.css";
import UserPopover from "./UserPopover";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const testUser = "Test User";

describe("Card Component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    cy.mount(
      <QueryClientProvider client={queryClient}>
        <UserPopover user={testUser} />
      </QueryClientProvider>
    );
  });

  it("Toggles menu on click", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".rounded-md").should("be.visible");
  });

  it("Closes menu on clicking again", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".rounded-md").should("be.visible");
    cy.get(".cursor-pointer").click();
    cy.get(".rounded-md").should("not.exist");
  });
});
