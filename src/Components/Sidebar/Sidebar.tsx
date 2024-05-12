import { useState } from "react";
import { sidebarItems } from "./items";
import SideBarItem from "./SidebarItem/SidebarItem";

export default function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

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
      <div className="lg:block bg-mono/basic-13 h-full font-sans rounded-none border-none pt-6 gap-1 px-3 text-base">
        {sidebarItems.map((item) => (
          <SideBarItem
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            item={item}
            isSidebarExpanded={isSidebarExpanded}
            key={item.label}
          />
        ))}
      </div>
    </div>
  );
}
