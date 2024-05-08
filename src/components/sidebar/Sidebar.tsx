import React, { useState } from "react";
import { sidebarItems } from "./items";
import SidebarItem from "./sidebarItem/SidebarItem";
import { isPathMatching } from "@/utils/isPathMatching";
import { Link } from "@tanstack/react-router";

export type SidebarProps = {
  currentPath: string;
};

const Sidebar: React.FC<SidebarProps> = React.memo(
  ({ currentPath }: SidebarProps) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    return (
      <div
        className={`top-0 left-0 flex-none transition-all duration-500 ${
          isSidebarExpanded ? "w-65" : "w-18"
        }`}
        onDoubleClick={() => setIsSidebarExpanded((prev) => !prev)}
      >
        <div className="lg:block bg-mono/basic-13 h-full font-sans rounded-none border-none pt-9 gap-1 px-3">
          {sidebarItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <SidebarItem
                selectedOption={isPathMatching(item.path, currentPath)}
                item={item}
                isSidebarExpanded={isSidebarExpanded}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

export default Sidebar;
