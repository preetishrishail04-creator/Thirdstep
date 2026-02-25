"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Proof Footer Component
 * 
 * Checklist style:
 * □ UI Built
 * □ Logic Working
 * □ Test Passed
 * □ Deployed
 * 
 * Spacing: 24px padding
 */

interface ChecklistItem {
  label: string;
  checked: boolean;
}

interface ProofFooterProps {
  items?: ChecklistItem[];
  className?: string;
}

const defaultItems: ChecklistItem[] = [
  { label: "UI Built", checked: false },
  { label: "Logic Working", checked: false },
  { label: "Test Passed", checked: false },
  { label: "Deployed", checked: false },
];

export function ProofFooter({
  items = defaultItems,
  className,
}: ProofFooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-white border-t border-[#D4D2CC] px-24 py-24",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-24">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 text-sm text-[#6B6B6B]"
          >
            <span
              className={cn(
                "inline-flex items-center justify-center w-16 h-16 rounded-[3px] border",
                item.checked
                  ? "bg-[#5A7D5A] border-[#5A7D5A] text-white"
                  : "border-[#D4D2CC]"
              )}
            >
              {item.checked && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 5L3.5 7L8.5 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              className={cn(
                item.checked && "text-[#111111]"
              )}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}
