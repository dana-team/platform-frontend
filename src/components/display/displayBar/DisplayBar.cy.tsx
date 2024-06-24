import "@index.css";
import DisplayBar from "./DisplayBar";
import Button from "@components/button/Button";

describe("DisplayBar Component", () => {
  beforeEach(() => {
    const setSearch = cy.stub().as("setSearch");
    const setDisplayGrid = cy.stub().as("setDisplayGrid");

    cy.mount(
      <DisplayBar
        setSearch={setSearch}
        setDisplayGrid={setDisplayGrid}
        button={
          <Button variant="primary" className="max-h-min truncate">
            Add
          </Button>
        }
        isDisplayGrid={false}
        success={true}
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

  it("Sets search on input type", () => {
    cy.get("input").type("Hello, World");
    cy.contains("Add").click();
    cy.get("@setSearch").should("have.been.called");
  });
});
