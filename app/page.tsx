"use client";
import { generateSearchIndex } from "@/lib/blogs";

export default function Home() {
  // generateSearchIndex();

  return (
    <div className="cursor-pointer">
      <div className="mb-5">Hi, I&apos;m Qi Peng, Welcome to my blog.</div>

      <div>
        My blog will contain articles, projects and about me, but for now, it is
        under development. 🚧
      </div>
    </div>
  );
}
