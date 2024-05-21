import React from "react";
import { ReactNode } from "react";
import { variantStyles } from "./VariantStyles";

export type TypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
export type TypographyVariants =
  | "headline-xl"
  | "headline-lg"
  | "headline-md"
  | "headline-sm"
  | "headline-xs"
  | "label-lg"
  | "label-md"
  | "label-sm"
  | "label-xs"
  | "body-xl"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "accent-lg"
  | "accent-md";

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
    <Tag
      className={`${className ? className : ""} ${
        variant ? variantStyles[variant] : ""
      }`}
    >
      {children}
    </Tag>
  );
};

export default Typography;
