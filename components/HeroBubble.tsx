"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";

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
  tooltipPosition?: "bottom" | "left" | "right" | "top";
  hasImage?: boolean;
}

export default function HeroBubble({
  icon: Icon,
  color,
  position,
  title,
  description,
  zIndex = 30,
  tooltipPosition = "bottom",
  hasImage = false,
}: HeroBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const gradientMap: Record<ColorKey, string> = {
    indigo: "from-white/70 to-indigo-50 dark:from-white/10 dark:to-transparent",
    amber: "from-white/70 to-amber-50 dark:from-white/10 dark:to-transparent",
    purple: "from-white/70 to-purple-50 dark:from-white/10 dark:to-transparent",
    red: "from-white/70 to-red-50 dark:from-white/10 dark:to-transparent",
    cyan: "from-white/70 to-cyan-50 dark:from-white/10 dark:to-transparent",
    orange: "from-white/70 to-orange-50 dark:from-white/10 dark:to-transparent",
    green: "from-white/70 to-green-50 dark:from-white/10 dark:to-transparent",
    emerald:
      "from-white/70 to-emerald-50 dark:from-white/10 dark:to-transparent",
    blue: "from-white/70 to-blue-50 dark:from-white/10 dark:to-transparent",
    teal: "from-white/70 to-teal-50 dark:from-white/10 dark:to-transparent",
    yellow: "from-white/70 to-yellow-50 dark:from-white/10 dark:to-transparent",
    pink: "from-white/70 to-pink-50 dark:from-white/10 dark:to-transparent",
    gray: "from-white/70 to-gray-50 dark:from-white/10 dark:to-transparent",
  };

  const iconColorMap: Record<ColorKey, string> = {
    indigo: "text-indigo-600",
    amber: "text-amber-600",
    purple: "text-purple-600",
    red: "text-red-600",
    cyan: "text-cyan-600",
    orange: "text-orange-600",
    green: "text-green-600",
    emerald: "text-emerald-600",
    blue: "text-blue-600",
    teal: "text-teal-600",
    yellow: "text-yellow-600",
    pink: "text-pink-600",
    gray: "text-gray-600",
  };

  const tooltipPositionClasses = {
    bottom: "bottom-auto top-full left-1/2 -translate-x-1/2 mt-2",
    top: "top-auto bottom-full left-1/2 -translate-x-1/2 mb-2",
    left: "left-auto right-full top-1/2 -translate-y-1/2 mr-2",
    right: "right-auto left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="bubble-item-wrapper absolute top-1/2 left-1/2 will-change-transform"
      style={{
        zIndex,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative z-0">
        {/* Bubble */}
        <div
          className={`
            bubble-item relative rounded-full backdrop-blur-lg
            shadow-[0px_2px_10px_rgba(0,0,0,0.1)]
            border border-white/40 dark:border-white/10
            bg-gradient-to-r ${gradientMap[color]}
            flex items-center justify-center cursor-pointer
            w-[55px] h-[55px] 1.7sm:w-[70px] 1.7sm:h-[70px] md:w-[80px] md:h-[80px]
            transition-all duration-300 ease-in-out hover:scale-105
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            className={`${iconColorMap[color]} transition-transform duration-300`}
            width={28}
            height={28}
          />
        </div>

        {/* Tooltip */}
        <div
          className={`
            absolute ${tooltipPositionClasses[tooltipPosition]}
            transition-all duration-500 ease-in-out
            ${
              isHovered
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
          style={{ zIndex: 9999 }}
        >
          <div className="rounded-lg dark:text-neutral-100 dark:border-neutral-600 text-card-foreground w-48 shadow-xl bg-white/95 dark:bg-neutral-900 border-indigo-400 border border-dashed">
            <div className="flex flex-col space-y-1.5 p-6 pb-1 md:pb-2">
              <h3 className="tracking-tight text-xs md:text-sm font-medium flex items-center gap-2">
                <span className={`p-1 rounded-full tone-${color}`}>
                  <Icon
                    className={iconColorMap[color]}
                    width={12}
                    height={12}
                  />
                </span>
                {title}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-xs leading-relaxed text-[#0000008a] dark:text-neutral-400">
                {description}
              </p>
              {hasImage && (
                <div className="mt-3 rounded-md overflow-hidden border border-indigo-50 dark:border-neutral-700">
                  <div className="w-full h-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
