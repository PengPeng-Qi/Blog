"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Switch } from "./ui/switch";

export default function DarkMode() {
  const Theme = useTheme();
  const [isChecked, setIsChecked] = useState<boolean | null>(null);

  useEffect(() => {
    // 使用 resolvedTheme 初始化状态
    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme) {
      setIsChecked(storedTheme === "dark");
    } else {
      setIsChecked(Theme.resolvedTheme === "dark");
    }
  }, [Theme.resolvedTheme]);

  const handleClickDarkMode = (value: boolean) => {
    setIsChecked(value);
    Theme.setTheme(value ? "dark" : "light");
  };

  return (
    <div className="mx-3 flex items-center">
      {isChecked === null ? (
        <div className="w-11"></div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Switch checked={isChecked} onCheckedChange={handleClickDarkMode} />
        </motion.div>
      )}
    </div>
  );
}
