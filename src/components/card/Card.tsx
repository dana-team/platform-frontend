/// <reference types="vite-plugin-svgr/client" />
import MoreInfoDots from "@/assets/moreInfo_dots.svg?react";
import Typography from "@components/typography/Typography";
import React, { ReactNode, useState } from "react";
import Menu from "@components/menu/Menu";
import { MenuItem } from "@components/menu/items";

interface CardProps {
  children: ReactNode;
  menuItems?: MenuItem[];
}

const Card: React.FC<CardProps> = React.memo(
  ({ menuItems = [], children }: CardProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div className="flex flex-col rounded-md bg-mono/basic-16 border border-mono/basic-10 grow max-h-full">
        <div className="flex items-center pr-2 pt-2 flex-none ml-auto">
          <div onClick={() => setIsMenuOpen((prev) => !prev)}>
            <Typography
              className={`cursor-pointer ${isMenuOpen ? "rounded-full bg-mono/basic-11 text-green/basic-6" : "text-mono/basic-4"}`}
            >
              <MoreInfoDots />
            </Typography>
          </div>
          <div ref={setTarget}></div>
          {isMenuOpen && (
            <Menu items={menuItems} isOpen={isMenuOpen} target={target} />
          )}
        </div>
        <div className="flex flex-none pl-5 pb-8 flex-col flex-grow overflow-hidden">
          {children}
        </div>
      </div>
    );
  }
);

export default Card;
