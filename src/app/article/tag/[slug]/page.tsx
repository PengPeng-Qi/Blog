import { getAllBlogsByTag } from "@/app/lib/blogs";
import { Props } from "@/app/types/blogs";
import Link from "next/link";

export default async function Home({ params: { slug } }: Readonly<Props>) {
  const blogs = await getAllBlogsByTag(slug);
  return (
    <div>
      {blogs.map((blog, index) => {
        return (
          <div key={blog.slug + index}>
            <Link
              href={`/article/${blog.slug}`}
              className="flex w-full justify-between"
            >
              <div>{blog.title}</div>
              <div>{blog.createdTime}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
