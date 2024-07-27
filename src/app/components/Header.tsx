"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";

export default function Header() {
  const pathName = usePathname();
  const menus = ["article", "projects", "about"];
  const nodeMap = new Map<string, HTMLElement>();
  const annotatesMap = new Map<string, RoughAnnotation>();

  useEffect(() => {
    nodeMap.forEach((node, menuName) => {
      if (pathName.includes(menuName)) {
        if (!annotatesMap.has(menuName)) {
          const activeNode = annotate(node, {
            type: "underline",
            color: "yellow",
            strokeWidth: 1,
          });

          annotatesMap.set(menuName, activeNode);
        }
        annotatesMap.get(menuName)?.show();
      } else {
        annotatesMap.get(menuName)?.hide();
      }
    });

    return () => {
      annotatesMap.forEach((value) => {
        value.hide();
      });
    };
  });

  // const handleAnnotate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   nodeMap.forEach((node, menuName) => {
  //     if (e.target instanceof HTMLElement) {
  //       if (e.target.id.includes(menuName)) {
  //         if (!annotatesMap.has(menuName)) {
  //           const activeNode = annotate(node, {
  //             type: "underline",
  //             color: "yellow",
  //             strokeWidth: 1,
  //           });

  //           annotatesMap.set(menuName, activeNode);
  //         }
  //         annotatesMap.get(menuName)?.show();
  //       } else {
  //         annotatesMap.get(menuName)?.hide();
  //       }
  //     }
  //   });
  // };

  return (
    <div className="sticky left-0 top-0 z-10 flex h-14 w-screen cursor-pointer items-center justify-between px-2 backdrop-blur-sm backdrop-filter sm:px-32">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={36}
          height={36}
          className="dark:invert"
          priority
        />
      </Link>

      <div className="flex w-64 justify-between">
        {menus.map((menu, index) => {
          return (
            <Link
              href={`/${menu}`}
              id={menu}
              key={menu + index}
              ref={(node) => {
                if (node) {
                  nodeMap.set(menu, node);
                }
              }}
            >
              {menu[0].toUpperCase() + menu.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
