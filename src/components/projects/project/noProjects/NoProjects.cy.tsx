import "@index.css";
import NoProjects from "./NoProjects";

describe("NoProjects Component", () => {
  beforeEach(() => {
    const setShowModal = cy.stub().as("setShowModal");
    cy.mount(<NoProjects className="w-80" setShowModal={setShowModal} />);
  });

  it("renders no projects message correctly", () => {
    cy.contains(
      "There are no existing projects associate with your account"
    ).should("exist");
    cy.contains(
      "You can add new applications to this project using your GitLab"
    ).should("exist");
    cy.contains("repository, or import app from Image").should("exist");
  });

  it("opens modal when 'Add the first project' button is clicked", () => {
    cy.contains("Add the first project").click();
    cy.get("@setShowModal").should("have.been.calledOnce");
  });
});
