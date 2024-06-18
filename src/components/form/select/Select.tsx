/// <reference types="vite-plugin-svgr/client" />
import ArrowDown from "@/assets/arrow-down.svg?react";
import Typography from "@components/typography/Typography";
import React, { forwardRef } from "react";

interface SelectProps {
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  options: string[];
  label?: string;
  error?: string;
}

const Select: React.FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ placeholder, className, options, label, error, ...props }, ref) => {
  return (
    <div className={`flex flex-col group ${className || ""}`}>
      {label && (
        <Typography variant="label-md" className="text-mono/basic-5 mb-1">
          {label}
        </Typography>
      )}
      <div className="min-h-min relative group">
        <select
          defaultValue=""
          ref={ref}
          {...props}
          className={`gap-1 w-full py-2.25 pl-3 pr-2 h-10 text-body-lg focus:outline-none bg-mono/basic-13 rounded-md border text-mono/basic-1
            ${
              error
                ? "border-velvet/basic-5"
                : "border-mono/basic-11 focus:border-green/basic-6"
            }`}
        >
          <option value="" className="text-body-lg text-mono/basic-1" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-body-lg text-mono/basic-1"
            >
              {option}
            </option>
          ))}
        </select>
        <div className="absolute top-0 right-0 h-10 flex items-center pr-3 text-mono/basic-4 group-focus-within:text-mono/basic-1">
          <ArrowDown />
        </div>
        <Typography
          variant="body-sm"
          className={`text-velvet/basic-5 mb-1 pt-0.75 h-5 ${
            error ? "" : "opacity-0"
          }`}
        >
          {error}
        </Typography>
      </div>
    </div>
  );
});

export default Select;
