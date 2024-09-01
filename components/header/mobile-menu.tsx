"use client";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./mobile/menu-toggle";
import { Navigation } from "./mobile/navigation";

const sidebar = {
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.65 },
  },
};

export default function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className={`h-10 w-10 ${isOpen ? "pointer-events-auto" : "pointer-events-none"} `}>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div
          className={`fixed right-0 top-0 z-40 h-screen w-screen bg-neutral-50/80 backdrop-blur-sm dark:bg-neutral-950/80`}
          variants={sidebar}
          onClick={() => toggleOpen(0)}
        >
          <Navigation />
        </motion.div>

        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    </div>
  );
}
