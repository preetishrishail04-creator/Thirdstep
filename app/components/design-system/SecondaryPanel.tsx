"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Secondary Panel Component
 * 
 * - Step explanation
 * - Copyable prompt box
 * - Buttons styled consistently
 * 
 * Width: 30% of workspace
 * Spacing: 24px padding, 16px gaps between sections
 */

interface SecondaryPanelProps {
  stepNumber: number;
  explanation: string;
  promptText?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SecondaryPanel({
  stepNumber,
  explanation,
  promptText,
  children,
  className,
}: SecondaryPanelProps) {
  const handleCopyPrompt = () => {
    if (promptText) {
      navigator.clipboard.writeText(promptText);
    }
  };

  return (
    <aside
      className={cn(
        "w-full lg:w-[30%] bg-white border border-[#D4D2CC] rounded-[6px] p-24",
        className
      )}
    >
      {/* Step Number */}
      <div className="mb-24">
        <span className="text-sm font-medium text-[#8B0000]">
          Step {stepNumber}
        </span>
      </div>

      {/* Explanation */}
      <div className="mb-24">
        <h4 className="font-serif text-lg text-[#111111] mb-12">
          What to do
        </h4>
        <p className="text-base text-[#6B6B6B] leading-relaxed">
          {explanation}
        </p>
      </div>

      {/* Copyable Prompt Box */}
      {promptText && (
        <div className="mb-24">
          <h4 className="font-serif text-lg text-[#111111] mb-12">
            Prompt
          </h4>
          <div className="relative">
            <div className="bg-[#F7F6F3] border border-[#D4D2CC] rounded-[6px] p-16">
              <p className="text-sm text-[#111111] leading-relaxed whitespace-pre-wrap">
                {promptText}
              </p>
            </div>
            <button
              onClick={handleCopyPrompt}
              className="absolute top-12 right-12 text-xs text-[#6B6B6B] hover:text-[#8B0000] transition-colors duration-150"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Additional Content */}
      {children && (
        <div className="pt-24 border-t border-[#E8E6E1]">
          {children}
        </div>
      )}
    </aside>
  );
}
