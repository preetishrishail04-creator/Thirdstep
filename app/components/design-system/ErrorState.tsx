"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

/**
 * Error State Component
 * 
 * - Clearly explain what went wrong
 * - Explain how to fix it
 * - Never blame the user
 */

interface ErrorStateProps {
  title?: string;
  message: string;
  solution?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  message,
  solution,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-40",
        className
      )}
    >
      <div className="w-64 h-64 mb-24 rounded-full bg-[#8B0000] bg-opacity-10 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8B0000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="font-serif text-xl text-[#111111] mb-12">{title}</h3>
      <p className="text-base text-[#6B6B6B] leading-relaxed max-w-[400px] mb-8">
        {message}
      </p>
      {solution && (
        <p className="text-sm text-[#111111] leading-relaxed max-w-[400px] mb-24">
          {solution}
        </p>
      )}
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
