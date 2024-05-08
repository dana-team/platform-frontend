import "@index.css";
import Select from "./Select";

describe("Select Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const label = "Select Label";
  const placeholder = "Select an option";
  const error = "This field is required";

  beforeEach(() => {
    cy.mount(
      <Select
        options={options}
        label={label}
        placeholder={placeholder}
        error={error}
      />
    );
  });

  it("Renders label correctly", () => {
    cy.get(".text-label-md").contains(label).should("be.visible");
  });

  it("Renders placeholder correctly", () => {
    cy.get("select").should("have.value", null);
    cy.get("select option").first().contains(placeholder).should("be.disabled");
  });

  it("Renders options correctly", () => {
    cy.get("select option").should("have.length", options.length + 1);
    options.forEach((option) => {
      cy.get("select option").contains(option).should("be.visible");
    });
  });

  it("Displays error message", () => {
    cy.get("select").focus().blur();
    cy.get("p").contains(error).should("be.visible");
  });

  it("Displays ArrowDown icon", () => {
    cy.get(".absolute").within(() => {
      cy.get("svg").should("be.visible");
    });
  });

  it("Applies correct classes when there is an error", () => {
    cy.get("select").should("have.class", "border-velvet/basic-5");
  });

  it("Applies correct classes when there is no error", () => {
    cy.mount(<Select options={options} placeholder={placeholder} />);
    cy.get("select").should("not.have.class", "border-velvet/basic-5");
    cy.get("select").should("have.class", "border-mono/basic-11");
  });

  it("Updates value when option is selected", () => {
    cy.get("select").select(options[1]);
    cy.get("select").should("have.value", options[1]);
  });
});
