import React from "react";
import { useState } from "react";
import Icon from "@mdi/react";
import Typography from "components/Typography/Typography";
import { sidebarItems } from "./items";

export default function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={`top-0 left-0 flex-none transition-all duration-500 ${
        isSidebarExpanded ? "w-52" : "w-18"
      }`}
      onClick={toggleSidebar}
    >
      <div className="lg:block bg-primary h-full font-sans font-normal rounded-none border-none pt-6 gap-1 px-3">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
            className="h-12 gap-3 pl-3 flex items-center justify-start cursor-pointer rounded-md group hover:bg-black text-secondary"
          >
            <Typography
              className="transition-all duration-300 group-hover:text-white font-normal text-sm text-secondary"
              children={
                <Icon
                  path={item.icon}
                  style={{
                    maxWidth: 18,
                    minWidth: 18,
                    minHeight: 18,
                    maxHeight: 18,
                  }}
                />
              }
            />
            <Typography
              children={item.label}
              className={`transition-all duration-300 ${
                isSidebarExpanded ? "opacity-1" : "opacity-0"
              } text-s group-hover:text-white`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
