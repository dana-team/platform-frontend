/// <reference types="vite-plugin-svgr/client" />
import React, { useCallback } from "react";
import AppIcon from "@/assets/app-icon.svg?react";
import ArrowDown from "@/assets/arrow-down.svg?react";
import Typography from "@/components/typography/Typography";
import Breadcrumb, { BreadcrumbItem } from "./breadcrumb/Breadcrumb";
import { APP_NAME } from "@/common/consts";
import { useAuth } from "@/hooks/useAuth";
import getFirstLetter from "@utils/getFirstLetter";
import { dynamicThumbnailLoader } from "@utils/dynamicComponentLoader";

type HeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  user: string;
};

const Header = React.memo(({ breadcrumbs, user }: HeaderProps) => {
  const { signOut, thumbnail } = useAuth();
  const getFirstLetterOfUser = useCallback(() => getFirstLetter(user), [user]);

  return (
    <div className="w-full text-left bg-mono/basic-16 h-17 items-center justify-between gap-4 flex">
      <nav aria-label="breadcrumb">
        <div className="flex w-fit flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 pl-5.5">
          <Typography>
            <AppIcon style={{ width: "32.26px", height: "32.26px" }} />
          </Typography>
          <Typography
            variant="headline-sm"
            className="text-mono/basic-4 pl-2.5 pr-4.25"
          >
            {APP_NAME}
          </Typography>
          <div className="flex cursor-pointer items-center antialiased transition-colors duration-100 bg-mono/basic-14 rounded-full h-fit">
            <div className="flex items-center py-2.25 pl-4 pr-5">
              {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb
                  text={breadcrumb.text}
                  isDropdown={breadcrumb.isDropdown}
                  shouldAddDivider={breadcrumb.shouldAddDivider}
                  key={breadcrumb.text}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="place-self-end flex items-center h-full pr-5.5">
        <div className="relative flex justify-center items-center">
          {dynamicThumbnailLoader(thumbnail)}
          <div className="text-white absolute inset-0 flex justify-center items-center">
            {getFirstLetterOfUser().toUpperCase()}
          </div>
        </div>
        <div
          className="group flex items-center cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          <Typography
            variant="body-md"
            className="text-mono/basic-4 pl-3 group-hover-white"
          >
            {user}
          </Typography>
          <Typography className="text-mono/basic-4 group-hover-white">
            <ArrowDown />
          </Typography>
        </div>
      </div>
    </div>
  );
});

export default Header;
