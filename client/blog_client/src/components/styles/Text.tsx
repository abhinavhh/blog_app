import clsx from "clsx";
import type React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "base" | "lg" | "xl";
  font?: "bold" | "semibold" | "extrabold" | "medium";
  variant?: "gray" | "white" | "dark" | "red";
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";
  className?: string;
  children?: React.ReactNode;
  htmlFor?: string; // for <label>
}

const Text = ({
  size = "sm",
  font = "bold",
  variant = "white",
  as = "p",
  className,
  children,
  htmlFor,
  ...rest
}: TextProps) => {
  const Tag = as;

  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const fonts = {
    bold: "font-bold",
    semibold: "font-semibold",
    extrabold: "font-extrabold",
    medium: "font-medium"
  }

  const variants = {
    gray: "text-gray-300",
    white: "text-white",
    dark: "text-gray-900",
    red: "text-red-900",
  };

  return (
    <Tag
      className={clsx(sizes[size], fonts[font], variants[variant], className)}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
