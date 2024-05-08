import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: ReactNode;
  darkenBackground?: boolean;
};

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<ModalProps> = ({
  children,
  darkenBackground = false,
}: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      {darkenBackground && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-mono/basic-15 opacity-70" />
      )}

      {children}
    </div>,
    modalRoot!
  );
};

export default Modal;
