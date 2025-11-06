"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

type ColorKey =
  | "indigo"
  | "amber"
  | "purple"
  | "red"
  | "cyan"
  | "orange"
  | "green"
  | "emerald"
  | "blue"
  | "teal"
  | "yellow"
  | "pink"
  | "gray";

interface HeroBubbleProps {
  icon: LucideIcon;
  color: ColorKey;
  position: { x: number; y: number };
  title: string;
  description: string;
  zIndex?: number;
}

export default function HeroBubble({
  icon: Icon,
  color,
  position,
  title,
  description,
  zIndex = 30,
}: HeroBubbleProps) {
  const [hovered, setHovered] = useState(false);

  // ✅ Full gradient map including all colors
  const gradientMap: Record<ColorKey, string> = {
    indigo:
      "from-white/70 to-indigo-50 dark:from-indigo-950/40 dark:to-indigo-900/30",
    amber:
      "from-white/70 to-amber-50 dark:from-amber-950/40 dark:to-amber-900/30",
    purple:
      "from-white/70 to-purple-50 dark:from-purple-950/40 dark:to-purple-900/30",
    red: "from-white/70 to-red-50 dark:from-red-950/40 dark:to-red-900/30",
    cyan: "from-white/70 to-cyan-50 dark:from-cyan-950/40 dark:to-cyan-900/30",
    orange:
      "from-white/70 to-orange-50 dark:from-orange-950/40 dark:to-orange-900/30",
    green:
      "from-white/70 to-green-50 dark:from-green-950/40 dark:to-green-900/30",
    emerald:
      "from-white/70 to-emerald-50 dark:from-emerald-950/40 dark:to-emerald-900/30",
    blue: "from-white/70 to-blue-50 dark:from-blue-950/40 dark:to-blue-900/30",
    teal: "from-white/70 to-teal-50 dark:from-teal-950/40 dark:to-teal-900/30",
    yellow:
      "from-white/70 to-yellow-50 dark:from-yellow-950/40 dark:to-yellow-900/30",
    pink: "from-white/70 to-pink-50 dark:from-pink-950/40 dark:to-pink-900/30",
    gray: "from-white/70 to-gray-50 dark:from-gray-800/40 dark:to-gray-700/30",
  };

  // ✅ Safely build color class with template string
  const iconColor = `text-${color}-600 dark:text-${color}-400`;

  return (
    <div
      className="absolute top-1/2 left-1/2 will-change-transform"
      style={{
        zIndex,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Bubble */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-lg 
          shadow-md dark:shadow-lg border border-white/40 dark:border-white/20 bg-gradient-to-r ${gradientMap[color]}
          w-[60px] h-[60px] md:w-[75px] md:h-[75px] hover:scale-105`}
      >
        <Icon className={`${iconColor}`} size={26} />
      </div>

      {/* Tooltip */}
      {hovered && (
        <div
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-52 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-xl p-3 shadow-lg text-xs leading-snug backdrop-blur-md transition-all duration-300"
          style={{ zIndex: 1000 }}
        >
          <div className="font-semibold mb-1 flex items-center gap-1">
            <Icon className={iconColor} size={14} /> {title}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
