"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Input Component
 * 
 * - Clean borders
 * - Clear focus state (deep red ring)
 * - No decorative elements
 * 
 * Spacing: 12px padding
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[#111111] mb-8"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-12 py-12 bg-white border rounded-[6px] text-base text-[#111111]",
          "border-[#D4D2CC]",
          "placeholder:text-[#6B6B6B]",
          "focus:outline-none focus:border-[#8B0000] focus:ring-2 focus:ring-[#8B0000] focus:ring-opacity-20",
          "transition-all duration-150 ease-in-out",
          error && "border-[#8B0000] focus:border-[#8B0000]",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-8 text-sm text-[#8B0000]">{error}</p>
      )}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({
  label,
  error,
  className,
  id,
  ...props
}: TextAreaProps) {
  const inputId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[#111111] mb-8"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          "w-full px-12 py-12 bg-white border rounded-[6px] text-base text-[#111111] resize-none",
          "border-[#D4D2CC]",
          "placeholder:text-[#6B6B6B]",
          "focus:outline-none focus:border-[#8B0000] focus:ring-2 focus:ring-[#8B0000] focus:ring-opacity-20",
          "transition-all duration-150 ease-in-out",
          error && "border-[#8B0000] focus:border-[#8B0000]",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-8 text-sm text-[#8B0000]">{error}</p>
      )}
    </div>
  );
}
