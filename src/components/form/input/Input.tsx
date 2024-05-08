/// <reference types="vite-plugin-svgr/client" />

import Typography from "@/components/typography/Typography";
import React, { useState, forwardRef } from "react";
import ShowHideInput from "../showHideInput/ShowHideInput";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  className?: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ type, error, label, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={`flex flex-col ${className || ""}`}>
        <Typography variant="label-md" className="text-mono/basic-5 mb-1">
          {label}
        </Typography>

        <div className="min-h-min	relative">
          <input
            ref={ref}
            {...props}
            type={showPassword ? "text" : type}
            className={`gap-1 w-full py-2.25 pl-3 pr-2 h-10 text-body-lg focus:outline-none bg-mono/basic-13 rounded-md border text-mono/basic-1
          ${
            error
              ? "border-velvet/basic-5"
              : "border-mono/basic-11 focus:border-green/basic-6"
          }`}
          />
          {type === "password" && (
            <ShowHideInput
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
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
    );
  }
);

export default Input;
