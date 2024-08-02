import Link from "next/link";
import { getAllTags } from "../lib/blogs";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="mt-8">
      {tags.map((tag, index) => (
        <Link
          key={index}
          className="mb-2 mr-2 cursor-pointer rounded-lg bg-slate-500 px-3 py-1 text-xs"
          href={`/article/tag/${tag}`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
