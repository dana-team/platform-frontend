/// <reference types="vite-plugin-svgr/client" />
import MoreInfoDots from "@/assets/moreInfo_dots.svg?react";
import InformationCircle from "@/assets/information-circle.svg?react";
import Typography from "@components/typography/Typography";
import React, { ReactNode, useState } from "react";
import Menu from "@components/menu/Menu";

type RowProps = {
  children: ReactNode;
  menuChildren: ReactNode;
};

const Row = React.memo(({ children, menuChildren }: RowProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  return (
    <div className="flex bg-mono/basic-16 w-full justify-center mb-2 pl-5 py-4 border border-mono/basic-10 rounded-md h-full max-h-20 shrink-0 ">
      {children}
      <div className="grow-0 flex place-items-center pr-5">
        <div className="flex flex-row flex-grow place-items-center">
          <Typography
            variant="headline-xs"
            className="text-mono/basic-4 truncate"
          >
            <InformationCircle />
          </Typography>
          <div
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <Typography
              variant="headline-xs"
              className={`cursor-pointer ${isMenuOpen ? "rounded-full bg-mono/basic-11 text-green/basic-6" : "text-mono/basic-4"}`}
            >
              <MoreInfoDots />
            </Typography>
          </div>
          <div ref={setTarget}></div>
          {isMenuOpen && (
            <Menu target={target} isOpen={isMenuOpen} className="">
              {menuChildren}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
});

export default Row;
