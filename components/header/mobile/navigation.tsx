"use client";
import DarkMode from "@/components/header/dark-mode";
import { DemoIcon, GitHubIcon } from "@/components/social-icons/icons";
import { MenuStructure } from "@/config/menu";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    /**
     * delayChildren: 子动画开始的延迟时间
     * staggerChildren: 子动画错开的时间
     * staggerDirection: 错开子动画的方向
     */
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
  closed: {
    transition: { staggerChildren: 0.08, staggerDirection: 1 },
  },
};

export const Navigation = () => {
  return (
    <motion.ul variants={variants}>
      <div className="flex h-screen items-center">
        <div className={`my-60 flex h-2/3 w-screen flex-col justify-between py-8 pl-8`}>
          <div>
            {MenuStructure.map((menu, index) => (
              <div className="relative w-1/2 cursor-pointer py-4" key={menu.name + index}>
                <MenuItem menu={menu} index={index} />
              </div>
            ))}
          </div>

          <div className="mb-4 flex w-1/2 cursor-pointer">
            <GitHubIcon />
            <div className="w-6"></div>
            <DemoIcon />
            <div className="w-6"></div>
            <DarkMode />
          </div>
        </div>
      </div>
    </motion.ul>
  );
};
