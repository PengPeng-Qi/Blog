import Tags from "@/components/tags";
import { Button } from "@/components/ui/button";
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
        <div className="mb-8 text-2xl font-medium">RECENTLY PUBLISHED</div>

        {allBlogs.map(({ title, slug, createdTime }, index) => {
          return (
            <div
              key={title + slug}
              style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 100}ms` }}
              className="flex translate-y-10 animate-slideUp opacity-0"
            >
              <Button variant="link" className="text-light block pl-0 pr-2">
                <Link href={"/blogs/" + slug}>{title}</Link>
              </Button>

              <div className="py-2 text-xs text-neutral-400 sm:mr-6">{createdTime}</div>
            </div>
          );
        })}
      </div>

      <div className="hidden sm:block">
        <div className="mb-6 font-medium">TOP CATEGORIES</div>
        <Tags />
      </div>
    </div>
  );
}
