import React from "react";
import Typography from "components/Typography";
import Icon from "@mdi/react";
import { mdiTriangleSmallDown } from "@mdi/js";

type BreadcrumbProps = {
  text?: string;
  isDropdown?: boolean;
  isLast?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbProps> = ({
  text,
  isDropdown = false,
  isLast = false,
}) => (
  <li className="flex group cursor-pointer items-center font-sans font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-100 hover:text-white">
    <Typography
      className={`group-hover:text-white ${
        isLast
          ? "font-normal text-white transition-colors"
          : "text-[#707070] opacity-80"
      }`}
      children={text}
    />
    {isDropdown && (
      <Typography
        children={
          <Icon
            path={mdiTriangleSmallDown}
            size={0.7}
            className="group-hover:text-white"
          />
        }
      />
    )}
    {!isLast && (
      <Typography
        className="pointer-events-none mx-2 select-none font-sans font-normal leading-normal antialiased group-hover:text-white"
        children={"/"}
      />
    )}
  </li>
);
export default BreadcrumbItem;
