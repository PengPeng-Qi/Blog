"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface MenuToggleProps {
  toggle: () => void; // `toggle` 是一个不接受参数并且不返回任何值的函数
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  const theme = useTheme().resolvedTheme;

  return (
    <button onClick={toggle} className="pointer-events-auto absolute right-4 top-4 z-50">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          stroke={theme === "dark" ? "white" : "black"}
          variants={{
            closed: { d: "M 2 3 L 20 3" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          stroke={theme === "dark" ? "white" : "black"}
          variants={{
            closed: { d: "M 2 15 L 20 15" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
