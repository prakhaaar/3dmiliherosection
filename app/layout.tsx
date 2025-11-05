// app/layout.tsx
"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");

  // Detect system preference on first load
  useEffect(() => {
    const userPref = localStorage.getItem("theme");
    if (userPref) {
      setTheme(userPref);
      document.documentElement.classList.toggle("dark", userPref === "dark");
    } else {
      const systemPref = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemPref);
      document.documentElement.classList.toggle("dark", systemPref === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <html lang="en">
      <body>
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 bg-gray-800 dark:bg-white text-white dark:text-black px-3 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-transform z-50"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        {children}
      </body>
    </html>
  );
}
