"use client";
import DarkMode from "@/components/header/DarkMode";
import DemoIcon from "@/components/header/DemoIcon";
import GitHubIcon from "@/components/header/GithubIcon";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

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
  const menus = [
    { name: "Blogs", path: "/blogs" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <motion.ul variants={variants}>
      <div className="flex h-screen items-center">
        <div className={`my-60 flex h-2/3 w-screen flex-col justify-between py-8 pl-6`}>
          <div>
            {menus.map((menu, index) => (
              <div className="relative mb-4 w-1/2 cursor-pointer" key={menu.name + index}>
                <MenuItem menu={menu} index={index} />
              </div>
            ))}
          </div>

          <div className="mb-4 flex w-1/2 cursor-pointer">
            <GitHubIcon />
            <DemoIcon />
            <DarkMode />
          </div>
        </div>
      </div>
    </motion.ul>
  );
};
