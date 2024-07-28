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
      text: heading.textContent || "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);
  }, []);

  const [hash, setHash] = useState(
    decodeURIComponent(window.location.hash).slice(1),
  );

  return (
    <ul className="sticky right-0 top-0">
      {headings.map(({ text, id, level }) => (
        <li key={id} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
          <Link
            href={`#${id}`}
            onClick={() => setHash(id)}
            className={`link-hover ${hash === id ? "text-blue-300" : "text-gray-400"} hover:text-gray-100`}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TOC;
