"use client";

import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface HeroBubbleProps {
  icon: LucideIcon; // Lucide icon component
  color:
    | "indigo"
    | "emerald"
    | "amber"
    | "blue"
    | "purple"
    | "red"
    | "green"
    | "cyan"
    | "orange";
  position: { x: number; y: number }; // main position relative to hero center
  smPosition?: { x: number; y: number }; // optional mobile position
  title: string;
  description: string;
}

// Predefined gradient + icon colors by theme
const gradients = {
  indigo: "from-white/70 to-indigo-50",
  emerald: "from-white/70 to-emerald-50",
  amber: "from-white/70 to-amber-50",
  blue: "from-white/70 to-blue-50",
  purple: "from-white/70 to-purple-50",
  red: "from-white/70 to-rose-50",
  green: "from-white/70 to-green-50",
  cyan: "from-white/70 to-cyan-50",
  orange: "from-white/70 to-orange-50",
};

const iconColors = {
  indigo: "text-indigo-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
  red: "text-rose-600",
  green: "text-green-600",
  cyan: "text-cyan-600",
  orange: "text-orange-600",
};

export const HeroBubble = ({
  icon: Icon,
  color,
  position,
  smPosition,
  title,
  description,
}: HeroBubbleProps) => {
  const [hover, setHover] = useState(false); // track hover for tooltip

  return (
    <div
      className="absolute transition-transform duration-300 ease-out"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Circular gradient bubble */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`relative group rounded-full backdrop-blur-lg border border-white/40 dark:border-white/10 
          p-[10px] sm:p-[14px] flex items-center justify-center cursor-pointer
          bg-gradient-to-r ${gradients[color]} shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-105`}
      >
        {/* Icon inside bubble */}
        <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${iconColors[color]}`} />

        {/* Tooltip on hover */}
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-48 transition-all duration-300 ease-out 
            ${
              hover
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          style={{ zIndex: 999 }}
        >
          <div
            className={`rounded-lg text-sm shadow-xl border border-dashed p-4 bg-white/95 dark:bg-neutral-900 
            dark:text-neutral-100 dark:border-neutral-700 border-${color}-400`}
          >
            <h3 className="font-medium flex items-center gap-2 text-xs md:text-sm mb-1">
              <Icon className={`w-4 h-4 ${iconColors[color]}`} />
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-[#0000008a] dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
