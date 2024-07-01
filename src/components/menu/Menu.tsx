/// <reference types="vite-plugin-svgr/client" />
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export type MenuProps = {
  isOpen: boolean;
  children?: ReactNode;
  target: HTMLDivElement | null;
  className?: string;
};

const Menu = React.memo(
  ({ isOpen, target, children, className }: MenuProps) => {
    return isOpen
      ? ReactDOM.createPortal(
          <div className="pointer-events-none relative z-50 ">
            <div className="pointer-events-auto absolute right-0 top-4">
              <div
                className={`rounded-md shadow-lg bg-mono/basic-10 border border-mono/basic-8 p-1 ${className || ""}`}
              >
                {children}
              </div>
            </div>
          </div>,
          target!
        )
      : null;
  }
);

export default Menu;
