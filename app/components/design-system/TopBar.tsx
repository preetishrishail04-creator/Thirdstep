"use client";

import React from "react";

/**
 * Top Bar Component
 * 
 * Layout: Left (App name) → Center (Progress indicator) → Right (Status badge)
 * 
 * Spacing: Uses 24px padding, 8px gaps
 * Colors: Background white, text #111111, subtle borders
 */

interface TopBarProps {
  currentStep: number;
  totalSteps: number;
  status: "not-started" | "in-progress" | "shipped";
}

const statusConfig = {
  "not-started": {
    label: "Not Started",
    className: "bg-[#E8E6E1] text-[#6B6B6B]",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-[#B8860B] bg-opacity-15 text-[#B8860B]",
  },
  shipped: {
    label: "Shipped",
    className: "bg-[#5A7D5A] bg-opacity-15 text-[#5A7D5A]",
  },
};

export function TopBar({ currentStep, totalSteps, status }: TopBarProps) {
  const statusStyle = statusConfig[status];

  return (
    <header className="w-full bg-white border-b border-[#D4D2CC]">
      <div className="flex items-center justify-between px-24 py-24">
        {/* Left: App Name */}
        <div className="flex-1">
          <span className="font-serif text-lg text-[#111111]">
            Job Notification App
          </span>
        </div>

        {/* Center: Progress Indicator */}
        <div className="flex-1 flex justify-center">
          <span className="text-sm text-[#6B6B6B] tracking-wide">
            Step {currentStep} / {totalSteps}
          </span>
        </div>

        {/* Right: Status Badge */}
        <div className="flex-1 flex justify-end">
          <span
            className={`inline-flex items-center px-16 py-8 text-sm font-medium rounded-[6px] ${statusStyle.className}`}
          >
            {statusStyle.label}
          </span>
        </div>
      </div>
    </header>
  );
}
