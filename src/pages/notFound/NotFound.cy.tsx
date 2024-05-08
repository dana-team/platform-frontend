import "@/index.css";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  beforeEach(() => {
    cy.mount(<NotFound />);
  });

  it("renders the NotFound component correctly", () => {
    cy.get("h1").contains("404").should("exist");

    cy.contains("The page you are looking for may have been moved,").should(
      "exist",
    );
    cy.contains("deleted, or possibly never existed").should("exist");
  });

  it("ensures the background elements are rendered correctly", () => {
    cy.get("div.h-screen").first().should("have.class", "bg-mono/basic-15");

    cy.get("div.h-screen")
      .last()
      .should(
        "have.class",
        "bg-cover bg-no-repeat bg-login-pattern opacity-20",
      );
  });
});
