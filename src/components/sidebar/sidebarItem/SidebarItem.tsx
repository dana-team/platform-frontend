import React from "react";
import Typography from "@components/typography/Typography";
import { Item } from "../items";

type SideBarItemProps = {
  item: Item;
  isSidebarExpanded: boolean;
  selectedOption: boolean;
};

const SidebarItem: React.FC<SideBarItemProps> = React.memo(
  ({ item, isSidebarExpanded, selectedOption }: SideBarItemProps) => {
    return (
      <div
        className={`h-11 gap-2 pl-3 mb-1 flex items-center justify-start cursor-pointer rounded-md group ${
          selectedOption
            ? "bg-mono/basic-16 text-white"
            : "hover:bg-mono/basic-12 bg-transparent text-mono/basic-4"
        } `}
      >
        <Typography
          className={`transition-all duration-300 ${
            selectedOption
              ? "text-green/basic-6 "
              : "text-mono/basic-4 group-hover:text-mono/basic-1"
          } `}
        >
          {item.icon}
        </Typography>
        <Typography
          variant="headline-xs"
          className={`transition-all duration-300
         ${isSidebarExpanded ? "opacity-1" : "opacity-0"} 
         ${selectedOption ? "font-semibold" : "text-base font-normal"} 
          group-hover:text-mono/basic-1`}
        >
          {item.label}
        </Typography>
      </div>
    );
  }
);

export default SidebarItem;
