import { getAllTags } from "@/lib/blogs";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="flex max-w-64 translate-y-10 animate-slideUp flex-wrap opacity-0">
      {tags.map((tag) => (
        <div key={tag} className="mb-4 duration-300 hover:scale-110">
          <Badge variant="secondary" className="mr-2">
            <Link href={`/blogs/tag/${tag.toLowerCase()}`}>{tag}</Link>
          </Badge>
        </div>
      ))}
    </div>
  );
}
