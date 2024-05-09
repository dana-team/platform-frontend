import React from "react";
import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiApplicationBraces,
  mdiAccountGroup,
  mdiLock,
  mdiCog,
} from "@mdi/js";
import Typography from "components/Typography";

const sidebarItems = [
  {
    icon: mdiApplicationBraces,
    label: "Applications",
  },
  {
    icon: mdiAccountGroup,
    label: "Members",
  },
  {
    icon: mdiLock,
    label: "Secrets",
  },
  {
    icon: mdiCog,
    label: "Settings",
  },
];

export default function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={`h-full top-0 left-0 flex-none transition-all duration-500 ${
        isSidebarExpanded ? "w-52" : "w-18"
      }`}
      onClick={toggleSidebar}
    >
      <div className="lg:block bg-sidebar-grey h-full font-sans font-normal rounded-none border-none pt-6 gap-1 px-3">
        {sidebarItems.map((item) => (
          <div
            key={item.label} // Add a unique key for each item
            className="h-12 gap-3 pl-3 flex items-center justify-start cursor-pointer rounded-md group hover:bg-black"
          >
            <Typography
              className="group-hover:text-white font-normal text-sm"
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
