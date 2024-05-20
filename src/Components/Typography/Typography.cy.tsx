import Typography, { TypographyVariants, TypographyTags } from "./Typography";
import "src/index.css";

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
    const typographyOptions: TypographyVariants[] = [
      "headline-xs",
      "headline-sm",
      "headline-lg",
      "headline-xl",
      "headline-md",
      "label-md",
      "body-md",
      "body-sm",
    ];

    typographyOptions.forEach((value, index) => {
      cy.mount(<Typography>Paragraph</Typography>);
      cy.contains("Paragraph").should("not.have.class", `text-${value}`);

      cy.mount(<Typography variant={value}>Heading {index}</Typography>);
      cy.contains(`Heading ${index}`).should("have.class", `text-${value}`);
    });
  });

  it("creates correct tag for each typography tag", () => {
    const typographyTags: TypographyTags[] = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "p",
    ];

    typographyTags.forEach((tag, index) => {
      cy.mount(<Typography tag={tag}>Heading {index}</Typography>);
      cy.get(tag).contains(`Heading ${index}`);
    });

    cy.mount(<Typography>Paragraph</Typography>);
    cy.get("p").contains("Paragraph");
  });

  it("applies additional class names passed via className prop", () => {
    cy.mount(<Typography className="custom-class">Custom text</Typography>);
    cy.get(".custom-class").contains("Custom text").should("exist");
  });
});
