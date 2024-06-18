import "@index.css";
import AddProjectModal from "./AddProjectModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("AddProjectModal Component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    const setShowModal = cy.stub().as("setShowModal");
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <AddProjectModal setShowModal={setShowModal} />
      </QueryClientProvider>
    );
  });

  it("should render correctly", () => {
    cy.intercept("GET", "/hierarchies*", {
      statusCode: 201,
      body: {
        hierarchies: ["Business Unit A / Department A / Team A"],
      },
    });

    cy.contains("Business Unit A / Department A / Team A").should("exist");
  });

  it("displays loading spinner", () => {
    cy.get(".h-12.w-12").should("exist");
  });

  it("closes the modal when the close icon is clicked", () => {
    cy.intercept("GET", "/hierarchies*", {
      statusCode: 201,
      body: {
        hierarchies: ["Business Unit A / Department A / Team A"],
      },
    });
    cy.get("svg").first().click();
    cy.get("@setShowModal").should("have.been.calledOnce");
  });
});
