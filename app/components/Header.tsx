"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";
import GitHubIcon from "./GithubIcon";
import Search from "./Search";

export default function Header() {
  const pathName = usePathname();
  const menus = ["article", "projects"];
  const menuWithNodeMap = new Map<string, HTMLElement>();

  const annotatesMap = new Map<string, RoughAnnotation>();
  // 选中的菜单划线
  useEffect(() => {
    menuWithNodeMap.forEach((node, menuName) => {
      if (pathName.includes(menuName)) {
        if (!annotatesMap.has(menuName)) {
          const activeNode = annotate(node, {
            type: "underline",
            color: "hsl(53deg, 100%, 50%)",
            strokeWidth: 2,
          });

          annotatesMap.set(menuName, activeNode);
        }
        annotatesMap.get(menuName)?.show();
      } else {
        annotatesMap.get(menuName)?.hide();
      }
    });

    return () => {
      annotatesMap.forEach((node) => {
        node.hide();
      });
    };
  });

  const disabledMenus = ["projects"];
  const disabledMenusAnnotatesMap = new Map<string, RoughAnnotation>();
  // 给禁用的菜单划线
  useEffect(() => {
    menuWithNodeMap.forEach((node, menu) => {
      if (disabledMenus.includes(menu)) {
        const activeNode = annotate(node, {
          type: "crossed-off",
          color: "#52525b",
          strokeWidth: 1,
        });
        activeNode.show();
        disabledMenusAnnotatesMap.set(menu, activeNode);
      }
    });

    return () => {
      disabledMenusAnnotatesMap.forEach((disabledNode) => {
        disabledNode.hide();
      });
    };
  }, []);

  // 禁止禁用菜单的点击
  const handleClick = (menu: string, e: React.MouseEvent) => {
    if (disabledMenus.includes(menu)) {
      e.preventDefault();
    }
  };

  return (
    <div className="sticky left-0 top-0 z-10 flex h-14 w-full cursor-pointer items-center justify-between px-6 backdrop-blur lg:px-32">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 15,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="dark:invert"
              priority
            />
          </Link>
        </motion.div>

        {/* <div className="ml-12 sm:ml-16"> */}
        <div className="hidden sm:ml-16 sm:block">
          <div className="flex items-center justify-center font-medium">
            {menus.map((menu, index) => {
              return (
                <Link
                  href={`/${menu}`}
                  id={menu}
                  key={menu}
                  ref={(node) => {
                    if (node) {
                      menuWithNodeMap.set(menu, node);
                    }
                  }}
                  aria-disabled={index !== 1}
                  onClick={(e) => handleClick(menu, e)}
                  className="mr-8 hover:text-light-primary dark:hover:text-dark-primary sm:mr-10"
                >
                  {menu[0].toUpperCase() + menu.slice(1)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex">
        <Search />
        <GitHubIcon />
      </div>
    </div>
  );
}
