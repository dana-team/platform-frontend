import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      {children}
    </div>,
    modalRoot!
  );
};

export default Modal;
