"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Button Component
 * 
 * Primary: Solid deep red (#8B0000)
 * Secondary: Outlined with border
 * 
 * Rules:
 * - Same border radius everywhere (6px)
 * - 150-200ms transitions, ease-in-out
 * - No bounce, no parallax
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-[6px] transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-[#8B0000] text-white hover:bg-[#6B0000] active:bg-[#5A0000]",
    secondary:
      "bg-white text-[#111111] border border-[#D4D2CC] hover:bg-[#F7F6F3] active:bg-[#E8E6E1]",
  };

  const sizes = {
    default: "px-24 py-12 text-base",
    small: "px-16 py-8 text-sm",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], disabledStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
