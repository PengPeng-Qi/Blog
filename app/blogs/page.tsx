import Tags from "@/components/Tags";
import { getAllBlogs } from "@/lib/blogs";
import { Blogs } from "@/types/blogs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "碰碰漆的博客",
  keywords: ["博客", "程序员"],
};

export default async function Home() {
  let allBlogs: Blogs = await getAllBlogs();

  allBlogs = allBlogs.sort(
    (blogA, blogB) => new Date(blogB.createdTime).getTime() - new Date(blogA.createdTime).getTime()
  );

  return (
    <div className="flex cursor-pointer justify-between">
      <div>
        <div className="mb-6 font-medium text-red-600">RECENTLY PUBLISHED</div>
        {allBlogs.map(({ title, slug, createdTime }) => {
          return (
            <div
              key={title + slug}
              className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary"
            >
              <Link href={"/blogs/" + slug}>
                <span className="font-medium">{title}</span>
              </Link>

              <div className="ml-2 text-xs text-gray-400 sm:mr-6">{createdTime}</div>
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
