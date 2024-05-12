import Typography from "./Typography";
import "src/App.css";

describe("Typography component", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
  });

  it("renders children correctly", () => {
    cy.mount(<Typography>Hello, world!</Typography>);
    cy.get("body").contains("Hello, world!").should("exist");
  });

  it("renders with default tag 'p' if not specified", () => {
    cy.mount(<Typography>Hello, world!</Typography>);
    cy.get("p").contains("Hello, world!").should("exist");
  });

  it("applies correct default styles for each typography variant", () => {
    cy.mount(
      <Typography tag="h1" variant="h1">
        Heading 1
      </Typography>
    );
    cy.get("h1")
      .contains("Heading 1")
      .should("have.class", "font-bold text-2xl");

    cy.mount(
      <Typography tag="h2" variant="h2">
        Heading 2
      </Typography>
    );
    cy.get("h2")
      .contains("Heading 2")
      .should("have.class", "font-bold text-xl");

    cy.mount(
      <Typography tag="h3" variant="h3">
        Heading 3
      </Typography>
    );
    cy.get("h3")
      .contains("Heading 3")
      .should("have.class", "font-bold text-lg");

    cy.mount(
      <Typography tag="h4" variant="h4">
        Heading 4
      </Typography>
    );
    cy.get("h4")
      .contains("Heading 4")
      .should("have.class", "font-bold text-base");

    cy.mount(
      <Typography tag="h5" variant="h5">
        Heading 5
      </Typography>
    );
    cy.get("h5")
      .contains("Heading 5")
      .should("have.class", "font-bold text-sm");

    cy.mount(
      <Typography tag="h6" variant="h6">
        Heading 6
      </Typography>
    );
    cy.get("h6")
      .contains("Heading 6")
      .should("have.class", "font-bold text-xs");

    cy.mount(<Typography variant="p">Paragraph</Typography>);
    cy.get("p").contains("Paragraph").should("have.class", "font-normal");
  });

  it("applies additional class names passed via className prop", () => {
    cy.mount(<Typography className="custom-class">Custom text</Typography>);
    cy.get(".custom-class").contains("Custom text").should("exist");
  });
});
