import { getAllBlogsByTag } from "@/lib/blogs";
import { TransformString } from "@/lib/utils";
import { Props } from "@/types/blogs";
import Link from "next/link";

export default async function Home({ params: { slug } }: Readonly<Props>) {
  const blogs = await getAllBlogsByTag(TransformString(slug));
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">RECENTLY PUBLISHED</div>
      {blogs.map((blog, index) => {
        return (
          <div
            key={blog.slug + index}
            className="flex justify-between font-medium"
          >
            <Link
              href={`/article/${blog.slug}`}
              className="hover:text-light-primary dark:hover:text-dark-primary"
            >
              <div>{blog.title}</div>
            </Link>

            <div className="text-gray-400">{blog.createdTime}</div>
          </div>
        );
      })}
    </div>
  );
}
