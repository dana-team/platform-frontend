import React, { ReactNode } from "react";
import {
  buttonVariantStyles,
  buttonVariantTypography,
  sizeStyles,
  ButtonVariants,
  ButtonSizes,
  buttonTypographyClass,
} from "./buttonStyles";
import Typography, {
  TypographyVariants,
} from "@components/typography/Typography";

interface ButtonProps {
  variant: ButtonVariants;
  size?: ButtonSizes;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "default",
  children,
  className,
  onClick,
  disabled,
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  const variantStyle: string = buttonVariantStyles[variant];
  const sizeStyle: string = sizeStyles[size];
  const typographyVariant: TypographyVariants =
    buttonVariantTypography[variant][size];
  const typographyClass: string = buttonTypographyClass[variant];

  return (
    <button
      className={`btn ${variantStyle} ${sizeStyle} ${
        className || ""
      } flex items-center justify-center group ${
        iconPosition === "top" || iconPosition === "bottom"
          ? "flex-col"
          : "flex-row"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (iconPosition === "top" || iconPosition === "left") && (
        <Typography className={`icon-${iconPosition} ${typographyClass}`}>
          {icon}
        </Typography>
      )}

      <Typography variant={typographyVariant} className={`${typographyClass}`}>
        {children}
      </Typography>

      {icon && (iconPosition === "right" || iconPosition === "bottom") && (
        <Typography className={`icon-${iconPosition} ${typographyClass}`}>
          {icon}
        </Typography>
      )}
    </button>
  );
};

export default Button;
