import "@index.css";
import Menu from "./Menu";
import { TestRouter } from "cypress/TestRouter.js";
import { ReactNode } from "react";
import MenuItem from "./MenuItem";
import Typography from "@components/typography/Typography";
import Divider from "./Divider";

const menuItems: ReactNode = (
  <>
    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        Item 1
      </Typography>
    </MenuItem>

    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        Item 2
      </Typography>
    </MenuItem>
    <Divider />
    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        Item 3
      </Typography>
    </MenuItem>
  </>
);

describe("Menu Component", () => {
  let target: HTMLDivElement | null;

  beforeEach(() => {
    target = document.createElement("div");
    document.body.appendChild(target);

    cy.mount(
      <TestRouter>
        <Menu children={menuItems} isOpen={true} target={target} />
      </TestRouter>
    );
  });

  afterEach(() => {
    document.body.removeChild(target!);
  });

  it("Renders menu items", () => {
    cy.get("p").contains("Item 1").should("be.visible");
    cy.get("p").contains("Item 2").should("be.visible");
    cy.get("p").contains("Item 3").should("be.visible");
  });

  it("Renders divider correctly", () => {
    cy.get("div").find("svg").should("exist");
  });

  it("Does not render menu when isOpen is false", () => {
    cy.mount(
      <TestRouter>
        <Menu children={menuItems} isOpen={false} target={target} />
      </TestRouter>
    );
    cy.contains("Item 1").should("not.exist");
    cy.contains("Item 2").should("not.exist");
    cy.contains("Item 3").should("not.exist");
  });
});
