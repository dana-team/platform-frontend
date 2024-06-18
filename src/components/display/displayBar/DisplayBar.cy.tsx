import "@index.css";
import DisplayBar from "./DisplayBar";

describe("DisplayBar Component", () => {
  beforeEach(() => {
    const setSearch = cy.stub().as("setSearch");
    const setDisplayGrid = cy.stub().as("setDisplayGrid");
    const setShowModal = cy.stub().as("setShowModal");

    cy.mount(
      <DisplayBar
        setSearch={setSearch}
        setDisplayGrid={setDisplayGrid}
        setShowModal={setShowModal}
        isDisplayGrid={false}
        success={true}
        button="Add"
      />
    );
  });

  it("Renders search box", () => {
    cy.get(
      'input[placeholder="Search repositories and applications..."]'
    ).should("be.visible");
  });

  it("Toggles display grid on click", () => {
    cy.get(".rounded-l-lg").click();
    cy.get("@setDisplayGrid").should("have.been.calledOnce");
  });

  it("Toggles display list on click", () => {
    cy.get(".rounded-r-lg").click();
    cy.get("@setDisplayGrid").should("have.been.calledOnce");
  });

  it("Opens modal on add button click", () => {
    cy.contains("Add").click();
    cy.get("@setShowModal").should("have.been.calledOnce");
  });

  it("Sets search on input type", () => {
    cy.get("input").type("Hello, World");
    cy.contains("Add").click();
    cy.get("@setSearch").should("have.been.called");
  });
});
