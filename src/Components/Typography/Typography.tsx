import React from "react";
import { ReactNode } from "react";

type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const defaultStyles: Record<TypographyVariants, string> = {
  h1: "font-bold text-2xl",
  h2: "font-bold text-xl",
  h3: "font-bold text-lg",
  h4: "font-bold text-base",
  h5: "font-bold text-sm",
  h6: "font-bold text-xs",
  p: "font-normal",
};

interface TypographyProps {
  tag?: TypographyVariants;
  variant?: TypographyVariants;
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  tag: Tag = "p",
  variant = "p",
  children,
  className,
}) => {
  const tagClass = defaultStyles[variant] || "";
  return <Tag className={`${className} ${tagClass}`}>{children}</Tag>;
};

export default Typography;
