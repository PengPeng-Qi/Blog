"use client";
import { useEffect, useRef, useState } from "react";

type HeadType = Array<{ text: string; id: string; level: string }>;

const TOC = () => {
  const [headings, setHeadings] = useState<HeadType>([]);
  const [activeId, setActiveId] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const articleElement = document.querySelector("article");
    if (!articleElement) return;

    // 获取菜单结构
    const extractedHeadings: HeadType = Array.from(articleElement.querySelectorAll("h2, h3")).map((heading) => ({
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

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${80}px 0px -30% 0px`, // 调整 rootMargin 以考虑菜单栏高度
      threshold: 0.3, // 目标元素与视口交叉比例大于0.1时触发
    });

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

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // 菜单栏高度

    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // 更新 activeId
      setActiveId(id);
    }
  };

  return (
    <>
      <div className="mb-5 mt-6 text-xl text-neutral-600 dark:text-neutral-300">TABLE OF CONTENTS</div>

      <ul className="sticky right-0 top-0 translate-y-10 animate-slideUp cursor-pointer opacity-0">
        {headings.map(({ text, id, level }) => (
          <li key={id + text} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
            <span
              onClick={() => handleSmoothScroll(id)}
              className={`link-hover transition-colors duration-300 ease-in-out hover:text-neutral-800 dark:hover:text-neutral-50 ${
                activeId === id ? "font-medium text-neutral-800 dark:text-neutral-50" : "text-neutral-500"
              }`}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TOC;
