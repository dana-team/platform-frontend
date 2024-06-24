import "@/index.css";
import ImportApplication from "./ImportApplication";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("ImportApplication Component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    const setImage = cy.stub().as("setImage");
    const setNextStep = cy.stub().as("setNextStep");

    cy.mount(
      <QueryClientProvider client={queryClient}>
        <ImportApplication setImage={setImage} setNextStep={setNextStep} />
      </QueryClientProvider>
    );
  });

  it("renders the DockerIcon correctly", () => {
    cy.get("svg").should("exist");
  });

  it("renders the header and subheader texts correctly", () => {
    cy.contains("Import your code").should("exist");
    cy.contains("Import from image").should("exist");
    cy.contains(
      "Only images from public registries are currently supported"
    ).should("exist");
  });

  it("submits the form with a valid image name", () => {
    cy.get("input").type("valid-image-name:tag");
    cy.contains("import").click();
    cy.get("@setImage").should("have.been.calledWith", "valid-image-name:tag");
    cy.get("@setNextStep").should("have.been.calledOnce");
  });

  it("failes setting image and nextPage when image is empty", () => {
    cy.contains("import").click();
    cy.get("@setImage").should("not.have.been.calledOnce");
    cy.get("@setNextStep").should("not.have.been.calledOnce");
    cy.contains("image is required").should("exist");
  });
});
