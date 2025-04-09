import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  showDropdownIcon?: boolean;
  showCheckbox?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "default",
  size = "md",
  icon,
  iconPosition = "left",
  href,
  showDropdownIcon = false,
  showCheckbox = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  // Base button styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  // Variant styles
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-2 text-base",
  };

  // Combined styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Button content
  const buttonContent = (
    <>
      {showCheckbox && (
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}

      {showDropdownIcon && <ChevronDown className="ml-2 h-4 w-4" />}
    </>
  );

  // Return Link component if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Otherwise return a button
  return (
    <button className={buttonStyles} onClick={onClick} type="button" {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;
