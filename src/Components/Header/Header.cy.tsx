import "src/App.css";
import { BreadcrumbItem } from "./Breadcrumb/Breadcrumb";
import Header from "./Header";

describe("Header Component", () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { text: "Home", isDropdown: false, shouldAddDivider: false },
    { text: "Dashboard", isDropdown: false, shouldAddDivider: false },
  ];
  const user = { username: "Israel Israeli", thumbnail: 1 };

  it("renders header with breadcrumbs and user info", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.contains("RCS Amplify").should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Israel Israeli").should("be.visible");
  });

  it("renders user thumbnail", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get("svg").should("have.length", 3); // AppIcon, ArrowDown, and user thumbnail
  });

  it("renders breadcrumbs correctly", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get("nav").within(() => {
      cy.contains("Home").should("be.visible");
      cy.contains("Dashboard").should("be.visible");
    });
  });

  it("loads and displays user thumbnail dynamically", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get(".relative").within(() => {
      cy.get("svg").should("exist");
    });
  });
});
