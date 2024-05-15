import React from "react";
import Input from "components/Form/Input/Input";
import Typography from "components/Typography/Typography";

type LoginInputProps = {
  error: string;
  setValue: (value: string) => void;
  value: string;
  label: string;
  placeholder: string;
  inputType?: string;
};

const LoginInput: React.FC<LoginInputProps> = ({
  error,
  setValue,
  value,
  label,
  inputType = "text",
}: LoginInputProps) => {
  return (
    <div className="flex flex-col">
      <Typography
        children={label}
        className="text-label-md text-mono/basic-5 mb-1"
      />
      <Input
        type={inputType}
        placeholder="Insert username..."
        value={value}
        onChange={setValue}
        className={`gap-1 py-2.25 pl-3 pr-2 h-10 text-body-lg focus:outline-none bg-mono/basic-13 rounded-md border text-mono/basic-1
      ${
        error
          ? "border-velvet/basic-5"
          : "border-mono/basic-11 focus:border-green/basic-6"
      }`}
      />
      <Typography
        children={error}
        className={`text-body-sm text-velvet/basic-5 mb-1 pt-0.75 h-5 ${
          error ? "" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default LoginInput;
