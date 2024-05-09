import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  fontWeight?: "bold" | "normal";
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  color = "gray-400",
  fontWeight = "normal",
  className,
}) => (
  <div className={`text-gray-400 font-${fontWeight} ${className}`}>
    {children}
  </div>
);

export default Typography;
