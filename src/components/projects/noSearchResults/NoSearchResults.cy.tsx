import "@index.css";
import NoSearchResults from "./NoSearchResults";

describe("NoSearchResults Component", () => {
  beforeEach(() => {
    cy.mount(<NoSearchResults className="w-80" search="project" />);
  });

  it("renders no results message correctly", () => {
    cy.contains("No Results Found for: project").should("exist");
    cy.contains(
      "We couldn't find any results matching your search criteria. Try adjusting"
    ).should("exist");
    cy.contains("your search terms or filters.").should("exist");
  });
});
