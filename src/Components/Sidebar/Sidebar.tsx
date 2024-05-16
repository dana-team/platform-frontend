import { useState } from "react";
import { sidebarItems } from "./items";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={`top-0 left-0 flex-none transition-all duration-500 ${
        isSidebarExpanded ? "w-65" : "w-18"
      }`}
      onClick={toggleSidebar}
    >
      <div className="lg:block bg-mono/basic-13 h-full font-sans rounded-none border-none pt-9 gap-1 px-3 text-base">
        {sidebarItems.map((item) => (
          <SidebarItem
            selectedOption={selectedOption}
            onOptionSelect={setSelectedOption}
            item={item}
            isSidebarExpanded={isSidebarExpanded}
            key={item.label}
          />
        ))}
      </div>
    </div>
  );
}
