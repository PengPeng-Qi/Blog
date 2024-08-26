"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const svgVariants = {
  hidden: () => {
    return {
      rotate: "-90deg",
      scale: 1.65,
      transition: { type: "spring", damping: 12 },
    };
  },
  visible: () => {
    return {
      rotate: "90deg",
      scale: 1.2,
      transition: { type: "spring", damping: 18 },
    };
  },
};
const circleVariants = {
  hidden: (index: number) => {
    const angle = (index * Math.PI * 2) / 6; // 计算每个圆点的角度
    const x = -Math.cos(angle) * 8; // 大圆的中心点
    const y = -Math.sin(angle) * 8; // 大圆的中心点
    return {
      opacity: 0,
      x: x,
      y: y,
      transition: { duration: 0.1 },
    };
  },
  visible: (index: number) => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.35, delay: 0.15 + index * 0.1, type: "spring", damping: 25, stiffness: 200 },
    };
  },
};

const circles = [
  { cx: 16.5, cy: 9 },
  { cx: 13, cy: 15.928203 },
  { cx: 5, cy: 15.928203 },
  { cx: 1.5, cy: 9 },
  { cx: 5, cy: 2.071797 },
  { cx: 13, cy: 2.071797 },
];

export default function DarkMode() {
  const { theme, systemTheme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animateState, setAnimateState] = useState("visible");
  const [isUpdatedTheme, setIsUpdatedTheme] = useState(false);

  /**
   * 设置按钮：
   *   1. 如果主题是系统模式则获取 systemTheme 的值
   *   2. 如果主题是其他模式，则直接获取值
   * */
  useEffect(() => {
    setMounted(true);

    if (!theme) return;

    // 如果当前值为系统值，则按钮跟随系统主题
    if (theme === "system") {
      if (systemTheme === "dark") {
        setAnimateState("hidden");
      } else {
        setAnimateState("visible");
      }

      // 如果不为系统模式，则按钮跟随 theme
    } else if (["light", "dark"].includes(theme)) {
      if (theme === "dark") {
        setAnimateState("hidden");
      } else {
        setAnimateState("visible");
      }
    }
  }, [theme, systemTheme]);

  // 手动设置 theme
  const updateTheme = () => {
    setIsUpdatedTheme(true);

    if (animateState === "hidden") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // 如果已经修改过 theme 值，则系统颜色再变更的话跟随主题色
  useEffect(() => {
    if (isUpdatedTheme) {
      setTheme("system");
    }
  }, [systemTheme, setTheme]);

  return (
    <div className="flex select-none items-center">
      <div className="mx-5 flex h-7 w-7 items-center">
        {mounted && (
          <HoverCard>
            <HoverCardTrigger>
              <motion.svg
                width="18"
                height="18"
                fontSize={24}
                viewBox="0 0 18 18"
                variants={svgVariants}
                initial="hidden"
                animate={animateState}
                fill="hsl(0 0% 63.9%)"
                whileHover={{
                  fill: resolvedTheme === "dark" ? "hsl(0 0% 98%)" : "hsl(0 0% 3.9%)",
                }}
                onClick={updateTheme}
              >
                <motion.circle cx="9" cy="9" r="5" />
                <motion.circle
                  cx="12"
                  cy="12"
                  r="5"
                  fill={resolvedTheme === "dark" ? "hsl(0 0% 3.9%)" : "transparent"}
                />

                {circles.map((circle, index) => (
                  <motion.circle
                    key={index}
                    cx={circle.cx}
                    cy={circle.cy}
                    r="1.5"
                    variants={circleVariants}
                    custom={index}
                    initial="hidden"
                    animate={animateState}
                  />
                ))}
              </motion.svg>
            </HoverCardTrigger>
            <HoverCardContent className="w-28 border-0 bg-transparent p-0 text-center text-xs shadow-none">
              {animateState === "visible" ? "Activity dark mode" : "Activity light mode"}
            </HoverCardContent>
          </HoverCard>
        )}
      </div>
    </div>
  );
}
