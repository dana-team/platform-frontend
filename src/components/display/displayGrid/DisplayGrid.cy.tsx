import "@index.css";
import DisplayGrid from "./DisplayGrid";

const views = [
  { width: 550, columns: 1 },
  { width: 700, columns: 2 },
  { width: 1280, columns: 3 },
];

describe("DisplayGrid Component", () => {
  beforeEach(() => {
    cy.mount(
      <DisplayGrid>
        <div data-testid="grid-item-1">Grid Item 1</div>
        <div data-testid="grid-item-2">Grid Item 2</div>
        <div data-testid="grid-item-3">Grid Item 3</div>
      </DisplayGrid>
    );
  });

  it("Renders grid items", () => {
    cy.get("[data-testid=grid-item-1]").should("be.visible");
    cy.get("[data-testid=grid-item-2]").should("be.visible");
    cy.get("[data-testid=grid-item-3]").should("be.visible");
  });

  views.map((view) => {
    it(`Displays ${view.columns} columns`, () => {
      cy.viewport(view.width, 720);

      cy.get(".grid").then(($grid) => {
        const gridWidth: number | undefined = $grid.width();
        const itemWidth: number | undefined = $grid
          .find("[data-testid^=grid-item]")
          .first()
          .width();

        if (gridWidth && itemWidth) {
          const numberOfColumns = Math.floor(gridWidth / itemWidth);

          expect(numberOfColumns).to.eq(view.columns);
        }
      });
    });
  });
});
