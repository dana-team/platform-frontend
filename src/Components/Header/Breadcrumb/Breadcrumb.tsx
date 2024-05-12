import React from "react";
import Typography from "components/Typography/Typography";
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
  <li className="flex group cursor-pointer items-center font-sans font-normal leading-normal antialiased transition-colors duration-100 hover:text-white">
    <Typography
      className={`group-hover:text-white transition-all duration-300 ${
        isLast
          ? "font-normal text-neutral transition-colors"
          : "text-secondary opacity-80 "
      }`}
      children={text}
    />
    {isDropdown && (
      <Typography
        children={
          <Icon
            path={mdiTriangleSmallDown}
            size={0.7}
            className="group-hover:text-white text-secondary transition-all duration-300"
          />
        }
      />
    )}
    {!isLast && (
      <Typography
        className="pointer-events-none mx-2 select-none font-sans leading-normal antialiased group-hover:text-white text-secondary transition-all duration-300"
        children={"/"}
      />
    )}
  </li>
);
export default BreadcrumbItem;
