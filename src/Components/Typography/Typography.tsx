import React from "react";
import { ReactNode } from "react";

type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

export const defaultStyles: Record<TypographyVariants, string> = {
  h1: "font-semibold text-headline-xl",
  h2: "font-semibold text-headline-lg",
  h3: "font-medium text-headline-md",
  h4: "font-medium text-headline-sm",
  h5: "font-medium text-headline-xs",
  p: "",
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
