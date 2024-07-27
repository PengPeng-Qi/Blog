import Link from "next/link";
import { getAllBlogs } from "../lib/blogs";
import { Blogs } from "../types/blogs";

export default async function Home() {
  let allBlogs: Blogs = await getAllBlogs();

  allBlogs = allBlogs.sort(
    (blogA, blogB) =>
      new Date(blogB.createdTime).getTime() -
      new Date(blogA.createdTime).getTime(),
  );

  return (
    <div>
      {allBlogs.map((blog, index) => {
        return (
          <div key={index + blog.slug} className="flex">
            <div className="mr-6 w-32">{blog.createdTime}</div>

            <Link
              href={"/article/" + blog.slug}
              className="mb-3 hover:text-blue-800"
            >
              {blog.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
