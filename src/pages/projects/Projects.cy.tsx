import "@index.css";
import Projects from "./Projects";
import { TestRouter } from "@TestRouter.js";
import { APP_NAME } from "@common/consts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Projects Component", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <QueryClientProvider client={queryClient}>
          <Projects />
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
