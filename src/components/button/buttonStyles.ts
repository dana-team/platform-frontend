import { TypographyVariants } from "@/components/typography/Typography";

export type ButtonVariants = "primary" | "secondary" | "link";
export type ButtonSizes = "default" | "sm";

export const buttonVariantStyles: { [key in ButtonVariants]: string } = {
  primary:
    "border rounded border-green/basic-6 bg-green/basic-5 hover:bg-green/basic-6 hover:border-green/basic-7 focus:bg-green/basic-7 focus:border-green/basic-8 disabled:bg-mono/basic-12 disabled:border-mono/basic-13",
  secondary:
    "border rounded border-mono/basic-4 hover:bg-mono/basic-13 hover:border-green/basic-7 focus:bg-mono/basic-10 focus:border-green/basic-8 disabled:bg-mono/basic-12 disabled:border-mono/basic-13",
  link: "hover:underline hover:underline-offset-8 hover:decoration-green/basic-6 focus:border-b-1 focus:border-green/basic-5",
};

export const sizeStyles: { [key in ButtonSizes]: string } = {
  default: "py-2.5 px-5 gap-1",
  sm: "px-2 py-1 gap-1",
};

export const buttonTypographyClass: {
  [key in ButtonVariants]: string;
} = {
  primary:
    "text-mono/basic-16 focus:text-mono/basic-1 disabled:text-mono/basic-9",
  secondary:
    "text-mono/basic-1 focus:text-mono/basic-1 disabled:text-mono/basic-9",
  link: "text-mono/basic-3 group-hover:text-green/basic-6 focus:text-green/basic-5 disabled:text-mono/basic-9",
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
  secondary: secondaryButtonTypography,
  link: linkButtonTypography,
};
