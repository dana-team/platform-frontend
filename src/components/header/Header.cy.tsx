import "@index.css";
import { BreadcrumbItem } from "./breadcrumb/Breadcrumb";
import Header from "./Header";
import { APP_NAME } from "@common/consts";

const breadcrumbs: BreadcrumbItem[] = [
  { text: "Home", isDropdown: false, shouldAddDivider: false },
  { text: "Dashboard", isDropdown: false, shouldAddDivider: false },
];
const user = "Israel Israeli";

describe("Header Component", () => {
  beforeEach(() => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);
  });

  it("renders header with breadcrumbs and user info", () => {
    cy.contains(APP_NAME).should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Israel Israeli").should("be.visible");
  });

  it("renders user thumbnail", () => {
    cy.get("svg").should("have.length", 3); // AppIcon, ArrowDown, and user thumbnail
  });

  it("renders breadcrumbs correctly", () => {
    cy.get("nav").within(() => {
      cy.contains("Home").should("be.visible");
      cy.contains("Dashboard").should("be.visible");
    });
  });

  it("loads and displays user thumbnail dynamically", () => {
    cy.get(".relative").within(() => {
      cy.get("svg").should("exist");
    });
  });
});
