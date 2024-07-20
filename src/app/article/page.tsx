"use client";

import Content from "./post.mdx";

export default function Page() {
  return (
    <div className="mx-32">
      <article className="prose dark:prose-invert">
        <Content></Content>
      </article>
    </div>
  );
}
