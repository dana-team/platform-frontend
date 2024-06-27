import "@index.css";
import ColorModal from "./ColorModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Card Component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    const setShowModal = cy.stub().as("setShowModal");
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <ColorModal setShowModal={setShowModal} />
      </QueryClientProvider>
    );
  });

  it("displays svg icons correctly", () => {
    cy.get("svg").should("exist");
  });

  it("displays buttons", () => {
    cy.get("button").each((el) => {
      expect(el.text()).to.be.oneOf(["Save Changes", "Close"]);
    });
  });
  it("Calls setShowModal when Close button is pressed", () => {
    cy.contains("Close").click();
    cy.get("@setShowModal").should("have.been.calledOnce", "false");
  });
});
