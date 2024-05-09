import React from "react";
import BreadcrumbItem from "./Breadcrumb/Breadcrumb";

type HeaderProps = {
  projectName: string;
  application?: string;
};

const Header = ({ projectName, application }: HeaderProps) => (
  <div className="w-full text-left bg-black font-normal text-s h-full justify-center place-content-center gap-4 text-base pl-6">
    <nav aria-label="breadcrumb">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2">
        <BreadcrumbItem text="RCS Platform" />
        <BreadcrumbItem text={projectName} isDropdown={true} />
        <BreadcrumbItem text={application} isLast={true} />
      </ol>
    </nav>
  </div>
);

export default Header;
