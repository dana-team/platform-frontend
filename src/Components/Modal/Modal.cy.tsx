import Modal from "./Modal";
import "src/index.css";

describe("Modal Component", () => {
  it("renders children correctly", () => {
    const childText = "Test Child";
    cy.mount(<Modal children={childText} />);
    cy.contains(childText).should("exist");
  });

  it("closes modal on Escape key press if closeOnEscape prop is true", () => {
    const closeModalMock = cy.stub().as("closeModal");
    const childText = "Test Child";
    cy.mount(
      <Modal children={childText} setShowModal={closeModalMock} closeOnEscape />
    );
    cy.get("@closeModal").should("not.have.been.called");
    cy.get("body").trigger("keydown", { key: "Escape" });
    cy.get("@closeModal").should("have.been.calledOnceWith", false);
  });

  it("does not close modal on Escape key press if closeOnEscape prop is false", () => {
    const closeModalMock = cy.stub().as("closeModal");
    const childText = "Test Child";
    cy.mount(
      <Modal
        children={childText}
        setShowModal={closeModalMock}
        closeOnEscape={false}
      />
    );
    cy.get("@closeModal").should("not.have.been.called");
    cy.get("body").trigger("keydown", { key: "Escape" });
    cy.get("@closeModal").should("not.have.been.called");
  });
});
