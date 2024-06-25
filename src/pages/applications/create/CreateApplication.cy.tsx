import "@/index.css";
import CreateApplication from "./CreateApplication";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const steps = [
  "Import application",
  "Configure application",
  "Deploy application",
];
describe("CreateApplication Component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    const projectName = "Test Project";

    cy.mount(
      <QueryClientProvider client={queryClient}>
        <CreateApplication projectName={projectName} />
      </QueryClientProvider>
    );
  });

  it("renders the CreateApplication component correctly", () => {
    cy.contains("Add new application").should("exist");
    cy.contains("Test Project").should("exist");
  });

  it("renders the steps correctly", () => {
    steps.forEach((step) => {
      cy.contains(step).should("exist");
    });
  });

  it("displays the project name correctly", () => {
    cy.contains("Test Project").should("exist");
  });
});
