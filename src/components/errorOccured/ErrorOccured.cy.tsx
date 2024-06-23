import "@index.css";
import ErrorOccuredModal from "./ErrorOccured";

describe("ErrorOccuredModal component", () => {
  const error = "Error Occurred";
  const details = "Detailed error message";

  beforeEach(() => {
    const setShowModal = cy.stub().as("setShowModal");

    cy.mount(
      <ErrorOccuredModal
        setShowModal={setShowModal}
        error={error}
        details={details}
      />
    );
  });

  it("should render the error modal correctly", () => {
    cy.get("p").contains(error).should("exist");
    cy.get("p").contains(details).should("exist");
    cy.get("p")
      .contains("Please check your connectivity or try again in a few moments.")
      .should("exist");

    cy.get("button").contains("Close").should("exist");
  });

  it("should close the modal when clicking the Close button", () => {
    cy.get("button").contains("Close").click();
    cy.get("@setShowModal").should("have.been.calledOnce");
  });

  it("should close the modal when clicking the Close icon", () => {
    cy.get("svg").first().click();
    cy.get("@setShowModal").should("have.been.calledOnce");
  });
});
