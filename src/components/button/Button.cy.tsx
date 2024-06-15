import "@index.css";
import Button from "./Button";
import { ButtonVariants } from "./buttonStyles";

describe("Button component", () => {
  const buttonText = "Click me";
  const icon = <span className="icon">Icon</span>;

  const variants: ButtonVariants[] = [
    "primary",
    "secondary",
    "link",
  ];

  variants.forEach((variant) => {
    it(`should render ${variant} button correctly`, () => {
      cy.mount(<Button variant={variant}>{buttonText}</Button>);
      cy.get("button").contains(buttonText).should("be.visible");
    });
  });

  it("should render button with icon on the left", () => {
    cy.mount(
      <Button variant="primary" icon={icon} iconPosition="left">
        {buttonText}
      </Button>,
    );
    cy.get("button").contains(buttonText).should("be.visible");
    cy.get(".icon-left").should("be.visible");
  });

  it("should render button with icon on the right", () => {
    cy.mount(
      <Button variant="primary" icon={icon} iconPosition="right">
        {buttonText}
      </Button>,
    );
    cy.get("button").contains(buttonText).should("be.visible");
    cy.get(".icon-right").should("be.visible");
  });

  it("should render button with icon on the top", () => {
    cy.mount(
      <Button variant="primary" icon={icon} iconPosition="top">
        {buttonText}
      </Button>,
    );
    cy.get("button").contains(buttonText).should("be.visible");
    cy.get(".icon-top").should("be.visible");
  });

  it("should render button with icon on the bottom", () => {
    cy.mount(
      <Button variant="primary" icon={icon} iconPosition="bottom">
        {buttonText}
      </Button>,
    );
    cy.get("button").contains(buttonText).should("be.visible");
    cy.get(".icon-bottom").should("be.visible");
  });

  it("should call onClick when button is clicked", () => {
    const onClick = cy.stub().as("onClick");
    cy.mount(
      <Button variant="primary" onClick={onClick}>
        {buttonText}
      </Button>,
    );
    cy.get("button").click();
    cy.get("@onClick").should("have.been.calledOnce");
  });

  it("should not call onClick when button is disabled", () => {
    const onClick = cy.stub().as("onClick");
    cy.mount(
      <Button variant="primary" onClick={onClick} disabled={true}>
        {buttonText}
      </Button>,
    );
    cy.get("button").should("be.disabled");
    cy.get("button").click({ force: true });
    cy.get("@onClick").should("not.have.been.called");
  });
});