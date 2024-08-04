import Link from "next/link";
import { getAllTags } from "../lib/blogs";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="flex max-w-64 flex-wrap">
      {tags.map((tag, index) => (
        <div key={index} className="mb-4 duration-300 hover:scale-110">
          <Link
            className="mb-2 mr-2 cursor-pointer rounded-lg bg-light-card-primary px-4 py-1 text-xs dark:bg-dark-card-primary"
            href={`/article/tag/${tag.toLowerCase()}`}
          >
            {tag}
          </Link>
        </div>
      ))}
    </div>
  );
}
