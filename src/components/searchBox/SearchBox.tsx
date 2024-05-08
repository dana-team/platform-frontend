/// <reference types="vite-plugin-svgr/client" />
import Search from "@/assets/search.svg?react";
import React, { forwardRef } from "react";

interface SearchBoxProps {
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  disabled?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = React.memo(
  forwardRef<HTMLInputElement, SearchBoxProps>(
    ({ placeholder, className, disabled = false, ...props }, ref) => {
      return (
        <div className={`flex flex-col group ${className || ""}`}>
          <div className="min-h-min relative group">
            <input
              disabled={disabled}
              ref={ref}
              {...props}
              type="text"
              placeholder={placeholder}
              className={`gap-1 w-full py-2.25 pl-9 pr-2 h-10 text-body-lg focus:outline-none rounded-md border bg-mono/basic-13 border-mono/basic-11
          ${disabled ? "text-mono/basic-8 placeholder:text-mono/basic-8" : "text-mono/basic-4 placeholder:text-mono/basic-4 group-focus-within:text-mono/basic-1 focus:border-green/basic-6"}`}
            />
            <div
              className={`absolute top-0 left-0 h-full flex items-center pl-3 ${disabled ? "text-mono/basic-8" : "text-mono/basic-4 group-focus-within:text-mono/basic-1"}`}
            >
              <Search />
            </div>
          </div>
        </div>
      );
    }
  )
);

export default SearchBox;
