"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const texts = [
    "Sell for Free,\nPay Only When You Earn|",
    "Instant Payouts,\nFull Control, No Limits|",
    "Buy Once, Download\nAnytime, Keep Forever|",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const current = texts[index % texts.length];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="2md:sticky 2md:top-[90px] h-[92vh] 2md:h-[100vh]">
      <section className="relative w-full h-full overflow-hidden z-10 transition-opacity duration-300">
        {/* ===== Background Blobs ===== */}
        <div className="container absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
          <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
          <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 opacity-10 rounded-full w-72"></span>
        </div>

        {/* ===== Hero Text & Button ===== */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="w-full absolute top-1/2 -translate-y-1/2">
            {/* Typewriter Heading */}
            <motion.div
              id="typewriterID"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl 1.7sm:text-5xl md:text-[3.66em] font-semibold leading-[1.1] tracking-tight pb-6 text-neutral-800 dark:text-neutral-100 min-h-[120px] whitespace-pre ease-in-out">
                <span>{displayText}</span>
                <span
                  className="inline-block ml-[2px]"
                  style={{
                    opacity: showCursor ? 1 : 0,
                    animation: "blink 1s step-start infinite",
                  }}
                >
                  |
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              id="homeParaID"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[10px] 1.7sm:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
                Your one-stop digital platform for 3D models and digital
                creations.
                <br className="hidden md:block" />
                Join our community of creators and collectors today.
              </p>
            </motion.div>

            {/* Explore Button + All Hero Bubbles */}
            <motion.div
              id="exploreBtnID"
              className="flex justify-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/search?page=1"
                className="nc-Button h-auto absolute inline-flex items-center justify-center rounded-full transition-colors 
                text-[10px] z-[1000] 1.7sm:text-base font-medium py-[0.514rem] px-[0.9375rem] 
                1.7sm:py-3.5 1.7sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 
                dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 
                dark:hover:bg-neutral-800 w-[156px] 1.7sm:w-[15rem] overflow-hidden"
              >
                Explore all products
              </a>

              {/* ===== All 12 Hero Bubbles ===== */}
              <div className="transition-opacity duration-1000 opacity-100">
                {/* Left side bubbles */}
                <HeroBubble
                  icon={Box}
                  color="indigo"
                  position={{ x: -650, y: -480 }}
                  title="3D Models"
                  description="Browse thousands of high-quality 3D models for your projects."
                />
                <HeroBubble
                  icon={Tag}
                  color="amber"
                  position={{ x: -470, y: -350 }}
                  title="Pricing"
                  description="Flexible pricing options for creators and businesses."
                />
                <HeroBubble
                  icon={Users}
                  color="purple"
                  position={{ x: -690, y: -240 }}
                  title="Community"
                  description="Join thousands of 3D artists and designers."
                />
                <HeroBubble
                  icon={Download}
                  color="cyan"
                  position={{ x: -480, y: -120 }}
                  title="Downloads"
                  description="Access your purchased models anywhere, anytime."
                />
                <HeroBubble
                  icon={Heart}
                  color="red"
                  position={{ x: -650, y: 30 }}
                  title="Favorites"
                  description="Save models you love for quick access later."
                />

                {/* Right side bubbles */}
                <HeroBubble
                  icon={ShoppingCart}
                  color="emerald"
                  position={{ x: 560, y: -450 }}
                  title="Checkout"
                  description="Fast and secure payments for your 3D model purchases."
                />
                <HeroBubble
                  icon={Search}
                  color="blue"
                  position={{ x: 410, y: -250 }}
                  title="Search"
                  description="Find exactly what you need with our powerful search tools."
                />
                <HeroBubble
                  icon={Upload}
                  color="teal"
                  position={{ x: 600, y: -90 }}
                  title="Upload Models"
                  description="Share your creations with our community and reach buyers."
                />
                <HeroBubble
                  icon={LayoutGrid}
                  color="orange"
                  position={{ x: 350, y: 50 }}
                  title="Categories"
                  description="Explore our organized collection by categories."
                />

                {/* Bottom + center accent bubbles */}
                <HeroBubble
                  icon={Star}
                  color="yellow"
                  position={{ x: -360, y: 80 }}
                  title="Featured Models"
                  description="Discover handpicked premium 3D assets from top creators."
                />
                <HeroBubble
                  icon={Layers}
                  color="pink"
                  position={{ x: 90, y: 190 }}
                  title="Collections"
                  description="Curated sets of models for specific projects and needs."
                />
                <HeroBubble
                  icon={Headphones}
                  color="gray"
                  position={{ x: -120, y: 80 }}
                  title="Support"
                  description="Get help from our friendly support team anytime."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
