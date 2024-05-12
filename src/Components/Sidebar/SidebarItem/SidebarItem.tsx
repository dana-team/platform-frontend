import React from "react";
import Typography from "components/Typography/Typography";
import { SidebarItem } from "../items";

type SideBarItemProps = {
  item: SidebarItem;
  isSidebarExpanded: boolean;
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
};

const SideBarItem = ({
  item,
  isSidebarExpanded,
  selectedOption,
  onOptionSelect,
}: SideBarItemProps) => {
  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
  };

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        handleOptionClick(item.label);
        console.log(item.label);
      }}
      className={`h-12 gap-3 pl-3 flex items-center justify-start cursor-pointer rounded-md group ${
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
         ${selectedOption === item.label ? "" : "text-base"} 
          group-hover:text-mono/basic-1 font-light`}
      />
    </div>
  );
};

export default SideBarItem;
