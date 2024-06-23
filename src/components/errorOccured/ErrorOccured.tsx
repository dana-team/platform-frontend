/// <reference types="vite-plugin-svgr/client" />
import CloseIcon from "@/assets/x-close.svg?react";
import Error from "@/assets/error.svg?react";

import React from "react";
import Typography from "@/components/typography/Typography";
import Button from "@components/button/Button";

type ErrorOccuredModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  details?: string;
};

const ErrorOccuredModal = React.memo(
  ({ setShowModal, error, details }: ErrorOccuredModalProps) => {
    return (
      <div className="flex flex-col items-center justify-center relative">
        <CloseIcon
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowModal((prev) => !prev)}
        />
        <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-md">
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <div className="bg-mono/basic-15 rounded-full h-20 w-20 " />
              <Error className="absolute" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-5">
            <Typography
              variant="headline-lg"
              className="text-mono/basic-1 pb-2"
            >
              {error}
            </Typography>
            <Typography variant="body-xl" className="text-mono/basic-3">
              {details}
            </Typography>
            <Typography variant="body-xl" className="text-mono/basic-3 pb-5">
              Please check your connectivity or try again in a few moments.
            </Typography>
          </div>
          <div className="flex items-center justify-center pt-3 h-13">
            <Button
              variant="secondary"
              onClick={() => setShowModal((prev) => !prev)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default ErrorOccuredModal;
