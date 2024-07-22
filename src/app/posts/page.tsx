import { MDXRemote } from "next-mdx-remote/rsc";
import getAllBlogs from "../lib/blogs";

export default async function Page() {
  const res = await getAllBlogs();

  return (
    <div className="mx-32">
      <article className="prose dark:prose-invert">
        <MDXRemote source={res.content} />
      </article>
    </div>
  );
}
