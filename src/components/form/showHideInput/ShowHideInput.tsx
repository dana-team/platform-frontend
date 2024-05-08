/// <reference types="vite-plugin-svgr/client" />
import EyeClosed from "@/assets/eye-closed.svg?react";
import EyeOpen from "@/assets/eye-open.svg?react";

type ShowHideInputProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowHideInput: React.FC<ShowHideInputProps> = ({
  showPassword,
  setShowPassword,
}) => {
  return (
    <div
      className="absolute top-0 right-0 h-full flex items-center pr-3 cursor-pointer"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? (
        <EyeClosed className="text-mono/basic-4" />
      ) : (
        <EyeOpen className="text-mono/basic-4" />
      )}
    </div>
  );
};

export default ShowHideInput;
