import "@index.css";
import { useState } from "react";
import ShowHideInput from "./ShowHideInput";

describe("ShowHideInput Component", () => {
  it("renders EyeOpen icon when password is hidden", () => {
    cy.mount(<ShowHideInput showPassword={false} setShowPassword={() => {}} />);

    cy.get("svg").should("exist");
  });

  it("renders EyeClosed icon when password is visible", () => {
    cy.mount(<ShowHideInput showPassword={true} setShowPassword={() => {}} />);

    cy.get("svg").should("exist");
  });

  it("toggles password visibility on click", () => {
    const WrapperComponent: React.FC = () => {
      const [showPassword, setShowPassword] = useState(false);

      return (
        <ShowHideInput
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      );
    };

    cy.mount(<WrapperComponent />);

    cy.get("svg").click();
    cy.get("svg").should("exist");
  });
});
