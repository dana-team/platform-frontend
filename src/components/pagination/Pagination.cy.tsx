import "@index.css";
import Pagination from "./Pagination";
import Sinon from "node_modules/cypress/types/sinon";

describe("Pagination Component", () => {
  const totalCount = 50;
  const pageSize = 10;
  const siblingCount = 1;
  const isPlaceholderData = false;
  let onPageChange: Cypress.Agent<Sinon.SinonStub<unknown[], unknown>>;

  const mountPagination = (currentPage: number) => {
    onPageChange = cy.stub();

    cy.mount(
      <Pagination
        onPageChange={onPageChange}
        totalCount={totalCount}
        siblingCount={siblingCount}
        currentPage={currentPage}
        pageSize={pageSize}
        isPlaceholderData={isPlaceholderData}
      />
    );
  };

  it("renders pagination buttons correctly", () => {
    mountPagination(1);
    cy.get("button.chevron-left").should("be.disabled");
    cy.get("button.chevron-right").should("not.be.disabled");
    cy.get("div").contains("1").should("have.class", "bg-mono/basic-8");
    cy.get("div").contains("2").should("not.have.class", "bg-mono/basic-8");
  });

  it("disables the previous button on the first page", () => {
    mountPagination(1);
    cy.get("button.chevron-left").should("be.disabled");
  });

  it("disables the next button on the last page", () => {
    mountPagination(5);
    cy.get("button.chevron-right").should("be.disabled");
  });

  it("calls onPageChange with the correct page number when a page number is clicked", () => {
    mountPagination(1);
    cy.get("div").contains("2").click();
    cy.wrap(onPageChange).should("be.calledWith", 2);
  });

  it("calls onPageChange with the correct page number when the next button is clicked", () => {
    mountPagination(1);
    cy.get("button.chevron-right").click();
    cy.wrap(onPageChange).should("be.calledWith", 2);
  });

  it("calls onPageChange with the correct page number when the previous button is clicked", () => {
    mountPagination(2);
    cy.get("button.chevron-left").click();
    cy.wrap(onPageChange).should("be.calledWith", 1);
  });

  it("renders dots for pagination range correctly", () => {
    const newTotalCount = 100;
    const newPageSize = 10;
    cy.mount(
      <Pagination
        onPageChange={onPageChange}
        totalCount={newTotalCount}
        siblingCount={siblingCount}
        currentPage={5}
        pageSize={newPageSize}
        isPlaceholderData={isPlaceholderData}
      />
    );
    cy.get(".dots").should("exist");
  });

  it("does not render pagination if currentPage is 0 or paginationRange length is less than 2", () => {
    mountPagination(0);
    cy.get("button").should("not.exist");

    cy.mount(
      <Pagination
        onPageChange={onPageChange}
        totalCount={10}
        siblingCount={siblingCount}
        currentPage={1}
        pageSize={pageSize}
        isPlaceholderData={isPlaceholderData}
      />
    );
    cy.get("button").should("not.exist");
  });
});
