/// <reference types="vite-plugin-svgr/client" />
import Dots from "@/assets/dots-container.svg?react";
import BackgroundContainer from "@components/container/Container";
import Typography from "@components/typography/Typography";
import { useMemo, useState } from "react";
import { stepIcon, getSteps } from "./steps";

type CreateApplicationProps = {
  projectName: string;
};
const CreateApplication = ({ projectName }: CreateApplicationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [image, setImage] = useState("");

  const steps = useMemo(
    () => getSteps(setImage, setCurrentStep),
    [setImage, setCurrentStep]
  );

  // TODO: next PR will deal with this image, leaving console.log here to get away from lint.
  console.log(image);

  return (
    <BackgroundContainer>
      <div className="p-10 w-full h-full flex flex-col ">
        <div className="flex flex-col h-[20%]">
          <Typography variant="headline-xs" className="text-mono/basic-4">
            {projectName}
          </Typography>
          <Typography variant="headline-xl" className="text-mono/basic-1">
            Add new application
          </Typography>
        </div>
        <div className="flex flex-row w-full max-h-[80%]">
          <div className="border border-mono/basic-10 bg-mono/basic-14 px-6 py-6 rounded-sm mr-10 flex flex-col items-start min-w-max h-fit">
            {steps.map((step) => (
              <div key={step.index}>
                <div className="flex flex-row items-center justify-center">
                  {stepIcon(currentStep, step.index)}
                  <Typography
                    variant="label-lg"
                    className="ml-2 text-mono/basic-3"
                  >
                    {step.text}
                  </Typography>
                </div>
                {step.index < steps.length - 1 && <Dots className="my-1" />}
              </div>
            ))}
          </div>
          <div className="w-full h-full">{steps[currentStep].component}</div>
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default CreateApplication;
