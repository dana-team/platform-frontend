import React from "react";
import { ReactNode } from "react";

export type TypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
export type TypographyVariants =
  | "headline-xs"
  | "headline-sm"
  | "headline-lg"
  | "headline-xl"
  | "headline-md"
  | "label-md"
  | "body-md"
  | "body-sm";

interface TypographyProps {
  tag?: TypographyTags;
  variant?: TypographyVariants;
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  tag: Tag = "p",
  variant,
  children,
  className,
}) => {
  return (
    <Tag className={`${className} ${variant ? `text-${variant}` : ""}`}>
      {children}
    </Tag>
  );
};

export default Typography;
