/// <reference types="vite-plugin-svgr/client" />
import AppIcon from "../../assets/app-icon.svg?react";
import ArrowDown from "../../assets/arrow-down.svg?react";

import Typography from "components/Typography/Typography";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";

type HeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  user: { username: string; thumbnail: number };
};

const Header = ({ breadcrumbs, user }: HeaderProps) => {
  const [importedThumbnail, setimportedThumbnail] =
    useState<React.ReactNode>(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(
        `../../assets/account-thumbnails/color-${user.thumbnail}.svg?react`
      );
      const ThumbnailComponent = module.default;
      setimportedThumbnail(<ThumbnailComponent />);
    };

    importComponent();
  }, [user.thumbnail]);

  return (
    <div className="w-full text-left bg-mono/basic-16 font-normal h-full items-center justify-between gap-4 text-base pl-6 flex">
      <nav aria-label="breadcrumb">
        <div className="flex w-fit flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 font-extralight">
          <Typography
            children={
              <AppIcon style={{ width: "32.26px", height: "32.26px" }} />
            }
          />
          <Typography
            variant="headline-sm"
            children={"RCS Amplify"}
            className="text-mono/basic-4 px-3"
          />
          <div className="flex cursor-pointer items-center font-sans antialiased transition-colors duration-100 bg-mono/basic-14 rounded-full h-fit">
            <div className="flex items-center py-1.5 pl-4 pr-5">
              {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb breadcrumb={breadcrumb} key={breadcrumb.text} />
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="place-self-end flex items-center h-full pr-5.1">
        <div className="relative flex justify-center items-center">
          {importedThumbnail}
          <div className="text-white absolute inset-0 flex justify-center items-center font-medium">
            {user.username
              .toUpperCase()
              .split(" ")
              .map((n) => n[0])}
          </div>
        </div>
        <Typography
          variant="body-md"
          children={user.username}
          className="text-mono/basic-4 pl-3"
        />
        <Typography children={<ArrowDown />} className="text-mono/basic-4" />
      </div>
    </div>
  );
};
export default Header;
