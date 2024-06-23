import "@index.css";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
  it("renders Spinner correctly", () => {
    cy.mount(<Spinner />);
    cy.get(".rounded-full.animate-spin").should("exist");
  });
});
