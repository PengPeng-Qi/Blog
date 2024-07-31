"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const articleElement = document.querySelector("article");
    if (!articleElement) return;

    // 获取菜单结构
    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3"),
    ).map((heading) => ({
      text: heading.textContent ?? "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);

    // 处理菜单结构的 active
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {});

    // 监听每个菜单结构
    extractedHeadings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className="font-sans">
      <div className="mb-5 mt-6 text-xl font-medium">TABLE OF CONTENTS</div>
      <ul className="sticky right-0 top-0">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
            <Link
              href={`#${id}`}
              className={`link-hover hover:text-light-primary dark:hover:text-dark-primary ${
                activeId === id
                  ? "text-bold text-light-primary dark:text-dark-primary"
                  : ""
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
