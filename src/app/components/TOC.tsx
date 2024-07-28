"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);

  useEffect(() => {
    const articleElement = document.querySelector("article");
    if (!articleElement) return;

    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3"),
    ).map((heading) => ({
      text: heading.textContent ?? "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);
  }, []);

  return (
    <div className="font-sans">
      <div className="mb-5 mt-6 text-xl font-medium">TABLE OF CONTENTS</div>
      <ul className="sticky right-0 top-0">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
            <Link
              href={`#${id}`}
              className={`link-hover text-gray-400 hover:text-gray-950 dark:hover:text-gray-100`}
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
