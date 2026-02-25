"use client";

import React from "react";

/**
 * Context Header Component
 * 
 * - Large serif headline
 * - One-line subtext
 * - Clear purpose, no hype language
 * 
 * Spacing: 40px bottom margin
 * Typography: Serif for headline, sans-serif for subtext
 */

interface ContextHeaderProps {
  headline: string;
  subtext: string;
}

export function ContextHeader({ headline, subtext }: ContextHeaderProps) {
  return (
    <div className="mb-40">
      <h1 className="font-serif text-[2.5rem] leading-[1.2] text-[#111111] mb-16">
        {headline}
      </h1>
      <p className="text-[1rem] leading-[1.7] text-[#6B6B6B] max-w-[720px]">
        {subtext}
      </p>
    </div>
  );
}
