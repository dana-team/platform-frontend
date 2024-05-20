import "src/App.css";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

describe("Breadcrumb Component", () => {
  const breadcrumb: BreadcrumbItem = {
    text: "Home",
    isDropdown: true,
    shouldAddDivider: true,
  };

  beforeEach(() => {
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
  });

  it("renders breadcrumb text", () => {
    const breadcrumb: BreadcrumbItem = { text: "Home" };
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
    cy.contains("Home").should("be.visible");
  });

  it("renders dropdown icon when isDropdown is true", () => {
    const breadcrumb: BreadcrumbItem = { text: "Menu", isDropdown: true };
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
    cy.get("svg").should("exist");
  });

  it("does not render dropdown icon when isDropdown is false", () => {
    const breadcrumb: BreadcrumbItem = { text: "Menu", isDropdown: false };
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
    cy.get("svg").should("not.exist");
  });

  it("renders divider when shouldAddDivider is true", () => {
    const breadcrumb: BreadcrumbItem = { text: "Menu", shouldAddDivider: true };
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
    cy.get("svg").should("have.length", 1);
  });

  it("does not render divider when shouldAddDivider is false", () => {
    const breadcrumb: BreadcrumbItem = {
      text: "Menu",
      shouldAddDivider: false,
    };
    cy.mount(<Breadcrumb breadcrumb={breadcrumb} />);
    cy.get("svg").should("have.length", 0);
  });
});
