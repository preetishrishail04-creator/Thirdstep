"use client";

import React from "react";

/**
 * Page Placeholder Component
 * 
 * Used for routes that haven't been built yet.
 * - Large serif heading
 * - Muted subtext
 * - No additional content
 */

interface PagePlaceholderProps {
  title: string;
}

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-24 py-64">
      <h1 className="font-serif text-[2.5rem] leading-[1.2] text-[#111111] mb-16">
        {title}
      </h1>
      <p className="text-base text-[#6B6B6B] leading-relaxed max-w-[720px]">
        This section will be built in the next step.
      </p>
    </div>
  );
}
