import "@index.css";
import Row from "./Row";
import { TestRouter } from "cypress/TestRouter.js";
import { ReactNode } from "react";
import MenuItem from "@components/menu/MenuItem";
import Typography from "@components/typography/Typography";

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

describe("Row Component", () => {
  beforeEach(() => {
    cy.mount(
      <TestRouter>
        <Row menuChildren={menuItems}>row</Row>
      </TestRouter>
    );
  });

  it("renders Row correctly", () => {
    cy.get("svg").eq(0).should("exist"); // InformationCircle
    cy.get("svg").eq(1).should("exist"); // MoreInfoDots
  });

  it("displays menu items when MoreInfoDots is clicked", () => {
    cy.get("svg").eq(1).click();
    cy.get(".cursor-pointer").should("exist");

    cy.get(".cursor-pointer").should("have.length", menuItemLabels.length + 1);

    menuItemLabels.forEach((label) => {
      cy.contains(label).should("exist");
    });
  });

  it("closes menu when MoreInfoDots is clicked again", () => {
    cy.get("svg").eq(1).click();
    cy.get("svg").eq(1).click();

    menuItemLabels.forEach((label) => {
      cy.contains(label).should("not.exist");
    });
  });
});
