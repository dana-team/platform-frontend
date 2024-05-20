/// <reference types="vite-plugin-svgr/client" />
import ArrowDown from "../../../assets/arrow-down.svg?react";
import Divider from "../../../assets/divider.svg?react";
import Typography from "components/Typography/Typography";

type BreadcrumbProps = {
  breadcrumb: BreadcrumbItem;
};

export type BreadcrumbItem = {
  text: string;
  isDropdown?: boolean;
  shouldAddDivider?: boolean;
};

const Breadcrumb = ({ breadcrumb }: BreadcrumbProps) => (
  <div className="flex items-center text-mono/basic-4">
    <div className="flex group items-center">
      <Typography
        variant="headline-xs"
        children={breadcrumb.text}
        className="group-hover:text-white transition-all duration-300"
      />
      {breadcrumb.isDropdown && (
        <Typography
          children={<ArrowDown />}
          className="group-hover:text-white transition-all duration-300"
        />
      )}
    </div>
    {breadcrumb.shouldAddDivider && (
      <Typography className=" hover:text-white px-4" children={<Divider />} />
    )}
  </div>
);

export default Breadcrumb;
