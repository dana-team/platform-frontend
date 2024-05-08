import "@index.css";
import Input from "./Input";

describe("Input Component", () => {
  it("renders input with correct placeholder", () => {
    cy.mount(<Input type="text" placeholder="Enter text" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text");
  });

  it("updates value on change", () => {
    cy.mount(<Input type="text" placeholder="Enter text" />);

    cy.get("input").type("New Value");
    cy.get("input").should("have.value", "New Value");
  });

  it("registers ref", () => {
    const registerMock = cy.stub().as("register");

    cy.mount(
      <Input
        type="text"
        {...registerMock("username", {
          required: "username is required",
        })}
        placeholder="Enter text"
      />
    );

    cy.get("@register").should("have.been.calledWith", "username", {
      required: "username is required",
    });
  });

  it("toggles password visibility", () => {
    cy.mount(<Input type="password" placeholder="Password" />);

    cy.get("input").should("have.attr", "type", "password");
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "text");
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "password");
  });

  it("renders EyeOpen icon when password is hidden", () => {
    cy.mount(<Input type="password" placeholder="Password" />);
    cy.get("input").should("have.attr", "type", "password");
    cy.get(".cursor-pointer").find("svg").should("exist");
  });

  it("renders EyeClosed icon when password is visible", () => {
    cy.mount(<Input type="password" placeholder="Password" />);
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "text");
    cy.get(".cursor-pointer").find("svg").should("exist");
  });

  it("applies custom className", () => {
    cy.mount(
      <Input type="text" placeholder="Enter text" className="custom-class" />
    );
    cy.get("div").should("have.class", "custom-class");
  });
});
