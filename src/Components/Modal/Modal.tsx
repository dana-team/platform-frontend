import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  closeOnEscape?: boolean;
};

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<ModalProps> = ({
  setShowModal,
  children,
  closeOnEscape = false,
}: ModalProps) => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (closeOnEscape && e.key === "Escape" && setShowModal) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      {children}
    </div>,
    modalRoot!
  );
};

export default Modal;
