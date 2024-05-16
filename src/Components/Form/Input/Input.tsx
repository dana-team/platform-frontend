/// <reference types="vite-plugin-svgr/client" />

import EyeClosed from "../../../assets/eye-closed.svg?react";
import EyeOpen from "../../../assets/eye-open.svg?react";
import React, { useState, ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: any) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="min-h-min	relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={`${className} w-full`}
      />
      {type === "password" && inputValue && (
        <div
          className="absolute top-0 right-0 h-full flex items-center pr-3 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <EyeClosed className="text-mono/basic-4" />
          ) : (
            <EyeOpen className="text-mono/basic-4" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
