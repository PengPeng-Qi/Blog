import { Button } from "@/components/ui/button";
import { getAllBlogsByTag } from "@/lib/blogs";
import { TransformString } from "@/lib/utils";
import { Props } from "@/types/blogs";
import Link from "next/link";

export default async function Home({ params: { slug } }: Readonly<Props>) {
  const blogs = await getAllBlogsByTag(TransformString(slug));

  return (
    <div className="cursor-pointer">
      <div className="mb-8 text-2xl font-medium">RECENTLY PUBLISHED</div>

      {blogs.map(({ slug, title, createdTime }, index) => {
        return (
          <div
            key={slug + title}
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
  );
}
