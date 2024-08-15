"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";
import DarkMode from "./header/DarkMode";
import DemoIcon from "./header/DemoIcon";
import GitHubIcon from "./header/GithubIcon";
import MobileMenu from "./header/MobileMenu";
import MyLogo from "./header/MyLogo";
import Search from "./header/Search";

export default function Header() {
  const pathName = usePathname();
  const menus = ["blogs", "projects"];

  const menuWithNodeMap = useMemo(() => new Map<string, HTMLElement>(), []); // 存储每个 menu 对应的 node 元素
  const annotatesMap = useMemo(() => new Map<string, RoughAnnotation>(), []); // 存储每个 menu 对应的线

  // 选中的菜单划线
  useEffect(() => {
    menuWithNodeMap.forEach((node, menuName) => {
      if (pathName.includes(menuName)) {
        // 如果从来没有划过线
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
  }, [pathName, menuWithNodeMap, annotatesMap]);

  // 监听滚动事件，以便给 header 添加毛玻璃效果
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <>
      <div
        className={`sticky left-0 top-0 z-10 flex h-14 w-full cursor-pointer items-center justify-between px-2 ${isScrolled ? "backdrop-blur" : ""} sm:px-6 lg:px-32`}
      >
        <div className="mx-3 flex items-center justify-center lg:mx-0">
          <div className="h-8 w-8">
            <MyLogo />
          </div>

          <div className="hidden sm:ml-16 lg:block">
            <div className="flex items-center justify-center font-medium">
              {menus.map((menu) => {
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
                    className="mr-8 hover:text-light-primary dark:hover:text-dark-primary sm:mr-10"
                  >
                    {menu[0].toUpperCase() + menu.slice(1)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex">
            <Search />
            <GitHubIcon />
            <DemoIcon />
            {/* <DarkMode /> */}
          </div>
        </div>

        <div className="block sm:hidden">
          <div className="fixed right-0 top-0 z-50">
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
}
