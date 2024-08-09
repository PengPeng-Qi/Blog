"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";
import DarkMode from "./DarkMode";
import GitHubIcon from "./GithubIcon";
import MyLogo from "./MyLogo";
import Search from "./Search";

export default function Header() {
  const pathName = usePathname();
  const menus = ["article", "projects"];
  const menuWithNodeMap = new Map<string, HTMLElement>();

  const annotatesMap = new Map<string, RoughAnnotation>();
  const [isScrolled, setIsScrolled] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  }, [pathName, menuWithNodeMap]);

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
  }, [menuWithNodeMap]);

  // 禁止禁用菜单的点击
  const handleClick = (menu: string, e: React.MouseEvent) => {
    if (disabledMenus.includes(menu)) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`sticky left-0 top-0 z-10 flex h-14 w-full cursor-pointer items-center justify-between px-2 ${isScrolled ? "backdrop-blur" : ""} sm:px-6 lg:px-32`}
    >
      <div className="mx-3 flex items-center justify-center lg:mx-0">
        <div className="h-8 w-8">
          <MyLogo />
        </div>

        <div className="hidden sm:ml-16 lg:block">
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

      <div className="flex flex-1 sm:flex-grow-0">
        <Search />
        <GitHubIcon />
        <DarkMode />
      </div>
    </div>
  );
}
