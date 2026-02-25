"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Status Badge Component
 * 
 * Used for showing status states throughout the app
 * - Not Started: muted gray
 * - In Progress: muted amber
 * - Shipped: muted green
 * - Error: deep red
 */

type StatusType =
  | "not-started"
  | "in-progress"
  | "shipped"
  | "success"
  | "warning"
  | "error";

interface StatusBadgeProps {
  status: StatusType;
  children: React.ReactNode;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  "not-started": "bg-[#E8E6E1] text-[#6B6B6B]",
  "in-progress": "bg-[#B8860B] bg-opacity-15 text-[#8B6914]",
  shipped: "bg-[#5A7D5A] bg-opacity-15 text-[#4A6B4A]",
  success: "bg-[#5A7D5A] bg-opacity-15 text-[#4A6B4A]",
  warning: "bg-[#B8860B] bg-opacity-15 text-[#8B6914]",
  error: "bg-[#8B0000] bg-opacity-10 text-[#8B0000]",
};

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-12 py-6 text-sm font-medium rounded-[6px]",
        statusStyles[status],
        className
      )}
    >
      {children}
    </span>
  );
}
