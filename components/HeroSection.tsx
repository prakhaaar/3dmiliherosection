"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

/**
 * 🧠 Text sequences that appear with a typewriter animation.
 * Each string represents one "scene" of the hero headline.
 * The "|" symbol marks the cursor position visually.
 */
const texts = [
  "Buy Once, Download\nAnytime, Keep Forever|",
  "Instant Payouts,\nFull Control, No Limits|",
  "Discover, Buy, and Sell\nDigital Products|",
];

/**
 * HeroSection
 * -------------------------------------------------
 * The main landing hero of the page — it displays a
 * dynamic typewriter heading, short tagline, and a CTA button.
 * Designed to be responsive, smooth, and elegant.
 */
export const HeroSection = () => {
  // Get the animated text and cursor blink from our custom hook
  const { text, blink } = useTypewriter({ texts, speed: 70, delay: 400 });

  // Used to toggle cursor visibility (to simulate blinking)
  const [showCursor, setShowCursor] = useState(true);

  // Toggle the cursor every 500ms
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-10">
      {/* ✨ Typewriter Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[2.1rem] sm:text-[2.6rem] md:text-[3.4rem] font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100 whitespace-pre-wrap mb-6 md:mb-8"
      >
        {text}
        {/* Blinking cursor */}
        <span
          className="inline-block ml-1 text-neutral-900 dark:text-neutral-100"
          style={{ opacity: showCursor && blink ? 1 : 0 }}
        >
          |
        </span>
      </motion.h1>

      {/* 💬 Supporting tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl text-[0.9rem] sm:text-[1.1rem] md:text-[1.25rem] font-medium leading-relaxed text-[#0000008a] dark:text-neutral-400 mb-8 md:mb-10"
      >
        Your one-stop digital platform for 3D models and digital creations.
        <br className="hidden sm:block" />
        Join our community of creators and collectors today.
      </motion.p>

      {/* 🚀 Call-to-Action button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <a
          href="/search?page=1"
          className="inline-flex items-center justify-center rounded-full bg-[rgb(2,132,199)] hover:bg-[hsl(201,96%,32%)] text-white font-medium text-sm sm:text-base py-3 px-7 sm:py-3.5 sm:px-8 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          Explore all products
        </a>
      </motion.div>
    </div>
  );
};

// Authored by Prakhar
