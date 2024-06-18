/// <reference types="vite-plugin-svgr/client" />
import Rectangle from "@/assets/rectangle18.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";
import ReactDOM from "react-dom";
import { MenuItem } from "./items";
import { Link } from "@tanstack/react-router";

interface MenuProps {
  items: MenuItem[];
  isOpen: boolean;
  target: HTMLDivElement | null;
}

const Menu: React.FC<MenuProps> = React.memo(
  ({ items, isOpen, target }: MenuProps) => {
    return isOpen
      ? ReactDOM.createPortal(
          <div className="pointer-events-none relative z-50 ">
            <div className="pointer-events-auto absolute right-0 top-4">
              <div className=" w-56 rounded-md shadow-lg bg-mono/basic-10 border border-mono/basic-8 p-1">
                {items.map((item, i) =>
                  item.label !== "divider" ? (
                    <Link to={item.path} key={item.label}>
                      <Typography
                        as="p"
                        variant="body-md"
                        className="text-mono/basic-4 px-1.5 py-1.25 hover:bg-mono/basic-13 focus:bg-mono/basic-14 focus:text-mono/basic-1 rounded-md cursor-pointer"
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography key={i} className="p-1">
                      <Rectangle />
                    </Typography>
                  )
                )}
              </div>
            </div>
          </div>,
          target!
        )
      : null;
  }
);

export default Menu;
