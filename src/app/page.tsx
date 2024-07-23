import Link from "next/link";
import { getAllBlogs } from "./lib/blogs";
import { Blogs } from "./types/blogs";

export default async function Home() {
  const allBlogs: Blogs = await getAllBlogs();

  return (
    <div className="mx-32">
      {allBlogs.map((blog, index) => {
        return (
          <div key={index + blog.slug}>
            <Link href={"/posts/" + blog.slug} className="mb-3">
              {blog.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
