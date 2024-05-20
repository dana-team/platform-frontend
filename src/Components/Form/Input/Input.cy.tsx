import "src/App.css";
import Input from "./Input";

describe("Input Component", () => {
  it("renders input with correct placeholder", () => {
    cy.mount(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    );
    cy.get("input").should("have.attr", "placeholder", "Enter text");
  });

  it("updates value on change", () => {
    const handleChange = cy.stub().as("handleChange");
    cy.mount(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={handleChange}
      />
    );

    cy.get("input").type("New Value");
    cy.get("@handleChange").should("have.been.calledWith", "New Value");
  });

  it("toggles password visibility", () => {
    cy.mount(
      <Input
        type="password"
        placeholder="Password"
        value="secret"
        onChange={() => {}}
      />
    );

    cy.get("input").should("have.attr", "type", "password");
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "text");
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "password");
  });

  it("renders EyeOpen icon when password is hidden", () => {
    cy.mount(
      <Input
        type="password"
        placeholder="Password"
        value="secret"
        onChange={() => {}}
      />
    );
    cy.get("input").should("have.attr", "type", "password");
    cy.get(".cursor-pointer").find("svg").should("exist");
  });

  it("renders EyeClosed icon when password is visible", () => {
    cy.mount(
      <Input
        type="password"
        placeholder="Password"
        value="secret"
        onChange={() => {}}
      />
    );
    cy.get(".cursor-pointer").click();
    cy.get("input").should("have.attr", "type", "text");
    cy.get(".cursor-pointer").find("svg").should("exist");
  });

  it("applies custom className", () => {
    cy.mount(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        className="custom-class"
      />
    );
    cy.get("input").should("have.class", "custom-class");
  });
});
