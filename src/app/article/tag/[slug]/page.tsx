import { getAllBlogsByTag } from "@/app/lib/blogs";
import { Props } from "@/app/types/blogs";
import { TransformString } from "@/utils/tags";
import Link from "next/link";

export default async function Home({ params: { slug } }: Readonly<Props>) {
  const blogs = await getAllBlogsByTag(TransformString(slug));
  return (
    <div>
      {blogs.map((blog, index) => {
        return (
          <div key={blog.slug + index} className="font-medium">
            <Link
              href={`/article/${blog.slug}`}
              className="flex w-full justify-between hover:text-light-primary dark:hover:text-dark-primary"
            >
              <div>{blog.title}</div>
              {/* <div>{blog.createdTime}</div> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
