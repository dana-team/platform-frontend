import Modal from "@components/modal/Modal";
import React from "react";
import Typography from "@components/typography/Typography";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen bg-mono/basic-15">
      <div className="h-screen bg-cover bg-no-repeat bg-login-pattern opacity-20">
        <Modal>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center"></div>
            <Typography
              variant="headline-lg"
              className="text-mono/basic-3"
            >{`The page you are looking for may have been moved,`}</Typography>
            <Typography
              variant="headline-lg"
              className="text-mono/basic-3"
            >{`deleted, or possibly never existed`}</Typography>

            <Typography
              variant="headline-9xl"
              as="h1"
              className="text-mono/basic-1 mt-40"
            >
              404
            </Typography>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NotFound;
