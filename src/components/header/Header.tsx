/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import AppIcon from "@/assets/app-icon.svg?react";
import Typography from "@/components/typography/Typography";
import Breadcrumb, { BreadcrumbItem } from "./breadcrumb/Breadcrumb";
import { APP_NAME } from "@/common/consts";
import UserPopover from "./popover/UserPopover";

type HeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  user: string;
};

const Header = React.memo(({ breadcrumbs, user }: HeaderProps) => {
  return (
    <div className="w-full text-left bg-mono/basic-16 h-full items-center justify-between gap-4 flex">
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
      <UserPopover user={user} />
    </div>
  );
});

export default Header;
