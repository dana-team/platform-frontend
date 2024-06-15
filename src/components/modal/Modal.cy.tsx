import "@index.css";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("renders children correctly", () => {
    const childText = "Test Child";
    cy.mount(<Modal>{childText}</Modal>);
    cy.contains(childText).should("exist");
  });
});
