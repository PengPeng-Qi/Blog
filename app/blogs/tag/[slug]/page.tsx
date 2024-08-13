import { getAllBlogsByTag } from "@/lib/blogs";
import { TransformString } from "@/lib/utils";
import { Props } from "@/types/blogs";
import Link from "next/link";

export default async function Home({ params: { slug } }: Readonly<Props>) {
  const blogs = await getAllBlogsByTag(TransformString(slug));
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">RECENTLY PUBLISHED</div>
      {blogs.map(({ slug, title, createdTime }) => {
        return (
          <div key={slug + title} className="flex justify-between font-medium">
            <Link href={`/blogs/${slug}`} className="hover:text-light-primary dark:hover:text-dark-primary">
              <div>{title}</div>
            </Link>

            <div className="text-neutral-400">{createdTime}</div>
          </div>
        );
      })}
    </div>
  );
}
