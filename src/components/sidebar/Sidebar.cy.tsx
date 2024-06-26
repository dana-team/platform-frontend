import "@index.css";
import SideBar from "./Sidebar";
import { sidebarItems } from "./items";
import { TestRouter } from "cypress/TestRouter.js";

describe("SideBar component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <SideBar currentPath="/projects/myproject" />
      </TestRouter>
    );
  });

  it("renders sidebar items correctly", () => {
    sidebarItems.forEach((item) => {
      cy.get(`:contains(${item.label})`).should("exist");
    });
  });

  it("expands/collapses sidebar on click", () => {
    cy.get("div.w-65").should("exist");

    cy.get(".flex-none").then(($el) => {
      const { left, right, top, bottom } = $el[0].getBoundingClientRect();
      const width = right - left;
      const height = bottom - top;
      const innerWidth = $el[0].clientWidth;
      const innerHeight = $el[0].clientHeight;
      const paddingLeft = (width - innerWidth) / 2;
      const paddingTop = (height - innerHeight) / 2;

      // Click on the padding area
      cy.get(".flex-none").dblclick(paddingLeft, paddingTop);
    });

    cy.get("div.w-18").should("exist");

    cy.get(".flex-none").then(($el) => {
      const { left, right, top, bottom } = $el[0].getBoundingClientRect();
      const width = right - left;
      const height = bottom - top;
      const innerWidth = $el[0].clientWidth;
      const innerHeight = $el[0].clientHeight;
      const paddingLeft = (width - innerWidth) / 2;
      const paddingTop = (height - innerHeight) / 2;

      cy.get(".flex-none").dblclick(paddingLeft, paddingTop);
    });

    cy.get("div.w-65").should("exist");
  });

  it("stops click event propagation on sidebar item click", () => {
    cy.get("div.w-65").should("exist");
    cy.get("div.cursor-pointer").first().click({ force: true });
    cy.get("div.w-65").should("exist");
  });
});
