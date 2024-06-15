/// <reference types="vite-plugin-svgr/client" />
import "@index.css";
import AppsOverview from "@assets/apps_overview.svg?react";
import SidebarItem from "./SidebarItem";

describe("SidebarItem", () => {
  const item = { icon: <AppsOverview />, label: "Applications", path: "/" };
  const isSidebarExpanded = true;
  const selectedOption = true;

  beforeEach(() => {
    cy.mount(
      <SidebarItem
        item={item}
        isSidebarExpanded={isSidebarExpanded}
        selectedOption={selectedOption}
      />
    );
  });

  it("renders correctly", () => {
    cy.contains(item.label).should("exist");
    cy.get(".h-11").should("exist");
  });
});
