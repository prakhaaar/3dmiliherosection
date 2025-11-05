"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Tag,
  Users,
  ShoppingCart,
  Search,
  Heart,
  Download,
  Upload,
  Grid,
} from "lucide-react";
import { HeroBubble } from "./HeroBubble";

export default function Hero() {
  // -------------------- TYPEWRITER --------------------
  // Rotating array of hero messages (each includes line breaks for layout)
  const texts = [
    "Sell for Free,\n Pay Only When You Earn|",
    "Instant Payouts,\n Full Control, No Limits|",
    "Buy Once, Download \nAnytime, Keep Forever|",
  ];

  // Current text index and typewriter state
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Core typewriter effect logic
  useEffect(() => {
    let typingSpeed = 80; // typing interval in ms
    const current = texts[index % texts.length];
    let timeout: NodeJS.Timeout;

    // Typing phase
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length + 1)),
        typingSpeed
      );
    }
    // Deleting phase
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length - 1)),
        typingSpeed / 2
      );
    }
    // Pause before deleting next phrase
    else if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    }
    // Move to next phrase
    else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  return (
    <div
      id="triggerID"
      className="relative h-[92vh] md:h-[100vh] md:sticky md:top-[90px]"
    >
      <section
        className="relative w-full h-full overflow-hidden"
        style={{
          zIndex: 10,
          transition: "opacity 0.3s ease-out",
        }}
      >
        {/* ---------------- BACKGROUND BLOBS ---------------- */}
        {/* Large blurred colored shapes behind text for ambient light */}
        <div className="container absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
          <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
          <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 opacity-10 rounded-full w-72"></span>
        </div>

        {/* ---------------- TEXT ---------------- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="w-full absolute lg:top-[44%] xl:top-[45%] 2xl:top-[50%] lg:-translate-y-[50%]">
            {/* Dynamic typewriter heading */}
            <h1 className="text-3xl sm:text-5xl md:text-[3.6em] font-semibold leading-[1.1] tracking-tight pb-6 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] whitespace-pre ease-in-out min-h-[140px]">
              {displayText}
              {/* Pulsing cursor */}
              <span className="animate-pulse ml-1 text-black dark:text-white">
                |
              </span>
            </h1>

            {/* Subheading description */}
            <p className="text-[10px] sm:text-lg font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
              Your one-stop digital platform for 3D models and digital
              creations.
              <br className="hidden md:block" />
              Join our community of creators and collectors today.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="/search?page=1"
                className="inline-flex items-center justify-center rounded-full transition-colors
                text-[10px] sm:text-base font-medium py-[0.6rem] px-[1rem]
                sm:py-3.5 sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-white
                dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300
                dark:hover:bg-neutral-800 w-[156px] sm:w-[15rem] overflow-hidden"
              >
                Explore all products
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- STATIC BUBBLES ---------------- */}
        {/* Decorative feature bubbles floating around hero center */}
        <div className="relative w-full h-full">
          {/* Left column */}
          <HeroBubble
            icon={Box}
            color="indigo"
            position={{ x: -420, y: -180 }}
            smPosition={{ x: -160, y: -120 }}
            title="3D Models"
            description="Browse thousands of high-quality 3D models for your projects."
          />
          <HeroBubble
            icon={Tag}
            color="amber"
            position={{ x: -330, y: -10 }}
            smPosition={{ x: -130, y: -50 }}
            title="Pricing"
            description="Flexible pricing options for creators and businesses."
          />
          <HeroBubble
            icon={Users}
            color="purple"
            position={{ x: -300, y: 180 }}
            smPosition={{ x: -110, y: 80 }}
            title="Community"
            description="Join thousands of 3D artists and designers."
          />
          <HeroBubble
            icon={Heart}
            color="red"
            position={{ x: -400, y: 330 }}
            smPosition={{ x: -150, y: 180 }}
            title="Favorites"
            description="Save and organize your favorite 3D assets easily."
          />

          {/* Right column */}
          <HeroBubble
            icon={ShoppingCart}
            color="emerald"
            position={{ x: 400, y: -160 }}
            smPosition={{ x: 150, y: -120 }}
            title="Checkout"
            description="Fast and secure payments for your 3D model purchases."
          />
          <HeroBubble
            icon={Search}
            color="blue"
            position={{ x: 380, y: 20 }}
            smPosition={{ x: 140, y: -40 }}
            title="Search"
            description="Find exactly what you need with our powerful search tools."
          />
          <HeroBubble
            icon={Upload}
            color="green"
            position={{ x: 360, y: 220 }}
            smPosition={{ x: 120, y: 80 }}
            title="Upload"
            description="Share your creations with the world in just a few clicks."
          />
          <HeroBubble
            icon={Grid}
            color="orange"
            position={{ x: 320, y: 360 }}
            smPosition={{ x: 100, y: 180 }}
            title="Explore"
            description="Browse thousands of digital assets in every category."
          />
          <HeroBubble
            icon={Download}
            color="cyan"
            position={{ x: -30, y: 300 }}
            smPosition={{ x: 0, y: 150 }}
            title="Downloads"
            description="Instantly access your purchased assets anytime."
          />
        </div>
      </section>
    </div>
  );
}
