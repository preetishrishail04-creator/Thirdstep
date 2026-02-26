"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Mobile Menu Component
 * 
 * Hamburger menu that opens a clean dropdown panel
 * Same design rules: no gradients, no neon, no animation noise
 * 150-200ms transitions, ease-in-out
 */

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  currentPath: string;
}

export function MobileMenu({ links, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-40 h-40 rounded-[6px] text-[#111111] hover:bg-[#F7F6F3] transition-colors duration-150"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            // X icon when open
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            // Hamburger icon when closed
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-48 w-56 bg-white border border-[#D4D2CC] rounded-[6px] shadow-sm z-50 py-8">
            <nav className="flex flex-col">
              {links.map((link) => {
                const isActive = currentPath === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-16 py-12 text-sm font-medium transition-colors duration-150",
                      isActive
                        ? "text-[#8B0000] bg-[#F7F6F3]"
                        : "text-[#6B6B6B] hover:text-[#111111] hover:bg-[#F7F6F3]"
                    )}
                  >
                    <span className="flex items-center gap-12">
                      {isActive && (
                        <span
                          className="w-[3px] h-16 bg-[#8B0000] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
