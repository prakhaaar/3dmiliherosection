"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, Upload, User, MessageCircle } from "lucide-react";

/**
 * Navbar Component
 * -------------------------------------------------
 * A responsive, sticky top navigation bar for EZPASS.
 * Includes the brand logo, navigation links, a search bar,
 * and quick-access buttons (Discord, Upload, Profile).
 *
 * Features:
 *  ✅ Sticky top behavior
 *  ✅ Light/Dark mode styling
 *  ✅ Responsive layout (flex-based)
 *  ✅ Animated hover effects
 */
export default function Navbar() {
  // Track user input in the search bar
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-20 w-full bg-white dark:bg-neutral-900 border-b border-neutral-200/70 dark:border-neutral-800 transition-colors duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20 font-popins">
        {/* 🧩 LEFT SECTION — Logo + Navigation Links */}
        <div className="flex items-center gap-10">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
              alt="3DIMLI Logo"
              width={120}
              height={40}
              className="h-9 w-auto"
            />

            {/* Version Badge */}
            <div className="flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l border-neutral-300 dark:border-neutral-700 pl-2">
              <span>BETA</span>
              <span>2.0.0</span>
            </div>
          </a>

          {/* Navigation Links — visible on desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-neutral-800 dark:text-neutral-200">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="/discover"
              className="hover:text-primary transition-colors"
            >
              Discover
            </a>
            <a
              href="/features"
              className="hover:text-primary transition-colors"
            >
              Features
            </a>
            <a href="/pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>
        </div>

        {/* ⚡ RIGHT SECTION — Search + Actions */}
        <div className="flex items-center gap-4 w-[50%] justify-end">
          {/* 🔍 Search Bar */}
          <form className="relative flex-1 max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 pr-10 text-sm placeholder:text-neutral-400 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-neutral-300"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
          </form>

          {/* 💬 Discord Button */}
          <a
            href="https://discord.gg/d48csuWe46"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium px-4 py-2.5 rounded-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discord</span>
          </a>

          {/* ⬆️ Upload Button */}
          <button className="flex items-center gap-2 bg-gradient-to-br from-gray-900 to-primary hover:opacity-90 text-white font-medium px-4 py-2.5 rounded-md transition-all">
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </button>

          {/* 👤 User Profile Icon */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
            aria-label="User Profile"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

// Authored by Prakhar
