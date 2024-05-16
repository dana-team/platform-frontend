/// <reference types="vite-plugin-svgr/client" />

import AppsOverview from "../../../assets/apps_overview.svg?react";
import SidebarItem from "./SidebarItem";
import "src/App.css";

describe("SidebarItem", () => {
  const item = { icon: <AppsOverview />, label: "Applications" };
  const isSidebarExpanded = true;
  const selectedOption = null;

  beforeEach(() => {
    cy.mount(
      <SidebarItem
        item={item}
        isSidebarExpanded={isSidebarExpanded}
        selectedOption={selectedOption}
        onOptionSelect={cy.stub()}
      />
    );
  });

  it("renders correctly", () => {
    cy.contains(item.label).should("exist");
    cy.get(".h-11").should("exist");
  });
});
