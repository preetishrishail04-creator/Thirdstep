"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

/**
 * Shared Top Navigation Bar
 * 
 * Links: Dashboard | Saved | Digest | Settings | Proof
 * Active link: deep red underline (#8B0000)
 * Clean, minimal styling - no flashy hover effects
 * No heavy shadows
 */

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/saved", label: "Saved" },
  { href: "/digest", label: "Digest" },
  { href: "/settings", label: "Settings" },
  { href: "/proof", label: "Proof" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-[#D4D2CC]">
      <div className="max-w-[1200px] mx-auto px-24">
        <div className="flex items-center justify-between h-64">
          {/* Logo / App Name */}
          <Link
            href="/"
            className="font-serif text-lg text-[#111111] hover:text-[#8B0000] transition-colors duration-150"
          >
            Job Notification App
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-16 py-20 text-sm font-medium transition-colors duration-150",
                    isActive
                      ? "text-[#8B0000]"
                      : "text-[#6B6B6B] hover:text-[#111111]"
                  )}
                >
                  {link.label}
                  {/* Active indicator - deep red underline */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-16 right-16 h-[2px] bg-[#8B0000]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu links={navLinks} currentPath={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}
