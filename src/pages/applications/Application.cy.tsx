import "@index.css";
import Applications from "./Applications";
import { APP_NAME } from "@common/consts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestRouter } from "cypress/TestRouter";

describe("Application Component", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <QueryClientProvider client={queryClient}>
          <Applications />
        </QueryClientProvider>
      </TestRouter>
    );
  });

  it("renders the Header", () => {
    cy.contains(APP_NAME).should("be.visible");
  });

  it("has the correct structure with header and main content", () => {
    cy.get(".h-screen").should("exist");
    cy.get(".h-full").should("exist");
    cy.get(".w-full.flex").should("exist");
  });
});
