import Link from "next/link";
import Tags from "../components/Tags";
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
    <div className="flex cursor-pointer justify-between">
      <div>
        <div className="mb-6 font-medium text-red-600">RECENTLY PUBLISHED</div>
        {allBlogs.map((blog, index) => {
          return (
            <div key={index + blog.slug} className="flex">
              <Link
                href={"/article/" + blog.slug}
                className="mb-3 truncate font-medium hover:text-light-primary dark:hover:text-dark-primary"
              >
                {blog.title}
              </Link>

              {/* <div className="mr-2 sm:mr-6">{blog.createdTime}</div> */}
            </div>
          );
        })}
      </div>

      <div className="hidden sm:block">
        <div className="mb-6 font-medium text-red-600">TOP CATEGORIES</div>
        <Tags />
      </div>
    </div>
  );
}
