"use client";
import { useTheme } from "next-themes";
import { generateSearchIndex } from "./lib/blogs";

export default function Home() {
  // useTheme().setTheme("system");

  // generateSearchIndex();
  return (
    <div className="cursor-pointer">
      <div className="mb-5">
        Hi, I&apos;m Qi Peng, Welcome to my blog that record my life ❤️.
      </div>

      <div>My blog will includes article, projects and about me.</div>
    </div>
  );
}
