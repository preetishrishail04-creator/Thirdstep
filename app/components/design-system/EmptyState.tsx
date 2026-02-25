"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

/**
 * Empty State Component
 * 
 * - Never leave blank screens
 * - Guide next action
 * - Clear, helpful messaging
 */

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-40",
        className
      )}
    >
      <div className="w-64 h-64 mb-24 rounded-full bg-[#F7F6F3] flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B6B6B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="11" y2="17" />
        </svg>
      </div>
      <h3 className="font-serif text-xl text-[#111111] mb-12">{title}</h3>
      <p className="text-base text-[#6B6B6B] leading-relaxed max-w-[400px] mb-24">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
