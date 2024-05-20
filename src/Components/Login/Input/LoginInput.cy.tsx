import LoginInput from "./LoginInput";
import "src/index.css";

// add asserts for border
describe("LoginInput Component", () => {
  it("renders input correctly with label", () => {
    const label = "Username";
    const placeholder = "Insert username...";
    const value = "";
    const setValue = cy.stub().as("setValue");
    cy.mount(
      <LoginInput
        label={label}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        error=""
      />
    );
    cy.contains(label).should("exist");
    cy.get("input").should("have.attr", "placeholder", placeholder);
  });

  it("updates value correctly", () => {
    const label = "Username";
    const placeholder = "Insert username...";
    const initialValue = "";
    const newValue = "testuser";
    const setValue = cy.stub().as("setValue");
    cy.mount(
      <LoginInput
        label={label}
        placeholder={placeholder}
        value={initialValue}
        setValue={setValue}
        error=""
      />
    );
    cy.get("input").type(newValue);
    cy.get("@setValue").should("have.been.calledWith", newValue);
  });

  it("displays error message correctly", () => {
    const label = "Username";
    const placeholder = "Insert username...";
    const error = "Invalid username";
    const setValue = cy.stub().as("setValue");
    cy.mount(
      <LoginInput
        label={label}
        placeholder={placeholder}
        value=""
        setValue={setValue}
        error={error}
      />
    );
    cy.contains(error).should("exist");
  });
});
