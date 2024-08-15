"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: () => {
    return {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 14 },
    };
  },
  closed: () => {
    return {
      x: -120,
      opacity: 0,
      transition: { type: "spring", duration: 0.5 },
    };
  },
};

interface MenuItemProps {
  menu: { name: string; path: string };
  index: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({ menu, index }) => {
  return (
    <motion.li variants={variants} custom={index}>
      <Link href={menu.path} className="text-xl">
        {menu.name}
      </Link>
    </motion.li>
  );
};
