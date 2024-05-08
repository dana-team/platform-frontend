import "@index.css";
import Typography, { TypographyVariants, TypographyTags } from "./Typography";

describe("Typography component", () => {
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

  it("renders children correctly", () => {
    cy.mount(<Typography>Hello, world!</Typography>);
    cy.get("body").contains("Hello, world!").should("exist");
  });

  it("renders with default tag 'p' if not specified", () => {
    cy.mount(<Typography>Hello, world!</Typography>);
    cy.get("p").contains("Hello, world!").should("exist");
  });

  typographyOptions.forEach((variant, index) => {
    it(`applies correct default styles for ${variant} typography variant`, () => {
      cy.mount(<Typography>Paragraph</Typography>);
      cy.contains("Paragraph").should("not.have.class", `text-${variant}`);

      cy.mount(<Typography variant={variant}>Heading {index}</Typography>);
      cy.contains(`Heading ${index}`).should("have.class", `text-${variant}`);
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
      cy.mount(<Typography as={tag}>Heading {index}</Typography>);
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
