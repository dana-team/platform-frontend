import React from "react";
import Typography from "components/Typography/Typography";
import { Item } from "../items";

type SideBarItemProps = {
  item: Item;
  isSidebarExpanded: boolean;
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
};

const SidebarItem = ({
  item,
  isSidebarExpanded,
  selectedOption,
  onOptionSelect,
}: SideBarItemProps) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onOptionSelect(item.label);
        console.log(selectedOption === item.label);
      }}
      className={`h-11 gap-2 pl-3 mb-1 flex items-center justify-start cursor-pointer rounded-md group ${
        selectedOption === item.label
          ? "bg-mono/basic-16 text-white"
          : "hover:bg-mono/basic-12 bg-transparent text-mono/basic-4"
      } `}
    >
      <Typography
        className={`transition-all duration-300 font-sans text-base ${
          selectedOption === item.label
            ? "text-green/basic-6 "
            : "text-mono/basic-4 group-hover:text-mono/basic-1"
        } `}
        children={item.icon}
      />
      <Typography
        children={item.label}
        className={`transition-all duration-300
         ${isSidebarExpanded ? "opacity-1" : "opacity-0"} 
         ${
           selectedOption === item.label
             ? "font-normal"
             : "text-base font-extralight"
         } 
          group-hover:text-mono/basic-1`}
      />
    </div>
  );
};

export default SidebarItem;
