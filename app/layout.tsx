// app/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

// ✅ Load Poppins directly from Next.js (no @import needed)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-popins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark" | "">("");

  // ✅ Detect system or saved preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const systemPref = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemPref);
      document.documentElement.classList.toggle("dark", systemPref === "dark");
    }
  }, []);

  // ✅ Toggle and persist
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${theme === "dark" ? "dark" : ""}`}
    >
      <body className="font-popins bg-background text-foreground transition-colors duration-300">
        {/* 🌓 Theme Toggle Floating Button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-transform z-50"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* 🌍 Main Application */}
        {children}
      </body>
    </html>
  );
}
