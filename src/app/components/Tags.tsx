import Link from "next/link";
import { getAllTags } from "../lib/blogs";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="mt-8 flex">
      {tags.map((tag, index) => (
        <div key={index} className="duration-300 hover:scale-110">
          <Link
            className="bg-light-card-primary dark:bg-dark-card-primary mb-2 mr-2 cursor-pointer rounded-lg px-3 py-1 text-xs"
            href={`/article/tag/${tag}`}
          >
            {tag}
          </Link>
        </div>
      ))}
    </div>
  );
}
