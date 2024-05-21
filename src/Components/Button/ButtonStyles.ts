import { TypographyVariants } from "components/Typography/Typography";

export type ButtonVariants =
  | "primary"
  | "primary-onPress"
  | "primary-disabled"
  | "secondary"
  | "secondary-onPress"
  | "secondary-disabled"
  | "link"
  | "link-onPress"
  | "link-disabled";

export type ButtonSizes = "default" | "sm";

export const buttonVariantStyles: { [key in ButtonVariants]: string } = {
  primary:
    "border rounded border-green/basic-6 bg-green/basic-5 hover:bg-green/basic-6 hover:border-green/basic-7",
  "primary-onPress": "border rounded bg-green/basic-7 border-green/basic-8",
  "primary-disabled": "border rounded bg-mono/basic-12 border-mono/basic-13",

  secondary:
    "border rounded border-mono/basic-4 hover:bg-mono/basic-13 hover:border-green/basic-7",
  "secondary-onPress": "bg-mono/basic-10 border-green/basic-8",
  "secondary-disabled": "border rounded bg-mono/basic-12 border-mono/basic-13",

  link: "hover:underline hover:underline-offset-8 hover:decoration-green/basic-6",
  "link-onPress": "border-b-1 border-green/basic-5",
  "link-disabled": "",
};

export const sizeStyles: { [key in ButtonSizes]: string } = {
  default: "py-2.5 px-5 gap-1",
  sm: "px-2 py-1 gap-1",
};

export const buttonTypographyClass: {
  [key in ButtonVariants]: string;
} = {
  primary: "text-mono/basic-16",
  "primary-onPress": "text-mono/basic-1",
  "primary-disabled": "text-mono/basic-9",

  secondary: "text-mono/basic-1",
  "secondary-onPress": "text-mono/basic-1",
  "secondary-disabled": "text-mono/basic-9",

  link: "text-mono/basic-3 group-hover:text-green/basic-6",
  "link-onPress": "text-green/basic-5",
  "link-disabled": "text-mono/basic-9",
};

const primaryButtonTypography: { [size in ButtonSizes]: TypographyVariants } = {
  default: "accent-lg",
  sm: "accent-md",
};

const secondaryButtonTypography: { [size in ButtonSizes]: TypographyVariants } =
  primaryButtonTypography;

const linkButtonTypography: { [size in ButtonSizes]: TypographyVariants } = {
  default: "accent-md",
  sm: "accent-md",
};

export const buttonVariantTypography: {
  [key in ButtonVariants]: { [size in ButtonSizes]: TypographyVariants };
} = {
  primary: primaryButtonTypography,
  "primary-onPress": primaryButtonTypography,
  "primary-disabled": primaryButtonTypography,

  secondary: secondaryButtonTypography,
  "secondary-onPress": secondaryButtonTypography,
  "secondary-disabled": secondaryButtonTypography,

  link: linkButtonTypography,
  "link-onPress": linkButtonTypography,
  "link-disabled": linkButtonTypography,
};
