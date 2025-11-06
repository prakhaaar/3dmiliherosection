"use client";

import { useEffect, useState } from "react";
import {
  Box,
  ShoppingCart,
  Tag,
  Search,
  Users,
  Upload,
  Download,
  LayoutGrid,
  Star,
  Layers,
  Heart,
  Headphones,
} from "lucide-react";
import HeroBubble from "./HeroBubble";

export default function Hero() {
  const headlines = [
    "Sell for Free,\nPay Only When You Earn|",
    "Instant Payouts,\nFull Control, No Limits|",
    "Buy Once, Download\nAnytime, Keep Forever|",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // ✨ Typewriter effect
  useEffect(() => {
    const current = headlines[index % headlines.length];
    const speed = isDeleting ? 40 : 80;

    const typing = setTimeout(() => {
      if (!isDeleting && text.length < current.length) {
        setText(current.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % headlines.length);
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [text, isDeleting, index, headlines]);

  // ✨ Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative h-[92vh] 2md:h-[100vh] bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="absolute bg-purple-400/10 dark:bg-purple-600/20 blur-3xl w-80 h-80 rounded-full mix-blend-multiply top-10 left-[20%]" />
        <div className="absolute bg-cyan-400/10 dark:bg-cyan-600/20 blur-3xl w-80 h-80 rounded-full mix-blend-multiply bottom-20 right-[20%]" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Typewriter Text */}
        <h1 className="text-3xl sm:text-5xl md:text-[3.66em] font-semibold text-neutral-800 dark:text-neutral-100 whitespace-pre leading-[1.1] tracking-tight min-h-[120px]">
          {text}
          <span className="ml-1" style={{ opacity: showCursor ? 1 : 0 }}>
            |
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          Your one-stop digital marketplace for 3D models and creative assets.
          <br className="hidden md:block" />
          Join our vibrant community of creators today.
        </p>

        {/* CTA Button */}
        <a
          href="/search?page=1"
          className="relative mt-10 inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-medium rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Explore All Products
        </a>

        {/* Floating Bubbles */}
        <div className="relative mt-12">
          {[
            {
              icon: Box,
              color: "indigo",
              x: -650,
              y: -480,
              title: "3D Models",
              desc: "Browse thousands of high-quality 3D models.",
            },
            {
              icon: Tag,
              color: "amber",
              x: -470,
              y: -350,
              title: "Pricing",
              desc: "Flexible options for creators & businesses.",
            },
            {
              icon: Users,
              color: "purple",
              x: -690,
              y: -240,
              title: "Community",
              desc: "Join 3D artists and designers worldwide.",
            },
            {
              icon: Download,
              color: "cyan",
              x: -480,
              y: -120,
              title: "Downloads",
              desc: "Access your purchases anytime.",
            },
            {
              icon: Heart,
              color: "red",
              x: -650,
              y: 30,
              title: "Favorites",
              desc: "Save your favorite models easily.",
            },
            {
              icon: ShoppingCart,
              color: "emerald",
              x: 560,
              y: -450,
              title: "Checkout",
              desc: "Fast and secure transactions.",
            },
            {
              icon: Search,
              color: "blue",
              x: 410,
              y: -250,
              title: "Search",
              desc: "Find assets instantly with smart filters.",
            },
            {
              icon: Upload,
              color: "teal",
              x: 600,
              y: -90,
              title: "Upload Models",
              desc: "Share your creations and earn.",
            },
            {
              icon: LayoutGrid,
              color: "orange",
              x: 350,
              y: 50,
              title: "Categories",
              desc: "Explore by organized collections.",
            },
            {
              icon: Star,
              color: "yellow",
              x: -360,
              y: 80,
              title: "Featured",
              desc: "Top handpicked assets for you.",
            },
            {
              icon: Layers,
              color: "pink",
              x: 90,
              y: 190,
              title: "Collections",
              desc: "Curated themed bundles for projects.",
            },
            {
              icon: Headphones,
              color: "gray",
              x: -120,
              y: 80,
              title: "Support",
              desc: "Friendly 24/7 support team.",
            },
          ].map((b, i) => (
            <HeroBubble
              key={i}
              icon={b.icon}
              color={b.color as any}
              position={{ x: b.x, y: b.y }}
              title={b.title}
              description={b.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
