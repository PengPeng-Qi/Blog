"use client";

import { MenuStructure } from "@/config/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkMode from "./header/dark-mode";
import MobileMenu from "./header/mobile-menu";
import MyLogo from "./header/my-logo";
import Search from "./header/search";
import { DemoIcon, GitHubIcon } from "./social-icons/icons";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  // 监听滚动事件，以便给 header 添加毛玻璃效果
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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
        className={`sticky left-0 top-0 z-10 flex h-20 w-full cursor-pointer items-center justify-between px-2 ${isScrolled ? "backdrop-blur" : ""} sm:px-6 lg:px-32`}
      >
        <div className="mx-3 flex items-center justify-center pb-6 lg:mx-0">
          <div className="h-8 w-8">
            <MyLogo />
          </div>

          <div className="hidden sm:ml-6 sm:block md:ml-12">
            <div className="flex items-center justify-center font-medium">
              {MenuStructure.map(({ name, path }) => {
                return (
                  <Link
                    href={path}
                    key={name}
                    className={`mr-8 hover:text-neutral-800 dark:hover:text-neutral-100 sm:mr-10 ${pathName === path ? "text-neutral-800 dark:text-neutral-100" : "text-neutral-400"} duration-200`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden pb-6 sm:block">
          <div className="flex">
            <Search />
            <GitHubIcon />
            <DemoIcon />
            <DarkMode />
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
