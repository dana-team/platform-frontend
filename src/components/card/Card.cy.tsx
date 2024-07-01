import "@index.css";
import Card from "./Card";
import { TestRouter } from "cypress/TestRouter.js";
import MenuItem from "@components/menu/MenuItem";
import Typography from "@components/typography/Typography";
import { ReactNode } from "react";

const menuItemLabels = ["test", "test2"];

const menuItems: ReactNode = (
  <>
    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        test
      </Typography>
    </MenuItem>

    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        test2
      </Typography>
    </MenuItem>
  </>
);

describe("Card Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Card menuChildren={menuItems}>
          <div data-testid="test-child">Test Content</div>
        </Card>
      </TestRouter>
    );
  });

  it("Renders with child content", () => {
    cy.get("[data-testid=test-child]").should("be.visible");
  });

  it("Toggles menu on click", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".rounded-md.shadow-lg").should("be.visible");
  });

  it("Renders menu items correctly", () => {
    cy.get(".cursor-pointer").click();
    menuItemLabels.forEach((item) => {
      cy.contains(item).should("exist");
    });
  });

  it("Closes menu on clicking again", () => {
    cy.get(".cursor-pointer").click();
    cy.get(".rounded-md.shadow-lg").should("be.visible");
    cy.get(".cursor-pointer.rounded-full").click();
    cy.get(".rounded-md.shadow-lg").should("not.exist");
  });

  // menuItemLabels.map((value) => {
  //   it(`Handles menu item click on ${value}`, () => {
  //     cy.get(".cursor-pointer").click();
  //     cy.contains(value).click();
  //   });
  // });
});
