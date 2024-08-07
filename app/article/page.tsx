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
        {allBlogs.map(({ title, slug, createdTime }, index) => {
          return (
            <div
              key={title + slug}
              className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary"
            >
              <Link href={"/article/" + slug}>
                <span className="font-medium">{title}</span>
              </Link>

              <div className="ml-2 text-xs text-gray-400 sm:mr-6">
                {createdTime}
              </div>
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
