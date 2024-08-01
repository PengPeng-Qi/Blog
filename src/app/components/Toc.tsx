"use client";
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
    <div className="font-sans">
      <div className="mb-5 mt-6 text-xl font-medium">TABLE OF CONTENTS</div>
      <ul className="sticky right-0 top-0 cursor-pointer">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
            <span
              onClick={() => handleSmoothScroll(id)}
              className={`link-hover hover:text-light-primary dark:hover:text-dark-primary ${
                activeId === id
                  ? "font-bold text-light-primary dark:text-dark-primary"
                  : ""
              }`}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
