/// <reference types="vite-plugin-svgr/client" />
import EllipseFilled from "@/assets/ellipse-filled.svg?react";
import Ellipse from "@/assets/ellipse.svg?react";
import ImportApplication from "@components/applications/create/importApplication/ImportApplication";
import { ReactNode } from "react";

export type Step = {
  index: number;
  text: string;
  component?: ReactNode;
};

export const getSteps = (
  setImage: React.Dispatch<React.SetStateAction<string>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => [
  {
    index: 0,
    text: "Import application",
    component: (
      <ImportApplication setImage={setImage} setNextStep={setCurrentStep} />
    ),
  },
  { index: 1, text: "Configure application" },
  { index: 2, text: "Deploy application" },
];

export const stepIcon = (currentStep: number, stepIndex: number) => {
  const commonClasses = "transition-all duration-500";
  if (currentStep === stepIndex) {
    return <EllipseFilled className={`text-green/basic-6 ${commonClasses}`} />;
  }
  if (currentStep > stepIndex) {
    return <EllipseFilled className={`text-mono/basic-3 ${commonClasses}`} />;
  }
  return <Ellipse />;
};
